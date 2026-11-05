// Catalog browser: filters live in the URL query string so a filtered view can be shared.
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (n) => (n == null ? '—' : n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'k' : String(n));
const TIER_ORDER = { recommended: 0, solid: 1, watch: 2 };
const TIER_VARIANT = { recommended: 'success', solid: 'brand', watch: 'warning' };
const SELECTS = { platform: 'f-platform', framework: 'f-framework', shape: 'f-shape', tier: 'f-tier', sort: 'sort' };
const SWITCHES = { nobuild: ['f-nobuild', false], notailwind: ['f-notailwind', false], mcp: ['f-mcp', false], brand: ['f-brand', true], family: ['f-family', true] };

function addOptions(select, values, labels = {}) {
  for (const v of values) { const o = document.createElement('wa-option'); o.value = v; o.textContent = labels[v] || v; select.append(o); }
}

function readState() {
  const q = new URLSearchParams(location.search);
  return { q: q.get('q') || '', ...Object.fromEntries(Object.keys(SELECTS).map((k) => [k, q.get(k) || (k === 'sort' ? 'best' : '')])),
    ...Object.fromEntries(Object.entries(SWITCHES).map(([k, [, def]]) => [k, q.has(k) ? q.get(k) === '1' : def])) };
}
function writeState(st) {
  const q = new URLSearchParams();
  if (st.q) q.set('q', st.q);
  for (const k of Object.keys(SELECTS)) if (st[k] && !(k === 'sort' && st[k] === 'best')) q.set(k, st[k]);
  for (const [k, [, def]] of Object.entries(SWITCHES)) if (st[k] !== def) q.set(k, st[k] ? '1' : '0');
  history.replaceState(null, '', q.toString() ? `?${q}` : location.pathname);
}
function currentState() {
  return { q: $('q').value.trim(), ...Object.fromEntries(Object.entries(SELECTS).map(([k, id]) => [k, $(id).value || ''])),
    ...Object.fromEntries(Object.entries(SWITCHES).map(([k, [id]]) => [k, $(id).checked])) };
}

function card(s) {
  const chips = [
    `<wa-badge variant="${TIER_VARIANT[s.tier]}">${esc(s.tier)}</wa-badge>`,
    ...s.frameworks.slice(0, 4).map((f) => `<wa-tag size="small" appearance="outlined">${esc(f)}</wa-tag>`),
    s.install.noBuild ? '<wa-tag size="small" variant="success" appearance="outlined">no build</wa-tag>' : '',
    s.mcp ? '<wa-tag size="small" variant="brand" appearance="outlined">MCP</wa-tag>' : '',
    s.brandLocked ? '<wa-tag size="small" variant="warning" appearance="outlined">brand-locked</wa-tag>' : '',
  ].join('');
  return `<wa-card>
    <div class="wa-stack wa-gap-s">
      <div class="wa-stack wa-gap-3xs">
        <h2 class="card-title wa-heading-m"><a href="${esc(s.html)}">${esc(s.name)}</a></h2>
        <span class="card-org wa-caption-m">${esc(s.org || '')}</span>
      </div>
      <p class="card-best wa-body-s">${esc(s.bestFor || '')}</p>
      <div class="wa-cluster wa-gap-2xs">${chips}</div>
    </div>
    <div slot="footer" class="wa-cluster wa-gap-m card-stats wa-caption-m">
      <span>AI <strong>${s.aiReadiness}</strong>/100</span>
      <span><wa-icon name="star" label="GitHub stars"></wa-icon> <strong>${fmt(s.stars)}</strong></span>
      ${s.npmWeeklyDownloads != null ? `<span>npm/wk <strong>${fmt(s.npmWeeklyDownloads)}</strong></span>` : ''}
    </div>
  </wa-card>`;
}

const cat = await fetch('catalog.json').then((r) => r.json());
const uniq = (fn) => [...new Set(cat.systems.flatMap(fn))].sort();
addOptions($('f-platform'), uniq((s) => s.platforms));
addOptions($('f-framework'), uniq((s) => s.frameworks));
addOptions($('f-shape'), Object.keys(cat.productShapes), Object.fromEntries(Object.entries(cat.productShapes).map(([k, v]) => [k, `${k}: ${v}`])));

await Promise.all(['wa-select', 'wa-switch', 'wa-input'].map((t) => customElements.whenDefined(t)));
const init = readState();
$('q').value = init.q;
for (const [k, id] of Object.entries(SELECTS)) $(id).value = init[k];
for (const [k, [id]] of Object.entries(SWITCHES)) $(id).checked = init[k];

function render() {
  const st = currentState();
  writeState(st);
  const words = st.q.toLowerCase().split(/\s+/).filter(Boolean);
  let rows = cat.systems.filter((s) =>
    (!st.platform || s.platforms.includes(st.platform)) &&
    (!st.framework || s.frameworks.includes(st.framework)) &&
    (!st.shape || s.productShapes.includes(st.shape)) &&
    (!st.tier || s.tier === st.tier) &&
    (!st.nobuild || s.install.noBuild) &&
    (!st.notailwind || !s.install.requires.includes('tailwind')) &&
    (!st.mcp || s.mcp) &&
    (!st.brand || !s.brandLocked) &&
    words.every((w) => [s.name, s.org, s.bestFor, ...s.tags, ...s.frameworks, ...s.productShapes].join(' ').toLowerCase().includes(w)));
  const sorters = {
    best: (a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier] || (b.aiReadiness + b.popularity) - (a.aiReadiness + a.popularity),
    ai: (a, b) => b.aiReadiness - a.aiReadiness || b.popularity - a.popularity,
    popular: (a, b) => b.popularity - a.popularity,
    name: (a, b) => a.name.localeCompare(b.name),
  };
  rows.sort(sorters[st.sort] || sorters.best);
  if (st.family) { const seen = new Set(); rows = rows.filter((s) => !seen.has(s.family) && seen.add(s.family)); }
  $('count').textContent = `${rows.length} of ${cat.systems.length} systems`;
  $('grid').innerHTML = rows.map(card).join('');
  $('empty').hidden = rows.length > 0;
}

for (const id of ['q', ...Object.values(SELECTS)]) { $(id).addEventListener('input', render); $(id).addEventListener('change', render); $(id).addEventListener('wa-clear', render); }
for (const [id] of Object.values(SWITCHES)) $(id).addEventListener('change', render);
$('f-reset').addEventListener('click', () => {
  $('q').value = '';
  for (const id of Object.values(SELECTS)) $(id).value = id === 'sort' ? 'best' : '';
  for (const [id, def] of Object.values(SWITCHES)) $(id).checked = def;
  render();
});
render();
