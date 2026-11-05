# Methodology

How systems get into the catalog, how they are described and scored, and how the list stays current. Everything runs on free, public data: GitHub API, npm registry, jsDelivr, pub.dev, NuGet and the systems' own docs sites. No paid APIs.

## 1. Candidates

| Source | How it is used |
|---|---|
| `curation/seed.json`, `curation/seed-community.json` | The curated list. Each entry gives the repo, main package, docs URL, platforms, frameworks and styling approach. |
| GitHub topic search (`design-system`, `component-library`, `ui-library`, …) | Finds repos the seed doesn't have yet. These go to `data/raw/review-queue.json` for a person to review, **never straight into the catalog**: topic tags are too noisy. |
| designsystems.one, designsystems.surf, designsystems.com | Cross-checked by name. Names that match nothing in the seed are listed in `data/raw/directories.json`. Most of them are closed-source systems. |

Every reviewed repo gets a decision. Real systems are promoted to `seed-community.json`; everything else goes to `curation/curation.json` → `exclude` with a reason in the form `category: detail`. The categories are `ai-tooling`, `tooling`, `templates/blocks`, `superseded`, `content` and `single-purpose`. Because reasons are recorded, a wrong rejection can be found and reversed later. An earlier blanket rejection had wrongly excluded Primer CSS and Open Props.

## 2. Editorial layer (`curation/editorial.json`)

Facts that public APIs can't provide, kept separate from the structural seed:

- **`bestFor`:** one line on the product the system suits. Every listed system has one.
- **`families`:** groups the ports and variants of one system (for example Ant Design for React, Vue and Angular; shadcn/ui and its ports). Agents show at most one per family, so a "top 3" contains three genuinely different options.
- **`brandLocked`:** systems that carry a specific company's or government's identity (Porsche, Deutsche Bahn, Orange, Skyscanner…), with the reason. They stay listed, but agents exclude them unless the user is that brand.
- **`productShapes`:** what kind of product UI a system is good at: `app-dashboard`, `saas-app`, `marketing-site`, `content-site`, `forms-flows`, `mobile-app`, `chat-ai`, `ecommerce`.
- **`installOverrides`:** corrections where package metadata gives the wrong CDN answer. Each one cites a source.
- **`cliCopySource`:** systems whose own docs confirm a CLI that copies component source into your project. Each one cites the docs page.
- **`mcpNotes`:** access conditions for an MCP server that an agent needs to know before relying on it (for example a paid subscription or a required sign-in). Each one cites a source.

**No invented facts.** Editorial text is either a plain description of what a system is for, or a fact with a cited source. Licence terms, "maintenance mode", "built on X" and similar claims are only stated when the system's own README, licence, docs or npm metadata says so. Popularity is never described in words ("most popular", "widely used"); the usage numbers in section 6 show it. `bestFor`, `brandLocked` and `productShapes` are curated judgments and are labelled as editorial in `catalog.json`.

## 3. Quality gate (balanced policy)

A system is listed only if **all** of these hold:

- **Maintained:** a commit on the default branch, a GitHub release or a package publish in the last **12 months**. 12–24 months puts it on **watch**; anything older is dropped.
- **Not archived** on GitHub, and its main package is **not deprecated** on npm.
- **Real adoption**, any one of:
  - ≥ 1,000 GitHub stars
  - ≥ 5,000 weekly npm downloads
  - ≥ 300 pub.dev likes
  - ≥ 1M NuGet downloads
  - maintained by a known company, government or institution (`orgBacked`)

Closed-source or paid systems are listed as **reference only**.

## 4. Install profile

Answers "can I use this in my setup?", computed per system:

- **`install.mode`:** one of `platform-sdk`, `pub`, `nuget`, `copy-source-cli` (shadcn-style), `npm-tailwind`, `cdn-or-npm`, `npm-bundler`.
- **`install.noBuild`:** works as plain HTML from a CDN. This needs all of:
  - a framework-agnostic system (CSS or web components)
  - not Tailwind-based
  - a CDN entrypoint the package itself declares (jsDelivr `entrypoints` with `guessed: false`, excluding CommonJS builds)

  Systems that qualify also get the `vanilla` framework value.
- **`install.requires`:** `tailwind`, `bundler`, `native-toolchain`.
- **`install.cdn`:** pinned CSS/JS URLs where available.
- **`install.shippedSkills`:** agent skills shipped inside the npm package (for example Web Awesome ships `webawesome` and `webawesome-design`).

## 5. Attributes

- **`darkMode`** and **`rtl`:** detected from theme and direction files in the repo tree (`dark` themes, `color-scheme`, `rtl`). Treat "not detected" as unknown, not as "no".
- **`packageSizeKB`:** the npm unpacked size, a rough weight indicator rather than the bundle cost.

## 6. Public usage and feedback (`usage`)

Every number is copied as-is from its source on the refresh date; nothing is estimated, and a missing number stays `null`.

| Field | Source | What it tells you |
|---|---|---|
| `githubStars`, `githubForks`, `githubWatchers` | GitHub GraphQL API | Developer interest |
| `contributors` | GitHub REST API (contributors list, including anonymous) | How many people build it. GitHub can't list contributors for some very large repos, so it may be `null`. |
| `openIssues`, `closedIssues`, `issuesClosedPct` | GitHub GraphQL API | Community feedback and how much of it gets resolved (closed ÷ all issues) |
| `npmWeeklyDownloads` | npm downloads API (last week) | Real installs for web packages. Includes installs as a dependency of other packages. |
| `pubLikes`, `pubDownloads30d` | pub.dev API | Flutter adoption |
| `nugetTotalDownloads` | NuGet search API | .NET / Blazor adoption |
| `lastCommit`, `lastRelease` | GitHub GraphQL API | Recency |

The catalog has no star ratings or reviews: no public, consistent source exists across ecosystems, so none are invented. On the site you can filter by minimum stars, weekly npm downloads, recent activity and share of issues closed, and sort by each number. Agents are told to filter on `usage` and quote the numbers with their date.

## 7. AI-readiness score (0–100)

| Capability | Points | Detection |
|---|---|---|
| Official MCP server | 20 | An MCP package, CLI or URL documented by the system; a scope-level npm package whose description is about components or design; or an MCP package in the repo. Snapshot-only npm packages (`0.0.0-*`) don't count. Access conditions (paid, sign-in) are shown on the page. |
| `llms.txt` | 15 | HTTP probe of the docs origin and docs path (HTML fallbacks rejected) |
| `llms-full.txt` | 5 | Same probe |
| Machine-readable tokens | 15 | Token files/packages in the repo tree, ignoring legacy, test and example paths |
| Typed API | 10 | TypeScript sources or npm `types`; Swift/Kotlin/Dart/C# count as typed |
| Registry / CLI source install | 10 | A `registry.json` or published `public/r/*.json` registry in the repo, or a copy-the-source CLI confirmed in the system's docs (`cliCopySource`). Internal code folders named "registry" don't count. |
| Agent docs | 5 | Skills shipped in the npm package, or `AGENTS.md` / `CLAUDE.md` / cursor rules / `llms.txt` in the repo. Contributor-only skills in `.agents/`, `.claude/` or `.github/` don't count. |
| Storybook | 5 | `.storybook/` |
| Figma Code Connect | 5 | `*.figma.tsx` / `figma.config.json` |
| Accessibility guidance | 5 | a11y docs in the repo, or an accessibility-critical system |
| Docs site | 5 | Docs URL present |

An editorial override (`aiOverrides`) is allowed only with an evidence string, which is shown on the system page.

**Popularity (0–100)** is the mean of the available log-scaled signals: stars, npm weekly downloads, pub likes and NuGet downloads. A mean rather than a max stops packages that are mostly pulled in as dependencies of other packages from outranking systems people choose directly.

## 8. Tiers

- **recommended:** passes the gate and scores AI-readiness ≥ 45. Platform-native systems (Apple HIG/SwiftUI, Material 3 for Android, Flutter Material) always qualify.
- **solid:** passes the gate.
- **watch:** passes, but maintenance is slowing.
- **reference / dropped:** not offered to agents as an installable choice.

## 9. Build guides

- **Hand-written guides** (`guides/<slug>.md`) carry frontmatter with `writtenFor` (the major version), `written` (date) and, when the commands were checked against the system's own current docs, `verifiedAgainst` (the URL of the page or llms.txt they were checked against). Pages show which applies. `{{version}}` in a guide is replaced with the latest npm version at build time.
- When the latest major differs from `writtenFor`, the page shows a warning and `catalog.json` sets `buildGuide.outdated: true`. Agents are told to confirm setup in the system's own `llms.txt` or MCP server.
- **Other systems** get a generated guide: pinned CDN links when the system works without a build step, the package install command, and the system's AI resources.

## 10. Validation and refresh

- `npm run validate` (`scripts/validate.mjs`) checks:
  - seed schemas and enums
  - editorial references to unknown slugs
  - families with overlapping members
  - exclude reasons
  - guide frontmatter and sections
  - that every package named in a guide's install commands exists on npm, plus version drift

  CI runs it on every pull request and before each refresh. Errors fail the run; warnings (such as an outdated guide) are reported without failing it.
- `.github/workflows/refresh.yml` re-runs the pipeline weekly and pushes the refreshed data to `main`; Vercel (see `vercel.json`) rebuilds and deploys the site on every push. When a system goes stale, its tier drops automatically.

```bash
npm run all                        # validate -> harvest -> enrich -> score -> build
npm run validate                   # includes npm lookups; add --offline to skip them
node scripts/enrich.mjs --fresh    # ignore the cache
npm run serve                      # preview site/ locally
```
