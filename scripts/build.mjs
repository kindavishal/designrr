// Step 4: generate the agent-facing static site in site/.
//   site/llms.txt            entry point any agent can read (selection protocol + index)
//   site/catalog.json        machine-readable catalog of usable systems
//   site/systems/<slug>.md   one page per system: facts, AI resources, build guide
//   site/llms-full.txt       every system page concatenated
//   site/index.html          human browser (search + filters)
import { readFileSync, existsSync, rmSync, copyFileSync } from 'node:fs';
import { p, readJSON, writeJSON, writeText, today } from './lib.mjs';

const SITE_URL = (process.env.SITE_URL || 'https://kindavishal.github.io/ai-ready-design-systems').replace(/\/$/, '');
const { systems, policy, rubric, scoredAt } = readJSON(p('data/scored.json'));
const USABLE = new Set(['recommended', 'solid', 'watch']);
const usable = systems.filter((s) => USABLE.has(s.tier));
const fmt = (n) => (n == null ? '—' : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n));
const list = (a) => (a && a.length ? a.join(', ') : '—');
const url = (path) => `${SITE_URL}/${path}`;

rmSync(p('site'), { recursive: true, force: true });

// ---------- MCP config snippets ----------
function mcpConfig(s) {
  const out = [];
  for (const m of s.ai.mcp) {
    if (m.kind === 'npm') out.push({ label: `npm package \`${m.value}\``, json: { mcpServers: { [s.slug]: { command: 'npx', args: ['-y', m.value] } } } });
    else if (m.kind === 'cli') { const [cmd, ...args] = m.value.split(' '); out.push({ label: `\`${m.value}\``, json: { mcpServers: { [s.slug]: { command: cmd, args } } } }); }
    else if (m.kind === 'remote') out.push({ label: `remote server ${m.value}`, json: { mcpServers: { [s.slug]: { type: 'http', url: m.value } } } });
    else if (m.kind === 'repo' && s.signals.repo) out.push({ label: `in-repo package: https://github.com/${s.signals.repo}/tree/HEAD/${m.value.split('/').slice(0, m.value.startsWith('packages/@') ? 3 : 2).join('/')} (see its README for setup)` });
  }
  return out;
}

// ---------- "consider alternatives if" heuristics ----------
function caveats(s) {
  const c = [];
  const t = new Set(s.tags || []);
  if (s.headless) c.push('you want a finished visual style out of the box — this is headless; you supply all styling.');
  if (t.has('government')) c.push('you are building a commercial or non-government product — government systems are designed (and sometimes licensed) for public services.');
  for (const eco of [...t].filter((x) => x.endsWith('-ecosystem'))) c.push(`you are not building inside the ${eco.replace('-ecosystem', '')} ecosystem — its visual language signals that brand.`);
  if (s.styling === 'tailwind') c.push('the project does not use (or cannot add) Tailwind CSS.');
  if (s.styling === 'css-in-js') c.push('you need zero-runtime styling or heavy React Server Components use — check the docs for RSC support.');
  if (s.tier === 'watch') c.push(`maintenance has slowed (last activity ${s.quality.daysSinceActivity} days ago).`);
  if (s.scores.aiReadiness < 30) c.push('you rely on agent tooling — this system has few machine-readable resources, so agents will rely on general knowledge and the docs site.');
  if (s.notes) c.push(s.notes);
  return c;
}

// ---------- Generic build guide when no hand-written guide exists ----------
function genericGuide(s) {
  const lines = ['## Install'];
  const fw = s.frameworks || [];
  if (s.npm) lines.push('```bash', `npm install ${s.npm}`, '```', `Then follow the framework setup in the official getting-started guide: ${s.docs}`);
  else if (s.pub) lines.push('```bash', `flutter pub add ${s.pub}`, '```');
  else if (s.nuget) lines.push('```bash', `dotnet add package ${s.nuget}`, '```');
  else lines.push(`See ${s.docs} for installation.`);
  lines.push('', '## Agent tips');
  if (s.ai.llmsTxt) lines.push(`- Read ${s.ai.llmsTxt} first — it indexes the official docs in markdown.`);
  if (s.ai.mcp.length) lines.push('- Connect the MCP server listed above before writing code; use it to look up components and props.');
  if (s.ai.tokensPath) lines.push(`- Design tokens live in the repo (e.g. \`${s.ai.tokensPath}\`); map brand colours/typography onto these rather than hard-coding values.`);
  if (fw.includes('web-components')) lines.push('- Web components work in any framework; in React 19+ they can be used directly, older React may need wrappers.');
  lines.push('- Use the system\'s own layout, form and feedback components before adding third-party UI libraries.');
  return lines.join('\n');
}

const BUILD_CHECKLIST = `## Build checklist (any system)
1. **Install & provider** — follow the install section exactly for the detected framework and version.
2. **Brand → tokens** — set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first** — build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components** — map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States** — loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility** — keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness** — enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify** — run the app, click through every screen, fix console errors and type errors.`;

function page(s) {
  const guideFile = p('guides', `${s.slug}.md`);
  const guide = existsSync(guideFile) ? readFileSync(guideFile, 'utf8').trim() : genericGuide(s);
  const mcp = mcpConfig(s);
  const repo = s.signals.repo ? `https://github.com/${s.signals.repo}` : null;
  const md = [
    `# ${s.name}`,
    '',
    `> ${s.bestFor || s.description || `${s.name} by ${s.org}.`}`,
    '',
    '| | |', '|---|---|',
    `| Tier | **${s.tier}** |`,
    `| AI-readiness | **${s.scores.aiReadiness}/100** |`,
    `| Maintainer | ${s.org || '—'}${s.orgBacked ? ' (org-backed)' : ''} |`,
    `| Platforms | ${list(s.platforms)} |`,
    `| Frameworks | ${list(s.frameworks)} |`,
    `| Styling | ${s.styling || '—'}${s.headless ? ' (headless)' : ''} |`,
    `| Good for | ${list(s.tags)} |`,
    `| License | ${s.signals.license || '—'} |`,
    `| GitHub stars | ${fmt(s.signals.stars)} |`,
    s.signals.npmWeeklyDownloads != null ? `| npm weekly downloads | ${fmt(s.signals.npmWeeklyDownloads)} (\`${s.npm}\`) |` : null,
    s.signals.pubLikes != null ? `| pub.dev likes | ${fmt(s.signals.pubLikes)} (\`${s.pub}\`) |` : null,
    s.signals.nugetTotalDownloads != null ? `| NuGet downloads | ${fmt(s.signals.nugetTotalDownloads)} (\`${s.nuget}\`) |` : null,
    `| Last activity | ${s.quality.lastActivity ? s.quality.lastActivity.slice(0, 10) : '—'} |`,
    `| Docs | ${s.docs || '—'} |`,
    repo ? `| Source | ${repo} |` : null,
    '',
    '## AI resources (use these first)',
    s.ai.llmsTxt ? `- **llms.txt:** ${s.ai.llmsTxt}` : '- llms.txt: not published',
    s.ai.llmsFull ? `- **llms-full.txt:** ${s.ai.llmsFull}` : null,
    mcp.length ? '- **MCP server:**' : '- MCP server: none found',
    ...mcp.map((m) => (m.json ? `  - ${m.label}\n    \`\`\`json\n    ${JSON.stringify(m.json)}\n    \`\`\`` : `  - ${m.label}`)),
    s.ai.tokensPath && repo ? `- **Design tokens:** ${repo}/blob/HEAD/${s.ai.tokensPath}` : null,
    s.aiOverrides?.tokens ? `- **Theming tokens:** ${s.aiOverrides.tokens}` : null,
    s.ai.agentDocsPath && repo ? `- **Agent/contributor docs in repo:** ${repo}/blob/HEAD/${s.ai.agentDocsPath}` : null,
    s.ai.codeConnect ? '- **Figma Code Connect:** yes — Figma components map to code.' : null,
    '',
    caveats(s).length ? '## Consider an alternative if' : null,
    ...caveats(s).map((c) => `- ${c}`),
    '',
    guide,
    '',
    BUILD_CHECKLIST,
    '',
    '## Score breakdown',
    '| Capability | Points |', '|---|---|',
    ...s.scores.aiBreakdown.map((b) => `| ${b.label} | ${b.points}/${b.max} |`),
    '',
    `Quality gate: activity **${s.quality.activity}**; traction via ${Object.entries(s.quality.traction).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none'}.${s.reasons.length ? ' Notes: ' + s.reasons.join(' ') : ''}`,
    '',
    `_Data refreshed ${scoredAt}. Source: ${url(`systems/${s.slug}.md`)}_`,
  ].filter((x) => x !== null).join('\n');
  return md;
}

// ---------- Per-system pages ----------
for (const s of usable) writeText(p('site/systems', `${s.slug}.md`), page(s) + '\n');

// ---------- catalog.json ----------
const catalog = {
  name: 'AI-Ready Design Systems',
  description: 'Curated, scored catalog of production-grade design systems for AI agents to choose from and build with.',
  url: SITE_URL, updated: scoredAt, policy, rubric,
  howToUse: url('llms.txt'),
  systems: usable.map((s) => ({
    slug: s.slug, name: s.name, org: s.org, tier: s.tier,
    aiReadiness: s.scores.aiReadiness, popularity: s.scores.popularity,
    platforms: s.platforms, frameworks: s.frameworks, styling: s.styling, headless: !!s.headless, kind: s.kind,
    tags: s.tags, bestFor: s.bestFor || s.description || null,
    install: s.npm ? { npm: s.npm } : s.pub ? { pub: s.pub } : s.nuget ? { nuget: s.nuget } : null,
    docs: s.docs, repo: s.signals.repo ? `https://github.com/${s.signals.repo}` : null,
    license: s.signals.license, stars: s.signals.stars, npmWeeklyDownloads: s.signals.npmWeeklyDownloads,
    lastActivity: s.quality.lastActivity?.slice(0, 10) || null,
    llmsTxt: s.ai.llmsTxt, mcp: s.ai.mcp.length > 0, hasBuildGuide: existsSync(p('guides', `${s.slug}.md`)),
    page: url(`systems/${s.slug}.md`),
  })),
  references: systems.filter((s) => s.tier === 'reference').map((s) => ({ slug: s.slug, name: s.name, org: s.org, docs: s.docs, note: s.notes || 'Closed source: use for inspiration only.' })),
};
writeJSON(p('site/catalog.json'), catalog);

// ---------- llms.txt ----------
const byPlatform = (pred) => usable.filter(pred).filter((s) => s.tier !== 'watch');
const line = (s) => `- [${s.name}](${url(`systems/${s.slug}.md`)}): ${s.tier}, AI ${s.scores.aiReadiness}/100 — ${list(s.frameworks)}; ${s.bestFor || s.description || list(s.tags)}`;
const sections = [
  ['Web — React', (s) => s.platforms.some((x) => /web/.test(x)) && s.frameworks.includes('react') && !s.frameworks.includes('react-native')],
  ['Web — Vue / Nuxt', (s) => s.frameworks.includes('vue')],
  ['Web — Angular', (s) => s.frameworks.includes('angular')],
  ['Web — Svelte / Solid / Astro', (s) => s.frameworks.some((f) => ['svelte', 'solid', 'astro'].includes(f))],
  ['Web — framework-agnostic (web components, CSS, HTML)', (s) => s.frameworks.some((f) => ['web-components', 'any'].includes(f))],
  ['Web — other stacks (Blazor, Rails, Ember, Java, LWC)', (s) => s.frameworks.some((f) => ['blazor', 'rails', 'ember', 'java', 'lwc', 'preact'].includes(f))],
  ['Cross-platform & React Native', (s) => s.frameworks.includes('react-native')],
  ['Flutter', (s) => s.frameworks.includes('flutter')],
  ['iOS / Apple platforms (native)', (s) => s.frameworks.some((f) => ['swiftui', 'uikit'].includes(f))],
  ['Android (native)', (s) => s.frameworks.some((f) => ['jetpack-compose', 'android-views', 'compose-multiplatform'].includes(f))],
];
const tagCounts = {};
usable.forEach((s) => (s.tags || []).forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1)));

const llms = `# AI-Ready Design Systems

> A curated, scored catalog of ${usable.length} production-grade design systems (web, iOS, Android, Flutter, React Native) for AI agents. Use it to pick the best design systems for a product idea, then build the product with the chosen system. Every entry passed a quality gate (actively maintained, real adoption) and is scored for AI-readiness (MCP server, llms.txt, machine-readable tokens, typed APIs, registry install).

Updated ${scoredAt}. Machine-readable catalog: ${url('catalog.json')}. Every system has a page at ${url('systems/<slug>.md')} with install, theming, AI resources and a build guide.

## How to use this (instructions for agents)

When a user asks you to find design systems for a product idea:

1. **Understand the product.** Extract or ask (max 3 short questions, only if it changes the answer):
   - Platform(s): web, iOS, Android, cross-platform, desktop.
   - Existing stack / framework, if any (React/Next.js, Vue/Nuxt, Angular, Svelte, Flutter, SwiftUI, Compose, React Native, Blazor…). If none, you may recommend one.
   - Product type and audience (e.g. B2B dashboard, consumer app, e-commerce, AI chat, government service, internal tool, marketing site).
   - Brand needs: use a system's look as-is, light theming, or a fully custom brand (favour headless or copy-the-source systems for full custom).
   - Constraints: accessibility/regulation level, density (data-heavy vs. spacious), license, Tailwind or not.
2. **Filter** ${url('catalog.json')} by platform and framework. Exclude systems whose ecosystem tags (\`*-ecosystem\`) or \`government\` tag don't fit the product.
3. **Rank** the rest. Weigh, in order: fit with product type and audience (\`tags\`, \`bestFor\`), fit with stack and styling, \`tier\` (recommended > solid > watch), \`aiReadiness\`, \`popularity\`.
4. **Read the page** (\`page\` URL) of your top candidates to confirm fit and caveats ("Consider an alternative if").
5. **Answer with the top 3**: for each, one line on why it fits, the main trade-off, AI-readiness score, and the link to its page. Say which one you recommend and why. Mention when a specialised system should be *combined* with a base system (e.g. AI Elements or assistant-ui for chat on top of shadcn/ui; Tremor for charts).
6. **Build** once the user picks (or immediately if they asked you to build):
   - Open the system page and follow its **Install** and **Setup** sections.
   - Connect its MCP server if one is listed, and read its \`llms.txt\`; prefer these over memory, since APIs change between major versions.
   - Apply the user's brand through the theme/tokens API once at the root, then follow the page's **Build checklist**.

## Scoring

- **Quality gate (to be listed):** commit, release or package publish in the last ${policy.activeDays / 30 | 0} months (12–24 months = "watch"); not archived or deprecated; and at least one of ≥${fmt(policy.minStars)} GitHub stars, ≥${fmt(policy.minNpmWeekly)} weekly npm downloads, ≥${policy.minPubLikes} pub.dev likes, ≥${fmt(policy.minNugetTotal)} NuGet downloads, or maintained by a known company/government/institution.
- **AI-readiness (0–100):** ${rubric.map((r) => `${r.label} (${r.max})`).join('; ')}.
- **Tiers:** recommended = passes gate and AI-readiness ≥ ${policy.recommendedAi} (platform-native systems always qualify); solid = passes gate; watch = maintenance slowing.

## Tags

${Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).map(([t, n]) => `\`${t}\` (${n})`).join(', ')}

${sections.map(([title, pred]) => `## ${title}\n\n${byPlatform(pred).map(line).join('\n')}`).join('\n\n')}

## Watch list (maintenance slowing)

${usable.filter((s) => s.tier === 'watch').map(line).join('\n')}

## Reference only (closed source — inspiration, not installable)

${catalog.references.map((r) => `- ${r.name} (${r.org}): ${r.docs} — ${r.note}`).join('\n')}

## Optional

- [Full text of every system page](${url('llms-full.txt')})
- [Methodology](${url('METHODOLOGY.md')})
`;
writeText(p('site/llms.txt'), llms);
writeText(p('site/llms-full.txt'), usable.map((s) => page(s)).join('\n\n---\n\n') + '\n');
copyFileSync(p('METHODOLOGY.md'), p('site/METHODOLOGY.md'));
writeText(p('site/.nojekyll'), '');
copyFileSync(p('scripts/index.template.html'), p('site/index.html'));

console.log(`Built site/: ${usable.length} system pages, catalog.json, llms.txt (${Math.round(llms.length / 1024)} KB), llms-full.txt. SITE_URL=${SITE_URL}`);
