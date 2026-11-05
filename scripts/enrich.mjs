// Step 2: enrich every candidate with objective, free-to-collect signals.
// GitHub (GraphQL + git tree), npm, pub.dev, NuGet, and live probes of the docs site for llms.txt.
import { p, readJSON, writeJSON, gh, graphql, http, pool, today } from './lib.mjs';

const { candidates } = readJSON(p('data/candidates.json'));
const CACHE = p('data/cache/enrich.json');
const cache = process.argv.includes('--fresh') ? {} : readJSON(CACHE, {});
const cached = async (key, fn) => (key in cache ? cache[key] : (cache[key] = await fn()));

// ---------- GitHub repo metadata (batched GraphQL) ----------
const REPO_FIELDS = `nameWithOwner stargazerCount forkCount isArchived isFork pushedAt homepageUrl description
  licenseInfo { spdxId } primaryLanguage { name }
  issues(states: OPEN) { totalCount }
  latestRelease { publishedAt tagName }
  defaultBranchRef { name target { ... on Commit { committedDate history(first: 0) { totalCount } } } }`;

async function repoMeta(repos) {
  const out = {};
  const todo = repos.filter((r) => !(`gh:${r}` in cache));
  for (let i = 0; i < todo.length; i += 20) {
    const chunk = todo.slice(i, i + 20);
    const q = `query { ${chunk.map((r, j) => { const [o, n] = r.split('/'); return `r${j}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) { ${REPO_FIELDS} }`; }).join('\n')} }`;
    const json = await graphql(q).catch((e) => ({ data: {}, error: e.message }));
    chunk.forEach((r, j) => { cache[`gh:${r}`] = json.data?.[`r${j}`] || null; });
  }
  for (const r of repos) out[r] = cache[`gh:${r}`];
  return out;
}

// ---------- Repo tree features ----------
// Paths that are never evidence for consumers: legacy/test/example code and contributor-only agent files.
const NOT_EVIDENCE = /(^|\/)(legacy|deprecated|__tests__|tests?|e2e|examples?|fixtures?|sandbox|playground)(\/|_|\.|-)|_legacy|\.(spec|test|stories)\./i;
const CONTRIBUTOR_ONLY = /(^|\/)\.(agents|claude|github|cursor|windsurf)\/skills\//i;
const RX = {
  tokens: /(^|\/)(design-)?tokens?\/.*\.(json|ya?ml|css|scss|js|ts)$|\.tokens(\.json)?$|(^|\/)style-dictionary|(^|\/)tokens\.(json|css|ts|js)$|(^|\/)packages\/[^/]*tokens[^/]*\/|theme\/tokens|(^|\/)variables\.css$/i,
  storybook: /(^|\/)\.storybook\//,
  codeConnect: /\.figma\.(tsx?|jsx?|swift|kt)$|(^|\/)figma\.config\.json$/,
  agentDocs: /(^|\/)(AGENTS\.md|CLAUDE\.md|\.cursorrules|llms(-full)?\.txt|copilot-instructions\.md)$|(^|\/)\.cursor\/rules\/|(^|\/)skills\/[^/]+\/SKILL\.md$/i,
  registry: /(^|\/)registry\.json$|(^|\/)public\/r\/[^/]+\.json$|(^|\/)registry\/[^/]+\.(json|ts)$/,
  // Only top-level workspace packages (not e.g. engine/src/.../tools/mcp), or a docs page about the MCP server.
  mcp: /^(packages|apps|tools|libs)\/(@[^/]+\/)?[^/]*mcp[^/]*\/|^(src\/)?tools\/mcp[^/]*\/|^mcp(-server)?\/|docs?\/.*mcp-server/i,
  a11y: /accessib|a11y/i,
  darkMode: /(^|[\/_.-])dark([\/_.-]|theme|mode)|theme[-_]?dark|color-?scheme|prefers-color-scheme/i,
  rtl: /(^|[\/_.-])rtl([\/_.-]|$)|right-to-left|bidi|direction\.(md|mdx|tsx?)$/i,
  typed: /\.(tsx?|d\.ts|swift|kt|dart|cs)$/,
};
async function treeFeatures(repo, branch) {
  return cached(`tree:${repo}`, async () => {
    const res = await gh(`/repos/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`);
    if (!res.ok) return null;
    const { tree = [], truncated } = await res.json();
    const paths = tree.map((t) => t.path).filter((x) => !/node_modules|\/fixtures?\/|\/__tests__\//.test(x));
    const f = { files: paths.length, truncated: !!truncated };
    for (const [k, rx] of Object.entries(RX)) {
      let hits = paths.filter((x) => rx.test(x));
      if (k === 'tokens') hits = hits.filter((x) => !NOT_EVIDENCE.test(x)).sort((a, b) => a.length - b.length);
      if (k === 'agentDocs') hits = hits.filter((x) => !CONTRIBUTOR_ONLY.test(x));
      f[k] = k === 'typed' ? hits.length : hits.length > 0;
      if (hits.length && k !== 'typed' && k !== 'a11y') f[`${k}Example`] = hits[0];
    }
    return f;
  });
}

// ---------- Package registries ----------
async function npmInfo(pkg) {
  if (!pkg) return null;
  return cached(`npm:${pkg}`, async () => {
    const enc = pkg.replace('/', '%2F');
    const [dl, meta] = await Promise.all([
      http(`https://api.npmjs.org/downloads/point/last-week/${pkg}`).then((r) => (r.ok ? r.json() : null)),
      http(`https://registry.npmjs.org/${enc}`, { headers: { accept: 'application/json' }, timeout: 40000 }).then((r) => (r.ok ? r.json() : null)),
    ]);
    if (!meta) return { exists: false };
    const latest = meta['dist-tags']?.latest;
    const v = meta.versions?.[latest] || {};
    return {
      exists: true, weeklyDownloads: dl?.downloads ?? 0, latest, lastPublish: meta.time?.[latest] || meta.time?.modified,
      types: !!(v.types || v.typings || v.exports?.['.']?.types || meta.versions?.[latest]?.devDependencies?.typescript),
      deprecated: !!v.deprecated, license: v.license || null, repository: v.repository?.url || null,
      unpackedSize: v.dist?.unpackedSize ?? null,
    };
  });
}
const npmDescribe = (pkg) => cached(`npmd:${pkg}`, async () => {
  const r = await http(`https://registry.npmjs.org/${pkg.replace('/', '%2F')}/latest`);
  return r.ok ? ((await r.json()).description || '') : null;
});
const npmExists = (pkg) => cached(`npmx:${pkg}`, async () => (await http(`https://registry.npmjs.org/${pkg.replace('/', '%2F')}`, { method: 'HEAD' })).ok);

// ---------- CDN readiness (jsDelivr) ----------
// Only entrypoints the package itself declares (jsDelivr "guessed": false, i.e. from package.json
// style/jsdelivr/unpkg/browser fields) count; guessed files are often a random component file.
async function cdnInfo(pkg, version) {
  if (!pkg || !version) return null;
  return cached(`cdn2:${pkg}@${version}`, async () => {
    const base = `https://cdn.jsdelivr.net/npm/${pkg}@${version}`;
    const [ep, flat] = await Promise.all([
      http(`https://data.jsdelivr.com/v1/packages/npm/${pkg}@${version}/entrypoints`).then((r) => (r.ok ? r.json() : null)),
      http(`https://data.jsdelivr.com/v1/packages/npm/${pkg}@${version}?structure=flat`).then((r) => (r.ok ? r.json() : null)),
    ]);
    // CommonJS builds can't run from a <script> tag, so they don't count.
    const pick = (k) => { const e = ep?.entrypoints?.[k]; return e && !e.guessed && !/(^|[./])cjs([./]|$)|\/lib\/cjs\//.test(e.file) ? base + e.file : null; };
    const skills = (flat?.files || []).map((f) => f.name).filter((f) => /skills\/[^/]+\/SKILL\.md$/i.test(f));
    return { css: pick('css'), js: pick('js'), shippedSkills: skills.map((x) => x.replace(/\/SKILL\.md$/i, '')) };
  });
}

async function pubInfo(pkg) {
  if (!pkg) return null;
  return cached(`pub:${pkg}`, async () => {
    const [score, info] = await Promise.all([
      http(`https://pub.dev/api/packages/${pkg}/score`).then((r) => (r.ok ? r.json() : null)),
      http(`https://pub.dev/api/packages/${pkg}`).then((r) => (r.ok ? r.json() : null)),
    ]);
    if (!info) return { exists: false };
    return { exists: true, likes: score?.likeCount ?? 0, downloads30d: score?.downloadCount30Days ?? null, points: score?.grantedPoints ?? null, lastPublish: info.latest?.published };
  });
}
async function nugetInfo(pkg) {
  if (!pkg) return null;
  return cached(`nuget:${pkg}`, async () => {
    const r = await http(`https://azuresearch-usnc.nuget.org/query?q=packageid:${encodeURIComponent(pkg)}&prerelease=false`);
    const d = r.ok ? (await r.json()).data?.[0] : null;
    return d ? { exists: true, totalDownloads: d.totalDownloads, latest: d.version } : { exists: false };
  });
}

// ---------- Docs probes: llms.txt / llms-full.txt ----------
async function probeText(url) {
  return cached(`probe:${url}`, async () => {
    const r = await http(url, { timeout: 15000, retries: 1, headers: { accept: 'text/plain,text/markdown,*/*' } });
    if (!r.ok) return false;
    const body = (await r.text()).slice(0, 2000).trim();
    // Reject SPA fallbacks that return HTML with 200.
    return body.length > 40 && !/^<(!doctype|html)/i.test(body);
  });
}
async function llmsProbe(docs) {
  if (!docs) return {};
  const u = new URL(docs);
  const bases = [...new Set([`${u.origin}`, `${u.origin}${u.pathname.replace(/\/$/, '')}`])];
  const out = {};
  for (const b of bases) {
    for (const path of ['/llms.txt', '/llms/llms.txt']) if (!out.llmsTxt && (await probeText(`${b}${path}`))) out.llmsTxt = `${b}${path}`;
    for (const path of ['/llms-full.txt', '/llms/llms-full.txt']) if (!out.llmsFull && (await probeText(`${b}${path}`))) out.llmsFull = `${b}${path}`;
  }
  return out;
}

// ---------- MCP server discovery ----------
async function mcpProbe(c, tree) {
  const found = [];
  if (c.mcp) found.push({ kind: 'cli', value: c.mcp, verified: true });
  if (c.mcpUrl) found.push({ kind: 'remote', value: c.mcpUrl, verified: true });
  if (c.mcpPackage && (await npmExists(c.mcpPackage))) found.push({ kind: 'npm', value: c.mcpPackage, verified: true });
  const scope = c.npm?.startsWith('@') ? c.npm.split('/')[0] : null;
  if (scope && !found.length) {
    for (const guess of [`${scope}/mcp`, `${scope}/mcp-server`]) {
      // A scope-level guess (e.g. @org/mcp) is only accepted if its description is about UI/components/design,
      // otherwise it is usually an unrelated product MCP (CMS, CLI, cloud).
      const desc = await npmDescribe(guess);
      if (desc !== null && /component|design[- ]?system|\bui\b|token|primitives/i.test(desc) && !/\b(cms|content lake|dx|cli for)\b/i.test(desc)) {
        found.push({ kind: 'npm', value: guess, verified: true, guessed: true, description: desc }); break;
      }
    }
  }
  if (tree?.mcp) found.push({ kind: 'repo', value: tree.mcpExample, verified: true });
  return found;
}

// ---------- Run ----------
const repos = [...new Set(candidates.map((c) => c.repo).filter(Boolean))];
console.log(`GitHub metadata for ${repos.length} repos...`);
const meta = await repoMeta(repos);

console.log('Per-system enrichment...');
let done = 0;
const signals = await pool(candidates, 6, async (c) => {
  const m = c.repo ? meta[c.repo] : null;
  const tree = m?.defaultBranchRef ? await treeFeatures(m.nameWithOwner, m.defaultBranchRef.name) : null;
  const [npm, pub, nuget, llms] = await Promise.all([npmInfo(c.npm), pubInfo(c.pub), nugetInfo(c.nuget), llmsProbe(c.docs)]);
  const mcp = await mcpProbe(c, tree);
  const cdn = npm?.exists ? await cdnInfo(c.npm, npm.latest) : null;
  if (++done % 25 === 0) console.log(`  ${done}/${candidates.length}`);
  return {
    slug: c.slug,
    repoFound: c.repo ? !!m : null,
    github: m && {
      repo: m.nameWithOwner, renamed: m.nameWithOwner.toLowerCase() !== c.repo.toLowerCase(), stars: m.stargazerCount, forks: m.forkCount,
      archived: m.isArchived, license: m.licenseInfo?.spdxId || null, language: m.primaryLanguage?.name || null, openIssues: m.issues.totalCount,
      lastCommit: m.defaultBranchRef?.target?.committedDate || null, commits: m.defaultBranchRef?.target?.history?.totalCount ?? null,
      latestRelease: m.latestRelease?.publishedAt || null, latestTag: m.latestRelease?.tagName || null, homepage: m.homepageUrl || null, description: m.description,
    },
    tree, npm, pub, nuget, llms, mcp, cdn,
  };
});

writeJSON(CACHE, cache);
writeJSON(p('data/signals.json'), { enrichedAt: today(), signals });
const missing = signals.filter((s) => s.repoFound === false).map((s) => s.slug);
const noPkg = signals.filter((s) => s.npm && !s.npm.exists).map((s) => s.slug);
console.log(`Done. Repos not found: ${missing.join(', ') || 'none'}. npm packages not found: ${noPkg.join(', ') || 'none'}.`);
