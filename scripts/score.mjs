// Step 3: quality gate + AI-readiness score -> tier.
// Thresholds are the "balanced" policy agreed for this catalog. Change them here only, and document in METHODOLOGY.md.
import { p, readJSON, writeJSON, daysSince, today } from './lib.mjs';

export const POLICY = {
  activeDays: 365,        // Active: commit, release or publish within 12 months
  watchDays: 730,         // Watch: 12-24 months. Older -> dropped
  minStars: 1000,
  minNpmWeekly: 5000,
  minPubLikes: 300,
  minNugetTotal: 1_000_000,
  recommendedAi: 45,      // AI-readiness needed for "recommended" (out of 100)
};

// AI-readiness rubric (max 100). Each item is a capability an agent can actually use.
const RUBRIC = [
  ['mcp', 20, 'Official MCP server (agent can query components/docs live)'],
  ['llmsTxt', 15, 'llms.txt on the docs site'],
  ['llmsFull', 5, 'llms-full.txt (whole docs as one markdown file)'],
  ['tokens', 15, 'Machine-readable design tokens in the repo'],
  ['typed', 10, 'Typed component API (TypeScript / Swift / Kotlin / Dart / C#)'],
  ['registry', 10, 'Registry / CLI install of component source (e.g. shadcn registry)'],
  ['agentDocs', 5, 'Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo'],
  ['storybook', 5, 'Storybook / live, inspectable examples'],
  ['codeConnect', 5, 'Figma Code Connect (design ↔ code mapping)'],
  ['a11y', 5, 'Accessibility guidance shipped with the source'],
  ['docs', 5, 'Dedicated documentation site'],
];
const NATIVE_TYPED = new Set(['swiftui', 'uikit', 'jetpack-compose', 'android-views', 'flutter', 'blazor', 'compose-multiplatform']);

const candidates = readJSON(p('data/candidates.json')).candidates;
const signals = Object.fromEntries(readJSON(p('data/signals.json')).signals.map((s) => [s.slug, s]));

function newest(...dates) {
  const ds = dates.filter(Boolean).map((d) => new Date(d).getTime()).filter((n) => !Number.isNaN(n));
  return ds.length ? new Date(Math.max(...ds)).toISOString() : null;
}

const scored = candidates.map((c) => {
  const s = signals[c.slug] || {};
  const g = s.github || {};
  const t = s.tree || {};
  const lastActivity = newest(g.lastCommit, g.latestRelease, s.npm?.lastPublish, s.pub?.lastPublish);
  const age = daysSince(lastActivity);
  const reasons = [];

  // ---------- AI readiness ----------
  const has = {
    mcp: (s.mcp || []).length > 0,
    llmsTxt: !!s.llms?.llmsTxt,
    llmsFull: !!s.llms?.llmsFull,
    tokens: !!t.tokens,
    typed: (t.typed || 0) > 20 || !!s.npm?.types || (c.frameworks || []).some((f) => NATIVE_TYPED.has(f)),
    registry: !!t.registry || /shadcn|registry/i.test(`${c.name} ${c.bestFor || ''}`) || ['shadcn-ui', 'shadcn-vue', 'shadcn-svelte', 'spartan', 'zardui', 'rn-reusables', 'park-ui', 'ai-elements', 'untitled-ui', 'diceui', 'intentui'].includes(c.slug),
    agentDocs: !!t.agentDocs || (s.cdn?.shippedSkills?.length > 0),
    storybook: !!t.storybook,
    codeConnect: !!t.codeConnect,
    a11y: !!t.a11y || (c.tags || []).includes('accessibility-critical'),
    docs: !!c.docs,
  };
  // Editorial overrides must carry an evidence string (shown on the system page).
  for (const [k, why] of Object.entries(c.aiOverrides || {})) if (why) has[k] = true;
  const breakdown = RUBRIC.map(([k, pts, label]) => ({ key: k, label, points: has[k] ? pts : 0, max: pts }));
  const ai = breakdown.reduce((a, b) => a + b.points, 0);

  // ---------- Quality gate ----------
  const archived = !!g.archived || !!s.npm?.deprecated;
  const traction = {
    stars: (g.stars || 0) >= POLICY.minStars,
    npm: (s.npm?.weeklyDownloads || 0) >= POLICY.minNpmWeekly,
    pub: (s.pub?.likes || 0) >= POLICY.minPubLikes,
    nuget: (s.nuget?.totalDownloads || 0) >= POLICY.minNugetTotal,
    orgBacked: !!c.orgBacked,
  };
  const passesTraction = Object.values(traction).some(Boolean);
  const activity = c.kind === 'platform' ? 'active' : age == null ? 'unknown' : age <= POLICY.activeDays ? 'active' : age <= POLICY.watchDays ? 'watch' : 'stale';

  let tier;
  if (c.kind === 'reference') { tier = 'reference'; reasons.push('Closed source or paid: documentation only, agents cannot install it.'); }
  else if (archived) { tier = 'dropped'; reasons.push(g.archived ? 'Repository archived.' : 'Package deprecated on npm.'); }
  else if (activity === 'stale') { tier = 'dropped'; reasons.push(`No commit/release/publish in ${age} days.`); }
  else if (activity === 'unknown') { tier = 'dropped'; reasons.push('No public activity signal.'); }
  else if (!passesTraction) { tier = 'dropped'; reasons.push('Below traction floor (stars, downloads, likes) and not org-backed.'); }
  else if (activity === 'watch') { tier = 'watch'; reasons.push(`Last activity ${age} days ago (12-24 months).`); }
  else if (c.kind === 'platform') { tier = 'recommended'; reasons.push('Platform-native system (ships with the SDK).'); }
  else if (ai >= POLICY.recommendedAi) tier = 'recommended';
  else { tier = 'solid'; reasons.push(`AI-readiness ${ai} < ${POLICY.recommendedAi}.`); }

  // Popularity 0-100: mean of the available log-scaled signals. A mean (not max) stops packages that are mostly
  // pulled in transitively (huge npm downloads, modest stars) from outranking systems people choose directly.
  const parts = [];
  if (g.stars != null) parts.push(Math.log10(Math.max(g.stars, 1)) / Math.log10(120000));
  if (s.npm?.exists) parts.push(Math.log10(Math.max(s.npm.weeklyDownloads || 1, 1)) / Math.log10(8_000_000));
  if (s.pub?.exists) parts.push(Math.log10(Math.max(s.pub.likes || 1, 1)) / Math.log10(10000));
  if (s.nuget?.exists) parts.push(Math.log10(Math.max(s.nuget.totalDownloads || 1, 1)) / Math.log10(500_000_000));
  const pop = parts.length ? Math.min(100, Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100)) : 0;

  // ---------- Install profile: how an agent actually gets this into a project ----------
  const fw = new Set(c.frameworks || []);
  const agnostic = fw.has('any') || fw.has('web-components') || fw.has('vanilla');
  const copySource = has.registry || c.family === 'shadcn';
  const cdnReady = !!(s.cdn?.css || s.cdn?.js || c.installOverrides?.cdn);
  const noBuild = c.installOverrides?.noBuild ?? (c.styling !== 'tailwind' && agnostic && cdnReady);
  let mode;
  if (c.kind === 'platform') mode = 'platform-sdk';
  else if (c.pub) mode = 'pub';
  else if (c.nuget) mode = 'nuget';
  else if (copySource) mode = 'copy-source-cli';
  else if (c.styling === 'tailwind') mode = 'npm-tailwind';
  else if (noBuild) mode = 'cdn-or-npm';
  else if (c.npm) mode = 'npm-bundler';
  else mode = 'see-docs';
  const requires = [];
  if (c.styling === 'tailwind') requires.push('tailwind');
  if (['npm-bundler', 'npm-tailwind', 'copy-source-cli'].includes(mode) && (c.platforms || []).some((x) => /web/.test(x))) requires.push('bundler');
  if (mode === 'platform-sdk' || mode === 'pub') requires.push('native-toolchain');
  const install = {
    mode, noBuild, requires,
    npm: c.npm || null, pub: c.pub || null, nuget: c.nuget || null,
    cdn: noBuild || cdnReady ? { css: c.installOverrides?.cdn?.css ?? s.cdn?.css ?? null, js: c.installOverrides?.cdn?.js ?? s.cdn?.js ?? null } : null,
    // Same skill often ships twice (dist/ and dist-cdn/); keep unique skill names.
    shippedSkills: [...new Set((s.cdn?.shippedSkills || []).map((x) => x.split('/').pop()))],
  };
  const frameworks = noBuild && !fw.has('vanilla') ? [...(c.frameworks || []), 'vanilla'] : c.frameworks || [];

  const attributes = {
    darkMode: c.attributes?.darkMode ?? (!!t.darkMode || c.kind === 'platform'),
    rtl: c.attributes?.rtl ?? !!t.rtl,
    packageSizeKB: s.npm?.unpackedSize ? Math.round(s.npm.unpackedSize / 1024) : null,
  };

  return {
    ...c,
    frameworks, install, attributes,
    tier, reasons,
    scores: { aiReadiness: ai, popularity: pop, aiBreakdown: breakdown },
    quality: { activity, lastActivity, daysSinceActivity: age, archived, traction },
    signals: {
      stars: g.stars ?? null, license: g.license || s.npm?.license || null, language: g.language || null, openIssues: g.openIssues ?? null,
      npmWeeklyDownloads: s.npm?.weeklyDownloads ?? null, npmLatest: s.npm?.latest ?? null,
      pubLikes: s.pub?.likes ?? null, nugetTotalDownloads: s.nuget?.totalDownloads ?? null,
      repo: g.repo || c.repo || null, homepage: g.homepage || null,
    },
    ai: {
      llmsTxt: s.llms?.llmsTxt || null, llmsFull: s.llms?.llmsFull || null,
      mcp: (s.mcp || []).map(({ kind, value }) => ({ kind, value })),
      tokensPath: t.tokensExample || null, codeConnect: !!t.codeConnect, agentDocsPath: t.agentDocsExample || null,
    },
  };
});

const order = { recommended: 0, solid: 1, watch: 2, reference: 3, dropped: 4 };
scored.sort((a, b) => order[a.tier] - order[b.tier] || (b.scores.aiReadiness + b.scores.popularity) - (a.scores.aiReadiness + a.scores.popularity));
writeJSON(p('data/scored.json'), { scoredAt: today(), policy: POLICY, rubric: RUBRIC.map(([key, max, label]) => ({ key, max, label })), systems: scored });

const count = (t) => scored.filter((x) => x.tier === t).length;
console.log(`recommended ${count('recommended')} | solid ${count('solid')} | watch ${count('watch')} | reference ${count('reference')} | dropped ${count('dropped')}`);
