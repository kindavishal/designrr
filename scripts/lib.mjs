// Shared helpers. Zero dependencies: Node >= 20 (global fetch).
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const p = (...parts) => join(ROOT, ...parts);

export function readJSON(file, fallback) {
  if (!existsSync(file)) return fallback;
  return JSON.parse(readFileSync(file, 'utf8'));
}
export function writeJSON(file, data) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}
export function writeText(file, text) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, text);
}

let token;
export function githubToken() {
  if (token !== undefined) return token;
  token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  if (!token) {
    try { token = execSync('gh auth token', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { token = ''; }
  }
  if (!token) console.warn('! No GitHub token found (set GITHUB_TOKEN or run `gh auth login`). Unauthenticated limits are very low.');
  return token;
}

const UA = 'ai-ready-design-systems-catalog';
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function http(url, { headers = {}, method = 'GET', body, timeout = 20000, retries = 2 } = {}) {
  for (let attempt = 0; ; attempt++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeout);
    try {
      const res = await fetch(url, { method, body, headers: { 'user-agent': UA, ...headers }, signal: ctrl.signal, redirect: 'follow' });
      clearTimeout(t);
      if ((res.status === 429 || res.status >= 500) && attempt < retries) { await sleep(1500 * (attempt + 1)); continue; }
      return res;
    } catch (e) {
      clearTimeout(t);
      if (attempt < retries) { await sleep(1000 * (attempt + 1)); continue; }
      return { ok: false, status: 0, error: String(e), text: async () => '', json: async () => null, headers: new Map() };
    }
  }
}

export async function gh(path, opts = {}) {
  const res = await http(path.startsWith('http') ? path : `https://api.github.com${path}`, {
    ...opts,
    headers: { accept: 'application/vnd.github+json', ...(githubToken() ? { authorization: `Bearer ${githubToken()}` } : {}), ...(opts.headers || {}) },
  });
  if (res.status === 403 || res.status === 429) {
    const reset = Number(res.headers.get?.('x-ratelimit-reset') || 0) * 1000;
    const wait = Math.min(Math.max(reset - Date.now(), 5000), 65000);
    console.warn(`  rate limited on ${path}, waiting ${Math.round(wait / 1000)}s`);
    await sleep(wait);
    return gh(path, opts);
  }
  return res;
}

export async function graphql(query, variables = {}) {
  const res = await gh('/graphql', { method: 'POST', body: JSON.stringify({ query, variables }), headers: { 'content-type': 'application/json' } });
  const json = await res.json();
  if (json?.errors && !json.data) throw new Error(JSON.stringify(json.errors).slice(0, 500));
  return json;
}

export async function pool(items, size, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx], idx); }
  }));
  return out;
}

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const daysSince = (iso) => (iso ? Math.floor((Date.now() - new Date(iso).getTime()) / 86400000) : null);
export const today = () => new Date().toISOString().slice(0, 10);
