// Validate curation inputs and hand-written guides. Exit code 1 on errors (warnings don't fail).
//   node scripts/validate.mjs            schema + guide checks, including npm lookups for install commands
//   node scripts/validate.mjs --offline  schema + guide structure only (no network)
import { readdirSync, readFileSync } from 'node:fs';
import { p, readJSON, http, pool } from './lib.mjs';

const OFFLINE = process.argv.includes('--offline');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const KINDS = new Set(['library', 'platform', 'css-framework', 'reference']);
const STYLING = new Set(['tailwind', 'css-in-js', 'css', 'css-modules', 'web-components', 'native', 'utility-props', 'headless']);
const PLATFORMS = new Set(['web', 'mobile-web', 'miniprogram', 'ios', 'ipados', 'macos', 'watchos', 'visionos', 'android', 'desktop', 'windows']);

// ---------- Seeds ----------
const seed = [...readJSON(p('curation/seed.json')).systems, ...readJSON(p('curation/seed-community.json')).systems];
const slugs = new Set();
for (const s of seed) {
  const id = s.slug || JSON.stringify(s).slice(0, 60);
  if (!s.slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.slug)) err(`seed ${id}: slug must be kebab-case`);
  if (slugs.has(s.slug)) err(`seed ${id}: duplicate slug`);
  slugs.add(s.slug);
  if (!s.name) err(`seed ${id}: missing name`);
  if (!KINDS.has(s.kind)) err(`seed ${id}: kind must be one of ${[...KINDS].join(', ')}`);
  if (!Array.isArray(s.platforms) || !s.platforms.length) err(`seed ${id}: platforms must be a non-empty array`);
  else for (const pl of s.platforms) if (!PLATFORMS.has(pl)) err(`seed ${id}: unknown platform "${pl}"`);
  if (!Array.isArray(s.frameworks)) err(`seed ${id}: frameworks must be an array`);
  if (s.kind !== 'reference' && s.styling && !STYLING.has(s.styling)) err(`seed ${id}: unknown styling "${s.styling}"`);
  if (s.kind !== 'reference' && !s.styling) warn(`seed ${id}: no styling set`);
  if (s.repo && !/^[\w.-]+\/[\w.-]+$/.test(s.repo)) err(`seed ${id}: repo must be "owner/name"`);
  if (s.kind !== 'reference' && !s.repo && !s.npm && !s.pub && !s.nuget && s.kind !== 'platform') err(`seed ${id}: needs a repo or a package so it can be verified`);
  if (s.docs) { try { new URL(s.docs); } catch { err(`seed ${id}: docs is not a URL`); } } else warn(`seed ${id}: no docs URL`);
  if (!Array.isArray(s.tags) || !s.tags.length) warn(`seed ${id}: no tags`);
  for (const [k, why] of Object.entries(s.aiOverrides || {})) if (typeof why !== 'string' || why.length < 10) err(`seed ${id}: aiOverrides.${k} needs an evidence string`);
}

// ---------- Editorial ----------
const ed = readJSON(p('curation/editorial.json'));
const known = (s, where) => { if (!slugs.has(s)) err(`editorial ${where}: unknown slug "${s}"`); };
Object.keys(ed.bestFor).forEach((s) => known(s, 'bestFor'));
Object.keys(ed.brandLocked).forEach((s) => known(s, 'brandLocked'));
Object.keys(ed.productShapes).forEach((s) => known(s, 'productShapes'));
const inFamily = new Map();
for (const [fam, members] of Object.entries(ed.families)) for (const s of members) {
  known(s, `families.${fam}`);
  if (inFamily.has(s)) err(`editorial families: "${s}" is in both ${inFamily.get(s)} and ${fam}`);
  inFamily.set(s, fam);
}
for (const [s, shapes] of Object.entries(ed.productShapes)) for (const sh of shapes) if (!ed.shapes[sh]) err(`editorial productShapes.${s}: unknown shape "${sh}"`);
for (const s of seed) if (s.kind !== 'reference' && !s.bestFor && !ed.bestFor[s.slug]) warn(`seed ${s.slug}: no bestFor line`);

// ---------- Curation ----------
const cur = readJSON(p('curation/curation.json'));
if (!Array.isArray(cur.exclude)) for (const [repo, why] of Object.entries(cur.exclude)) if (!why || !why.includes(':')) err(`curation exclude ${repo}: reason must be "category: detail"`);

// ---------- Guides ----------
const npmChecks = [];
for (const f of readdirSync(p('guides')).filter((x) => x.endsWith('.md'))) {
  const slug = f.slice(0, -3);
  const text = readFileSync(p('guides', f), 'utf8');
  if (!slugs.has(slug)) err(`guide ${f}: no system with slug "${slug}"`);
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { err(`guide ${f}: missing frontmatter (writtenFor, written)`); continue; }
  const meta = Object.fromEntries(fm[1].split('\n').map((l) => l.split(/:\s*/, 2)).map(([k, v]) => [k.trim(), (v || '').replace(/^"|"$/g, '').trim()]));
  if (!meta.writtenFor) err(`guide ${f}: frontmatter needs writtenFor`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.written || '')) err(`guide ${f}: frontmatter needs written: YYYY-MM-DD`);
  if (!/^## (Install|Setup)/m.test(text)) err(`guide ${f}: needs an "## Install" or "## Setup" section`);
  if (/<version>/.test(text)) err(`guide ${f}: contains a literal <version> placeholder; use {{version}} so the build fills it`);
  // Package names used in install commands inside code blocks.
  const code = [...text.matchAll(/```(?:bash|sh)?\n([\s\S]*?)```/g)].map((m) => m[1]).join('\n');
  for (const line of code.split('\n')) {
    const m = line.match(/^\s*(?:npm (?:install|i|add)|npx expo install|pnpm add|yarn add)\s+(.+)$/);
    if (!m) continue;
    for (const tok of m[1].split(/\s+/)) {
      if (!tok || tok.startsWith('-') || tok.startsWith('#')) break;
      const name = tok.replace(/@[\w.^~<>=*-]+$/, (v) => (tok.startsWith('@') && tok.indexOf('@', 1) === -1 ? v : ''));
      if (/^[@\w][\w./-]*$/.test(name)) npmChecks.push({ guide: f, name: name.replace(/@(latest|next)$/, '') });
    }
  }
  const s = seed.find((x) => x.slug === slug);
  if (s?.npm && !meta.platformSdk) npmChecks.push({ guide: f, name: s.npm, writtenFor: meta.writtenFor });
}

if (!OFFLINE) {
  const uniq = [...new Map(npmChecks.map((c) => [`${c.guide}|${c.name}`, c])).values()];
  await pool(uniq, 8, async (c) => {
    const r = await http(`https://registry.npmjs.org/${c.name.replace('/', '%2F')}/latest`);
    if (r.status === 404) return err(`guide ${c.guide}: npm package "${c.name}" does not exist`);
    if (!r.ok) return warn(`guide ${c.guide}: could not check "${c.name}" (${r.status})`);
    const j = await r.json();
    if (j.deprecated) warn(`guide ${c.guide}: "${c.name}" is deprecated: ${String(j.deprecated).slice(0, 100)}`);
    if (c.writtenFor) {
      const major = String(j.version).split('.')[0];
      const wrote = c.writtenFor.split('.')[0];
      if (major !== wrote && !(major === '0' && c.writtenFor.startsWith('0'))) warn(`guide ${c.guide}: written for v${c.writtenFor}, latest ${c.name} is ${j.version}; re-check against the official llms.txt/MCP`);
    }
  });
}

for (const w of warnings.sort()) console.log(`warn  ${w}`);
for (const e of errors.sort()) console.log(`ERROR ${e}`);
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s). ${seed.length} systems, ${readdirSync(p('guides')).length} guides${OFFLINE ? ' (offline)' : ''}.`);
process.exit(errors.length ? 1 : 0);
