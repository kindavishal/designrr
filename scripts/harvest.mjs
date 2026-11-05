// Step 1: harvest candidates.
// - Curated seed (curation/seed.json) is the backbone.
// - GitHub topic search finds repos the seed doesn't know yet. They go to a REVIEW QUEUE
//   (data/raw/review-queue.json), never straight into the catalog: topic tags are too noisy.
//   Promote a repo by adding it to curation/seed-community.json, or silence it in curation/curation.json "exclude".
// - Directory sites are scraped by name only; names not mapped to a seed entry are reported for review.
import { p, readJSON, writeJSON, gh, http, sleep, slugify, today } from './lib.mjs';

const seed = [...readJSON(p('curation/seed.json')).systems, ...readJSON(p('curation/seed-community.json'), { systems: [] }).systems];
const dupes = seed.map((s) => s.slug).filter((s, i, a) => a.indexOf(s) !== i);
if (dupes.length) throw new Error(`Duplicate slugs: ${dupes.join(', ')}`);
const curation = readJSON(p('curation/curation.json'), { exclude: [], directoryAliases: {} });
const excluded = new Set(curation.exclude.map((s) => s.toLowerCase()));

// Topic queries: [query, minStars]
const TOPIC_QUERIES = [
  ['topic:design-system', 300],
  ['topic:design-systems', 300],
  ['topic:component-library', 1000],
  ['topic:ui-library', 1000],
  ['topic:ui-components', 1000],
  ['topic:react-components', 2000],
  ['topic:vue-components', 1000],
  ['topic:web-components topic:design-system', 100],
  ['topic:flutter topic:ui-kit', 300],
  ['topic:react-native topic:ui-kit', 500],
  ['topic:swiftui topic:design-system', 100],
  ['topic:jetpack-compose topic:design-system', 100],
];

// Obvious non-design-system noise (lists, tooling, templates, icon sets, generators).
const NOISE = /\b(awesome|curated list|resources|roadmap|interview|tutorial|course|boilerplate|starter|template|admin template|dashboard template|icons?\b|icon set|illustrations|figma plugin|token(s)? (transformer|translator|studio)|style dictionary|storybook addon|generator|playground|cheatsheet|examples?|demo|clone|landing page)\b/i;

async function topicSearch() {
  const found = new Map();
  for (const [q, minStars] of TOPIC_QUERIES) {
    for (let page = 1; page <= 10; page++) {
      const res = await gh(`/search/repositories?q=${encodeURIComponent(`${q} stars:>=${minStars} archived:false`)}&sort=stars&order=desc&per_page=100&page=${page}`);
      if (!res.ok) { console.warn(`  search failed ${q} p${page}: ${res.status}`); break; }
      const { items = [] } = await res.json();
      for (const r of items) {
        if (!found.has(r.full_name.toLowerCase())) found.set(r.full_name.toLowerCase(), { repo: r.full_name, name: r.name, description: r.description || '', stars: r.stargazers_count, topics: r.topics || [], query: q });
      }
      if (items.length < 100) break;
      await sleep(2200); // search API: 30 req/min authenticated
    }
    console.log(`  ${q}: ${found.size} unique so far`);
  }
  return [...found.values()];
}

async function scrapeDirectories() {
  const out = {};
  const get = async (url) => (await http(url, { headers: { 'user-agent': 'Mozilla/5.0' } })).text();
  try {
    const html = await get('https://www.designsystems.one/design-systems');
    out['designsystems.one'] = [...new Set([...html.matchAll(/href="\/design-systems\/([^"]+)"/g)].map((m) => m[1]))];
  } catch (e) { console.warn('  designsystems.one failed', e.message); }
  try {
    const html = await get('https://designsystems.surf/design-systems');
    out['designsystems.surf'] = [...new Set([...html.matchAll(/href="\.\/design-systems\/([^"]+)"/g)].map((m) => m[1]))];
  } catch (e) { console.warn('  designsystems.surf failed', e.message); }
  try {
    const json = JSON.parse(await get('https://www.designsystems.com/page-data/open-design-systems/page-data.json'));
    out['designsystems.com'] = json.result.data.page.designSystems.map((d) => slugify(`${d.company} ${d.name}`));
  } catch (e) { console.warn('  designsystems.com failed', e.message); }
  return out;
}

console.log('Harvesting GitHub topics...');
const topicRepos = await topicSearch();
console.log('Scraping directories...');
const directories = await scrapeDirectories();

const seedRepos = new Set(seed.filter((s) => s.repo).map((s) => s.repo.toLowerCase()));
const queue = topicRepos
  .filter((r) => !seedRepos.has(r.repo.toLowerCase()))
  .filter((r) => !excluded.has(r.repo.toLowerCase()))
  .filter((r) => !NOISE.test(`${r.name} ${r.description}`))
  .sort((a, b) => b.stars - a.stars)
  .map(({ repo, stars, description, query }) => ({ repo, stars, description, query }));

// Directory cross-check: which listed names don't map to anything we know?
const known = new Set(seed.flatMap((s) => [s.slug, slugify(s.name), slugify(s.org || ''), ...(curation.directoryAliases[s.slug] || [])]));
const unmatched = {};
for (const [site, names] of Object.entries(directories)) {
  unmatched[site] = names.filter((n) => ![...known].some((k) => k && (n.includes(k) || k.includes(n.replace(/-(design|ui|design-system)$/, '')))));
}

writeJSON(p('data/raw/topic-repos.json'), { harvestedAt: today(), count: topicRepos.length, repos: topicRepos });
writeJSON(p('data/raw/directories.json'), { harvestedAt: today(), directories, unmatched });
writeJSON(p('data/raw/review-queue.json'), { harvestedAt: today(), note: 'Repos found by topic search that are not in the seed or exclude list. Triage: promote to curation/seed-community.json or add to curation/curation.json exclude.', count: queue.length, queue });
writeJSON(p('data/candidates.json'), { harvestedAt: today(), count: seed.length, candidates: seed });
console.log(`Candidates: ${seed.length}. Review queue: ${queue.length} topic repos. Directory names not in seed: ${Object.values(unmatched).flat().length}.`);
