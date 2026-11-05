// HTML shell for the human-facing pages, built on Web Awesome (free CDN, no build step).
// Follows the Web Awesome design skill: theme classes on <html>, <wa-page> for the page frame,
// layout utilities + --wa-* tokens only (no hex/px), custom elements never self-closed.
export const WA_VERSION = '3.14.0';
const CDN = `https://ka-f.webawesome.com/webawesome@${WA_VERSION}`;

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Applies the saved or system colour scheme before first paint (no flash), and wires the toggle.
const THEME_SCRIPT = `<script>
(() => {
  let mode = null;
  try { mode = localStorage.getItem('ards-scheme'); } catch {}
  if (!mode) mode = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const root = document.documentElement;
  root.classList.toggle('wa-dark', mode === 'dark');
  root.classList.toggle('wa-light', mode !== 'dark');
  addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('scheme-toggle');
    const sync = () => { const dark = root.classList.contains('wa-dark'); btn?.querySelector('wa-icon')?.setAttribute('name', dark ? 'sun' : 'moon'); btn?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode'); };
    sync();
    btn?.addEventListener('click', () => {
      const dark = !root.classList.contains('wa-dark');
      root.classList.toggle('wa-dark', dark); root.classList.toggle('wa-light', !dark);
      try { localStorage.setItem('ards-scheme', dark ? 'dark' : 'light'); } catch {}
      sync();
    });
  });
})();
</script>`;

export function shell({ title, description, base = '', main, aside = '', navigation = '', head = '', scripts = '' }) {
  return `<!doctype html>
<html lang="en" class="wa-theme-default wa-palette-default wa-brand-indigo wa-light wa-cloak">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="alternate" type="text/plain" href="${base}llms.txt" title="llms.txt">
<link rel="stylesheet" href="${CDN}/styles/themes/default.css">
<link rel="stylesheet" href="${CDN}/styles/utilities.css">
<link rel="stylesheet" href="${CDN}/styles/native.css">
<script type="module" src="${CDN}/webawesome.loader.js"></script>
<link rel="stylesheet" href="${base}assets/site.css">
${THEME_SCRIPT}
${head}
</head>
<body>
<wa-page mobile-breakpoint="920">
  <header slot="header" class="wa-split site-header">
    <a href="${base}index.html" class="wa-cluster wa-gap-xs brand-link">
      <wa-icon name="layer-group"></wa-icon><strong>AI-Ready Design Systems</strong>
    </a>
    <div class="wa-cluster wa-gap-m">
      <nav class="wa-cluster wa-gap-m wa-desktop-only" aria-label="Site">
        <a href="${base}llms.txt">llms.txt</a>
        <a href="${base}catalog.json">catalog.json</a>
        <a href="${base}methodology.html">Methodology</a>
      </nav>
      <div class="wa-cluster wa-gap-2xs">
        ${navigation ? `<wa-button data-toggle-nav appearance="plain" size="small" class="wa-mobile-only"><wa-icon name="sliders" label="Show filters"></wa-icon></wa-button>` : ''}
        <wa-button id="scheme-toggle" appearance="plain" size="small" aria-label="Toggle dark mode"><wa-icon name="moon"></wa-icon></wa-button>
      </div>
    </div>
  </header>
  ${navigation}
  <main class="wa-stack wa-gap-xl">
${main}
  </main>
  ${aside}
  <footer slot="footer" class="wa-stack wa-gap-xs wa-caption-s">
    <span>Quality gate: active in the last 12 months and real adoption (1k+ stars, 5k+ weekly npm downloads, or a known maintainer). Scores use free, public data and refresh weekly.</span>
    <span class="wa-cluster wa-gap-s"><a href="${base}methodology.html">How systems are chosen and scored</a><a href="${base}llms.txt">llms.txt</a><a href="${base}catalog.json">catalog.json</a><a href="${base}llms-full.txt">llms-full.txt</a></span>
  </footer>
</wa-page>
${scripts}
</body>
</html>
`;
}

export const SITE_CSS = `/* Project-level styles on top of Web Awesome. Tokens only: no hex, no px. */
html, body { min-height: 100%; padding: 0; margin: 0; }
/* Grid tracks only collapse via the width variables, so size the aside only on pages that have one. */
wa-page { --menu-width: 17rem; --aside-width: auto; }
wa-page:has(> [slot='aside']) { --aside-width: 15rem; }
wa-page[view='mobile'] { --menu-width: auto; --aside-width: auto; }
.brand-link { color: var(--wa-color-text-normal); text-decoration: none; }
.lede { color: var(--wa-color-text-quiet); max-inline-size: 70ch; margin: 0; }
.catalog-grid { --min-column-size: 30ch; }
.card-title { margin: 0; }
.card-title a { color: var(--wa-color-text-normal); text-decoration: none; }
.card-title a:hover { color: var(--wa-color-brand-on-quiet); text-decoration: underline; }
.card-org, .card-stats { color: var(--wa-color-text-quiet); }
.card-best { margin: 0; }
.card-stats strong { color: var(--wa-color-text-normal); font-variant-numeric: tabular-nums; }
.agent-prompt { font-family: var(--wa-font-family-code); font-size: var(--wa-font-size-s); overflow-wrap: anywhere; }
.code-block { position: relative; }
.code-copy { position: absolute; inset-block-start: var(--wa-space-xs); inset-inline-end: var(--wa-space-xs); }
.wa-prose { --wa-prose-line-length: 80ch; }
.wa-prose table { display: block; overflow-x: auto; }
.wa-prose pre { overflow-x: auto; }
.toc a { color: var(--wa-color-text-quiet); text-decoration: none; }
.toc a:hover { color: var(--wa-color-text-normal); }
.empty-state { color: var(--wa-color-text-quiet); }
`;
