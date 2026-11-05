# Methodology

How systems get into the catalog, how they are scored, and how the list stays current. Everything runs on free, public data: GitHub API, npm registry, pub.dev, NuGet and the systems' own docs sites. No paid APIs.

## 1. Candidates

| Source | How it is used |
|---|---|
| `curation/seed.json`, `curation/seed-community.json` | The curated list. Each entry gives the repo, main package, docs URL, platforms, frameworks, styling approach and "good for" tags. |
| GitHub topic search (`design-system`, `design-systems`, `component-library`, `ui-library`, …) | Finds repos the seed doesn't have yet. These go to `data/raw/review-queue.json` for a person to review, **never straight into the catalog**: topic tags are too noisy (single widgets, templates, AI skill packs). |
| designsystems.one, designsystems.surf, designsystems.com | Cross-checked by name. Names that match nothing in the seed are listed in `data/raw/directories.json`. Most of them are closed-source systems. |

To add a system, promote it from the review queue into `seed-community.json`. To silence a repo, add it to `curation/curation.json` → `exclude`.

## 2. Quality gate (balanced policy)

A system is listed only if **all** of these hold:

- **Maintained:** a commit on the default branch, a GitHub release or a package publish in the last **12 months**. 12–24 months puts it on **watch**; anything older is dropped.
- **Not archived** on GitHub, and its main package is **not deprecated** on npm.
- **Real adoption**, any one of:
  - ≥ 1,000 GitHub stars
  - ≥ 5,000 weekly npm downloads
  - ≥ 300 pub.dev likes
  - ≥ 1M NuGet downloads
  - maintained by a known company, government or institution (`orgBacked`)

Closed-source or paid systems (Airbnb, Stripe, Linear, Tailwind Plus…) are listed as **reference only**, because agents cannot install them.

## 3. AI-readiness score (0–100)

The score measures how well an agent can work with the system without guessing. Every point comes from something detected automatically:

| Capability | Points | Detection |
|---|---|---|
| Official MCP server | 20 | Known MCP package/CLI/URL, a scope-level npm package whose description is about components/design, or an MCP package in the repo |
| `llms.txt` | 15 | HTTP probe of the docs origin and docs path (HTML fallbacks rejected) |
| `llms-full.txt` | 5 | Same probe |
| Machine-readable tokens | 15 | Token files/packages in the repo tree (`tokens/`, `*.tokens.json`, style-dictionary, …) |
| Typed API | 10 | TypeScript sources or npm `types`; Swift/Kotlin/Dart/C# count as typed |
| Registry / CLI source install | 10 | `registry.json` / shadcn-style registry in the repo |
| Agent docs in repo | 5 | `AGENTS.md`, `CLAUDE.md`, cursor rules, `llms.txt`, skills |
| Storybook | 5 | `.storybook/` |
| Figma Code Connect | 5 | `*.figma.tsx` / `figma.config.json` |
| Accessibility guidance | 5 | a11y docs in the repo, or an accessibility-critical system |
| Docs site | 5 | Docs URL present |

An editorial override (`aiOverrides`) is allowed only with an evidence string, and that string is shown on the system's page. Example: shadcn/ui's theme is CSS variables rather than token files.

## 4. Tiers

- **recommended:** passes the gate and scores AI-readiness ≥ 45. Platform-native systems (Apple HIG/SwiftUI, Material 3 for Android, Flutter Material) always qualify.
- **solid:** passes the gate.
- **watch:** passes, but maintenance is slowing.
- **reference / dropped:** not offered to agents as an installable choice.

Within a tier, systems are ranked by AI-readiness plus popularity (a log-scaled mix of stars, npm downloads and pub likes).

## 5. Refresh

`.github/workflows/refresh.yml` runs the whole pipeline every week and commits the regenerated data and site. When a system goes stale, its tier drops automatically. New topic repos show up in the review queue.

```bash
npm run all             # harvest -> enrich -> score -> build
node scripts/enrich.mjs --fresh   # ignore the cache
```
