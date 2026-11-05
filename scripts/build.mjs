// Step 4: generate the static site in site/.
//   Agents: llms.txt (selection protocol + index), catalog.json, systems/<slug>.md, llms-full.txt
//   People: index.html (filterable catalog), systems/<slug>.html, methodology.html (Web Awesome, no build step)
// All links between files are relative, so a local clone works the same as the hosted site.
import { readFileSync, existsSync, rmSync, copyFileSync } from 'node:fs';
import { p, readJSON, writeJSON, writeText } from './lib.mjs';
import { renderMarkdown } from './md.mjs';
import { shell, esc, SITE_CSS } from './templates.mjs';

const SITE_URL = (process.env.SITE_URL || 'https://kindavishal.github.io/ai-ready-design-systems').replace(/\/$/, '');
const { systems, policy, rubric, scoredAt } = readJSON(p('data/scored.json'));
const editorial = readJSON(p('curation/editorial.json'));
const USABLE = new Set(['recommended', 'solid', 'watch']);
const usable = systems.filter((s) => USABLE.has(s.tier));
const fmt = (n) => (n == null ? '—' : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n));
const list = (a) => (a && a.length ? a.join(', ') : '—');
const url = (path) => `${SITE_URL}/${path}`;
const MODE_LABEL = {
  'platform-sdk': 'Ships with the platform SDK', pub: 'Flutter package (pub.dev)', nuget: 'NuGet package', 'copy-source-cli': 'CLI copies component source into your repo',
  'npm-tailwind': 'npm package, needs Tailwind CSS', 'cdn-or-npm': 'CDN link or npm; no build step needed', 'npm-bundler': 'npm package with a bundler (Vite, Next.js, …)', 'see-docs': 'See the docs',
};

rmSync(p('site'), { recursive: true, force: true });

// ---------- Guides: frontmatter, {{version}}, drift ----------
function loadGuide(s) {
  const file = p('guides', `${s.slug}.md`);
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const meta = fm ? Object.fromEntries(fm[1].split('\n').filter((l) => l.includes(':')).map((l) => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim().replace(/^"|"$/g, '')])) : {};
  let body = fm ? raw.slice(fm[0].length) : raw;
  const latest = s.signals.npmLatest;
  if (latest) body = body.replaceAll('{{version}}', latest);
  let drift = null;
  if (latest && meta.writtenFor && !meta.platformSdk) {
    const major = latest.split('.')[0];
    const wrote = meta.writtenFor.split('.')[0];
    if (major !== wrote) drift = { writtenFor: meta.writtenFor, latest };
  }
  return { body: body.trim(), meta, drift };
}

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

// ---------- "consider an alternative if" ----------
function caveats(s, guide) {
  const c = [];
  const t = new Set(s.tags || []);
  if (s.brandLocked) c.push(`you are not that brand. ${s.brandLocked}`);
  if (s.headless) c.push('you want a finished visual style out of the box. This is headless; you supply all styling.');
  if (t.has('government')) c.push('you are building a commercial or non-government product. Government systems are designed (and sometimes licensed) for public services.');
  for (const eco of [...t].filter((x) => x.endsWith('-ecosystem'))) c.push(`you are not building inside the ${eco.replace('-ecosystem', '')} ecosystem.`);
  if (s.install.requires.includes('tailwind')) c.push('the project does not use (or cannot add) Tailwind CSS.');
  if (s.install.requires.includes('bundler') && !s.install.noBuild) c.push('you need a no-build page (plain HTML from a CDN). This needs a bundler.');
  if (s.styling === 'css-in-js') c.push('you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.');
  if (s.tier === 'watch') c.push(`maintenance has slowed (last activity ${s.quality.daysSinceActivity} days ago).`);
  if (s.scores.aiReadiness < 30) c.push('you rely on agent tooling. This system has few machine-readable resources.');
  if (guide?.drift) c.push(`you copy the build guide verbatim. It was written for v${guide.drift.writtenFor}; the latest release is ${guide.drift.latest}, so confirm commands in the official llms.txt or MCP server.`);
  if (s.notes) c.push(s.notes);
  return c;
}

function genericGuide(s) {
  const lines = ['## Install'];
  if (s.install.mode === 'cdn-or-npm' && (s.install.cdn?.css || s.install.cdn?.js)) {
    lines.push('No build step needed. From the CDN (pinned to the current release):', '```html');
    if (s.install.cdn.css) lines.push(`<link rel="stylesheet" href="${s.install.cdn.css}">`);
    if (s.install.cdn.js) lines.push(`<script ${/esm|module|loader/i.test(s.install.cdn.js) ? 'type="module" ' : ''}src="${s.install.cdn.js}"></script>`);
    lines.push('```', `Check the docs for the recommended files: ${s.docs}`);
  }
  if (s.npm) lines.push('```bash', `npm install ${s.npm}`, '```', `Then follow the framework setup in the official getting-started guide: ${s.docs}`);
  else if (s.pub) lines.push('```bash', `flutter pub add ${s.pub}`, '```');
  else if (s.nuget) lines.push('```bash', `dotnet add package ${s.nuget}`, '```');
  else if (!s.install.cdn) lines.push(`See ${s.docs} for installation.`);
  lines.push('', '## Agent tips');
  if (s.ai.llmsTxt) lines.push(`- Read ${s.ai.llmsTxt} first. It indexes the official docs in markdown.`);
  if (s.ai.mcp.length) lines.push('- Connect the MCP server listed above before writing code, and use it to look up components and props.');
  if (s.install.shippedSkills.length) lines.push(`- The npm package ships agent skills (${s.install.shippedSkills.map((x) => `\`${x}\``).join(', ')}); install them with your agent's skills tooling.`);
  if (s.ai.tokensPath) lines.push(`- Design tokens live in the repo (e.g. \`${s.ai.tokensPath}\`). Map brand colours and type onto these rather than hard-coding values.`);
  if ((s.frameworks || []).includes('web-components')) lines.push('- Web components work in any framework; React 19+ supports them directly, older React may need wrappers.');
  lines.push("- Use the system's own layout, form and feedback components before adding third-party UI libraries.");
  return lines.join('\n');
}

const BUILD_CHECKLIST = `## Build checklist (any system)
1. **Install & provider:** follow the install section exactly for the detected framework and version.
2. **Brand → tokens:** set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first:** build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components:** map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States:** loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility:** keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness:** enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify:** run the app, click through every screen, fix console errors and type errors.`;

// Public usage and community feedback, with sources. Only numbers the APIs returned are shown.
function usageSection(s) {
  const u = s.usage || {};
  const repo = s.signals.repo;
  const rows = [
    u.githubStars != null ? `| GitHub stars | ${fmt(u.githubStars)} | GitHub API (${repo}) |` : null,
    u.githubForks != null ? `| GitHub forks | ${fmt(u.githubForks)} | GitHub API |` : null,
    u.contributors != null ? `| Contributors (incl. anonymous) | ${fmt(u.contributors)} | GitHub API |` : null,
    u.closedIssues != null ? `| Issues closed / open | ${fmt(u.closedIssues)} / ${fmt(u.openIssues)}${u.issuesClosedPct != null ? ` (${u.issuesClosedPct}% closed)` : ''} | GitHub API |` : null,
    u.npmWeeklyDownloads != null ? `| npm weekly downloads | ${fmt(u.npmWeeklyDownloads)} | npm (\`${s.npm}\`${s.signals.npmLatest ? ` ${s.signals.npmLatest}` : ''}) |` : null,
    u.pubLikes != null ? `| pub.dev likes | ${fmt(u.pubLikes)} | pub.dev (\`${s.pub}\`) |` : null,
    u.pubDownloads30d != null ? `| pub.dev downloads (30 days) | ${fmt(u.pubDownloads30d)} | pub.dev |` : null,
    u.nugetTotalDownloads != null ? `| NuGet downloads (all time) | ${fmt(u.nugetTotalDownloads)} | NuGet (\`${s.nuget}\`) |` : null,
  ].filter(Boolean);
  if (!rows.length) return ['## Public usage & feedback', `No public usage numbers available (no public repo or package). Collected ${scoredAt}.`];
  return ['## Public usage & feedback', `Numbers as reported by each source on ${scoredAt}; nothing is estimated.`, '', '| Signal | Value | Source |', '|---|---|---|', ...rows];
}

function pageMarkdown(s) {
  const guide = loadGuide(s);
  const mcp = mcpConfig(s);
  const repo = s.signals.repo ? `https://github.com/${s.signals.repo}` : null;
  const familyPeers = usable.filter((x) => x.family === s.family && x.slug !== s.slug);
  const md = [
    `# ${s.name}`,
    '',
    `> ${s.bestFor || s.description || `${s.name} by ${s.org}.`}`,
    '',
    '| | |', '|---|---|',
    `| Tier | **${s.tier}** |`,
    `| AI-readiness | **${s.scores.aiReadiness}/100** |`,
    `| Maintainer | ${s.org || '—'}${s.orgBacked ? ' (org-backed)' : ''} |`,
    s.brandLocked ? `| Brand-locked | **yes**: ${s.brandLocked} |` : null,
    `| Platforms | ${list(s.platforms)} |`,
    `| Frameworks | ${list(s.frameworks)} |`,
    `| Styling | ${s.styling || '—'}${s.headless ? ' (headless)' : ''} |`,
    `| Install | ${MODE_LABEL[s.install.mode]}${s.install.requires.length ? ` (requires: ${s.install.requires.join(', ')})` : ''} |`,
    `| Good for | ${list(s.tags)}${s.productShapes?.length ? `; shapes: ${s.productShapes.join(', ')}` : ''} |`,
    `| Dark mode / RTL | ${s.attributes.darkMode ? 'yes' : 'not detected'} / ${s.attributes.rtl ? 'yes' : 'not detected'} |`,
    s.attributes.packageSizeKB != null ? `| Package size (unpacked) | ${fmt(s.attributes.packageSizeKB)} KB |` : null,
    `| License | ${s.signals.license || '—'} |`,
    `| Last activity | ${s.quality.lastActivity ? s.quality.lastActivity.slice(0, 10) : '—'} |`,
    `| Docs | ${s.docs || '—'} |`,
    repo ? `| Source | ${repo} |` : null,
    familyPeers.length ? `| Same family | ${familyPeers.map((x) => `[${x.name}](${x.slug}.md)`).join(', ')} |` : null,
    '',
    ...usageSection(s),
    '',
    '## AI resources (use these first)',
    s.ai.llmsTxt ? `- **llms.txt:** ${s.ai.llmsTxt}` : '- llms.txt: not published',
    s.ai.llmsFull ? `- **llms-full.txt:** ${s.ai.llmsFull}` : null,
    mcp.length ? '- **MCP server:**' : '- MCP server: none found',
    ...mcp.map((m) => (m.json ? `  - ${m.label}\n    \`\`\`json\n    ${JSON.stringify(m.json)}\n    \`\`\`` : `  - ${m.label}`)),
    s.mcpNote ? `  - **Access:** ${s.mcpNote}` : null,
    s.cliCopySource ? `- **Copy-the-source CLI:** documented at ${s.cliCopySource}` : null,
    s.install.shippedSkills.length ? `- **Agent skills shipped in the npm package:** ${s.install.shippedSkills.map((x) => `\`${x}\``).join(', ')}` : null,
    s.ai.tokensPath && repo ? `- **Design tokens:** ${repo}/blob/HEAD/${s.ai.tokensPath}` : null,
    s.aiOverrides?.tokens ? `- **Theming tokens:** ${s.aiOverrides.tokens}` : null,
    s.ai.agentDocsPath && repo ? `- **Agent/contributor docs in repo:** ${repo}/blob/HEAD/${s.ai.agentDocsPath}` : null,
    s.ai.codeConnect ? '- **Figma Code Connect:** yes, so Figma components map to code.' : null,
    '',
    caveats(s, guide).length ? '## Consider an alternative if' : null,
    ...caveats(s, guide).map((c) => `- ${c}`),
    '',
    guide ? `_Hand-written guide for ${guide.meta.platformSdk ? guide.meta.writtenFor : `v${guide.meta.writtenFor}`}, ${guide.meta.verifiedAgainst ? `checked against ${guide.meta.verifiedAgainst} on ${guide.meta.written}` : `written ${guide.meta.written}`}${s.signals.npmLatest ? `; latest release ${s.signals.npmLatest}` : ''}._` : '_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._',
    '',
    guide ? guide.body : genericGuide(s),
    '',
    BUILD_CHECKLIST,
    '',
    '## Score breakdown',
    '| Capability | Points |', '|---|---|',
    ...s.scores.aiBreakdown.map((b) => `| ${b.label} | ${b.points}/${b.max} |`),
    '',
    `Quality gate: activity **${s.quality.activity}**; traction via ${Object.entries(s.quality.traction).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none'}.${s.reasons.length ? ' Notes: ' + s.reasons.join(' ') : ''}`,
    '',
    `_Data refreshed ${scoredAt}. Agent-readable source: ${url(`systems/${s.slug}.md`)}_`,
  ].filter((x) => x !== null).join('\n');
  return { md, guide };
}

// ---------- Per-system pages (.md for agents, .html for people) ----------
const pages = {};
for (const s of usable) {
  const { md, guide } = pageMarkdown(s);
  pages[s.slug] = { md, guide };
  writeText(p('site/systems', `${s.slug}.md`), md + '\n');
  const { html, headings } = renderMarkdown(md.replace(/^# .*\n\n> .*\n/, ''));
  const tierVariant = { recommended: 'success', solid: 'brand', watch: 'warning' }[s.tier];
  const main = `    <wa-breadcrumb>
      <wa-breadcrumb-item href="../index.html">Catalog</wa-breadcrumb-item>
      <wa-breadcrumb-item>${esc(s.name)}</wa-breadcrumb-item>
    </wa-breadcrumb>
    <div class="wa-stack wa-gap-s">
      <h1 class="card-title">${esc(s.name)}</h1>
      <p class="lede wa-body-l">${esc(s.bestFor || s.description || '')}</p>
      <div class="wa-cluster wa-gap-xs">
        <wa-badge variant="${tierVariant}">${esc(s.tier)}</wa-badge>
        <wa-badge variant="neutral" appearance="outlined">AI-readiness ${s.scores.aiReadiness}/100</wa-badge>
        ${s.install.noBuild ? '<wa-badge variant="neutral" appearance="outlined">No build step</wa-badge>' : ''}
        ${s.ai.mcp.length ? '<wa-badge variant="neutral" appearance="outlined">MCP server</wa-badge>' : ''}
      </div>
    </div>
    ${s.brandLocked ? `<wa-callout variant="warning"><wa-icon slot="icon" name="triangle-exclamation"></wa-icon><strong>Brand-locked.</strong> ${esc(s.brandLocked)}</wa-callout>` : ''}
    ${guide?.drift ? `<wa-callout variant="warning"><wa-icon slot="icon" name="clock-rotate-left"></wa-icon><strong>Guide may be out of date.</strong> Written for v${esc(guide.drift.writtenFor)}; the latest release is ${esc(guide.drift.latest)}. Confirm commands with the official llms.txt or MCP server.</wa-callout>` : ''}
    <article class="wa-prose">
${html}
    </article>`;
  const aside = `<aside slot="aside" class="wa-desktop-only wa-stack wa-gap-m toc">
    <strong>On this page</strong>
    <ul class="wa-stack wa-gap-2xs wa-caption-m">${headings.map((h) => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ul>
    <wa-divider></wa-divider>
    <strong>For agents</strong>
    <a href="${s.slug}.md" class="wa-caption-m">Markdown version</a>
    <wa-copy-button value="${esc(url(`systems/${s.slug}.md`))}" copy-label="Copy link for an agent"></wa-copy-button>
  </aside>`;
  writeText(p('site/systems', `${s.slug}.html`), shell({ title: `${s.name} · AI-Ready Design Systems`, description: s.bestFor || s.name, base: '../', main, aside }));
}

// ---------- catalog.json ----------
const catalog = {
  name: 'AI-Ready Design Systems',
  description: 'Curated, scored catalog of production-grade design systems for AI agents to choose from and build with.',
  url: SITE_URL, updated: scoredAt, policy, rubric,
  howToUse: url('llms.txt'),
  localUse: 'In a clone of the repository, every URL under the site URL maps to the site/ folder; "path" fields are relative to site/.',
  productShapes: editorial.shapes,
  usageNote: `"usage" holds public numbers exactly as returned by the GitHub API, npm, pub.dev and NuGet on ${scoredAt}. Nothing is estimated; null means the source has no number (for example no public repo). There are no star ratings or reviews: issue counts and contributors are the community-feedback signals. "bestFor", "brandLocked" and "productShapes" are editorial (curated) fields, not measurements.`,
  systems: usable.map((s) => ({
    slug: s.slug, name: s.name, org: s.org, tier: s.tier, family: s.family, brandLocked: s.brandLocked || null,
    aiReadiness: s.scores.aiReadiness, popularity: s.scores.popularity,
    platforms: s.platforms, frameworks: s.frameworks, styling: s.styling, headless: !!s.headless, kind: s.kind,
    tags: s.tags, productShapes: s.productShapes || [], bestFor: s.bestFor || s.description || null,
    install: { mode: s.install.mode, noBuild: s.install.noBuild, requires: s.install.requires, npm: s.install.npm, pub: s.install.pub, nuget: s.install.nuget, cdn: s.install.cdn },
    attributes: s.attributes,
    docs: s.docs, repo: s.signals.repo ? `https://github.com/${s.signals.repo}` : null,
    license: s.signals.license, stars: s.signals.stars, npmWeeklyDownloads: s.signals.npmWeeklyDownloads, latestVersion: s.signals.npmLatest || null,
    lastActivity: s.quality.lastActivity?.slice(0, 10) || null,
    usage: s.usage,
    bestForIsEditorial: true,
    mcpNote: s.mcpNote || null,
    llmsTxt: s.ai.llmsTxt, mcp: s.ai.mcp.length > 0, shippedSkills: s.install.shippedSkills.length > 0,
    buildGuide: pages[s.slug].guide ? { handWritten: true, writtenFor: pages[s.slug].guide.meta.writtenFor, outdated: !!pages[s.slug].guide.drift } : { handWritten: false },
    page: url(`systems/${s.slug}.md`), path: `systems/${s.slug}.md`, html: `systems/${s.slug}.html`,
  })),
  references: systems.filter((s) => s.tier === 'reference').map((s) => ({ slug: s.slug, name: s.name, org: s.org, docs: s.docs, note: s.notes || 'Closed source: use for inspiration only.' })),
};
writeJSON(p('site/catalog.json'), catalog);

// ---------- llms.txt ----------
const line = (s) => `- [${s.name}](${url(`systems/${s.slug}.md`)}): ${s.tier}, AI ${s.scores.aiReadiness}/100, ${list(s.frameworks)}${s.install.noBuild ? ', no build' : ''}${s.brandLocked ? ', BRAND-LOCKED' : ''}. ${s.bestFor || s.description || list(s.tags)}`;
const sections = [
  ['Web: React', (s) => s.platforms.some((x) => /web/.test(x)) && s.frameworks.includes('react') && !s.frameworks.includes('react-native')],
  ['Web: Vue / Nuxt', (s) => s.frameworks.includes('vue')],
  ['Web: Angular', (s) => s.frameworks.includes('angular')],
  ['Web: Svelte / Solid / Astro', (s) => s.frameworks.some((f) => ['svelte', 'solid', 'astro'].includes(f))],
  ['Web: no build step (plain HTML + CDN)', (s) => s.install.noBuild],
  ['Web: framework-agnostic but needs a build (web components, Tailwind plugins)', (s) => !s.install.noBuild && s.frameworks.some((f) => ['web-components', 'any'].includes(f))],
  ['Web: other stacks (Blazor, Rails, Ember, Java, LWC)', (s) => s.frameworks.some((f) => ['blazor', 'rails', 'ember', 'java', 'lwc', 'preact'].includes(f))],
  ['Cross-platform & React Native', (s) => s.frameworks.includes('react-native')],
  ['Flutter', (s) => s.frameworks.includes('flutter')],
  ['iOS / Apple platforms (native)', (s) => s.frameworks.some((f) => ['swiftui', 'uikit'].includes(f))],
  ['Android (native)', (s) => s.frameworks.some((f) => ['jetpack-compose', 'android-views', 'compose-multiplatform'].includes(f))],
];
const tagCounts = {};
usable.forEach((s) => (s.tags || []).forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1)));

const llms = `# AI-Ready Design Systems

> A curated, scored catalog of ${usable.length} production-grade design systems (web, iOS, Android, Flutter, React Native) for AI agents. Use it to pick the best design systems for a product idea, then build the product with the chosen system. Every entry passed a quality gate (actively maintained, real adoption) and is scored for AI-readiness (MCP server, llms.txt, machine-readable tokens, typed APIs, registry install).

Updated ${scoredAt}. Machine-readable catalog: ${url('catalog.json')}. Every system has a page at ${url('systems/<slug>.md')} (install, theming, AI resources, build guide); people can browse ${url('index.html')}.

**Working from a clone instead of the web?** Every URL under ${SITE_URL}/ maps to the \`site/\` folder of the repository (for example \`site/catalog.json\`, \`site/systems/mui.md\`). Each catalog entry also has a relative \`path\`.

## How to use this (instructions for agents)

When a user asks you to find design systems for a product idea:

1. **Understand the product.** Extract, or ask (at most 3 short questions, only if the answer changes the recommendation):
   - Platform(s): web, iOS, Android, cross-platform, desktop.
   - Stack: existing framework (from package.json, pubspec.yaml, *.xcodeproj, build.gradle, *.csproj), or none. **Build setup:** is there a bundler, or must it work as plain HTML from a CDN? Is Tailwind in use?
   - Product shape (\`productShapes\`: ${Object.keys(editorial.shapes).map((k) => `\`${k}\``).join(', ')}) and audience/industry (\`tags\`).
   - Brand: the system's look as-is, light theming, or a fully custom brand (prefer headless or copy-the-source systems for full custom).
   - Constraints: accessibility level, density, dark mode, RTL, license, page weight.
2. **Filter** ${url('catalog.json')}:
   - platform matches; framework matches (use \`vanilla\` for no-framework projects).
   - **Install fits the build setup:** no bundler → require \`install.noBuild: true\`; no Tailwind → exclude \`install.requires\` containing \`tailwind\`.
   - **Exclude \`brandLocked\`** systems unless the user works for that brand. Exclude \`government\`-tagged systems unless it is a public-sector service, and \`*-ecosystem\` tags unless building inside that ecosystem.
3. **Rank** what is left: fit with \`productShapes\` and \`tags\`/\`bestFor\` first, then stack/styling fit, then \`tier\` (recommended > solid > watch), \`aiReadiness\`, \`popularity\`. Use \`attributes\` (darkMode, rtl, packageSizeKB) to break ties when the user cares.
   - **Usage and feedback filters:** if the user asks for proven or popular options, filter on \`usage\` (\`githubStars\`, \`npmWeeklyDownloads\`, \`pubLikes\`, \`nugetTotalDownloads\`, \`contributors\`, \`issuesClosedPct\`, \`lastRelease\`). Quote these numbers with their date instead of describing popularity in your own words, and never invent ratings or reviews: the catalog has none.
4. **One per family.** Systems with the same \`family\` are ports or variants of one system (for example Ant Design for React/Vue/Angular). Keep only the variant that matches the stack, so the top 3 are three genuinely different options.
5. **Read the page** (\`page\` URL) of your top 4–5 to confirm fit and caveats ("Consider an alternative if"). If \`buildGuide.outdated\` is true, plan to confirm setup in the system's own llms.txt or MCP server.
6. **Answer with the top 3**: for each, why it fits, the main trade-off, AI-readiness, install mode, and the page link. Say which one you recommend and why. Mention combinations where they apply (for example AI Elements or assistant-ui for chat on top of shadcn/ui; Tremor for charts).
7. **Build** once the user picks (or immediately if they asked you to build):
   - Follow the page's **Install** and **Setup** for the detected framework and version.
   - Connect its MCP server if listed, install any agent skills shipped in its package, and read its \`llms.txt\`. Prefer these over memory; APIs change between major versions.
   - Apply the brand once through the theme/tokens API, then follow the page's **Build checklist**.

## Scoring

- **Quality gate:** commit, release or package publish in the last ${(policy.activeDays / 30) | 0} months (12–24 months = "watch"); not archived or deprecated; and at least one of ≥${fmt(policy.minStars)} GitHub stars, ≥${fmt(policy.minNpmWeekly)} weekly npm downloads, ≥${policy.minPubLikes} pub.dev likes, ≥${fmt(policy.minNugetTotal)} NuGet downloads, or a known company/government/institution maintainer.
- **AI-readiness (0–100):** ${rubric.map((r) => `${r.label} (${r.max})`).join('; ')}.
- **Tiers:** recommended = passes the gate and AI-readiness ≥ ${policy.recommendedAi} (platform-native systems always qualify); solid = passes the gate; watch = maintenance slowing.

## Tags

${Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).map(([t, n]) => `\`${t}\` (${n})`).join(', ')}

${sections.map(([title, pred]) => `## ${title}\n\n${usable.filter((s) => s.tier !== 'watch').filter(pred).map(line).join('\n')}`).join('\n\n')}

## Watch list (maintenance slowing)

${usable.filter((s) => s.tier === 'watch').map(line).join('\n')}

## Reference only (closed source: inspiration, not installable)

${catalog.references.map((r) => `- ${r.name} (${r.org}): ${r.docs}. ${r.note}`).join('\n')}

## Optional

- [Full text of every system page](${url('llms-full.txt')})
- [Methodology](${url('METHODOLOGY.md')})
`;
writeText(p('site/llms.txt'), llms);
writeText(p('site/llms-full.txt'), usable.map((s) => pages[s.slug].md).join('\n\n---\n\n') + '\n');

// ---------- Methodology (md for agents, html for people) ----------
const methodology = readFileSync(p('METHODOLOGY.md'), 'utf8');
copyFileSync(p('METHODOLOGY.md'), p('site/METHODOLOGY.md'));
writeText(p('site/methodology.html'), shell({ title: 'Methodology · AI-Ready Design Systems', description: 'How design systems are chosen and scored.', main: `    <article class="wa-prose">\n${renderMarkdown(methodology).html}\n    </article>` }));

// ---------- Index ----------
writeText(p('site/assets/site.css'), SITE_CSS);
writeText(p('site/index.html'), shell({
  title: 'AI-Ready Design Systems',
  description: `${usable.length} production-grade design systems scored for AI-readiness.`,
  navigation: readFileSync(p('scripts/index.filters.html'), 'utf8'),
  main: readFileSync(p('scripts/index.main.html'), 'utf8').replace('{{COUNT}}', String(usable.length)).replace('{{UPDATED}}', scoredAt).replaceAll('{{LLMS_URL}}', url('llms.txt')),
  scripts: `<script type="module" src="assets/catalog.js"></script>`,
}));
copyFileSync(p('scripts/catalog.client.js'), p('site/assets/catalog.js'));
writeText(p('site/.nojekyll'), '');

const outdated = usable.filter((s) => pages[s.slug].guide?.drift).length;
console.log(`Built site/: ${usable.length} systems (.md + .html), catalog.json, llms.txt (${Math.round(llms.length / 1024)} KB), llms-full.txt, index.html, methodology.html. Outdated guides flagged: ${outdated}. SITE_URL=${SITE_URL}`);
