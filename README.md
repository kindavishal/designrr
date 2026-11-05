# AI-Ready Design Systems

A curated, scored catalog of **230 production-grade design systems** (web, iOS, Android, Flutter, React Native, Blazor) that AI agents can choose from and build with.

- **Large, but no noise.** Every entry is actively maintained (last 12 months) and has real adoption (≥1k stars, ≥5k weekly npm downloads, ≥300 pub.dev likes, or a known company/government maintainer). Archived and deprecated systems are dropped automatically.
- **AI-ready.** Each system is scored 0–100 on what agents can actually use: an official MCP server, `llms.txt`, machine-readable tokens, typed APIs, registry/CLI install, agent docs, Storybook and Figma Code Connect.
- **Built to be built with.** Every system has a page with install steps, theming, its AI resources (including a copy-paste MCP config) and a build checklist. The 35 most-used systems have hand-written guides.
- **Free to run.** Uses only the GitHub API, npm, pub.dev, NuGet and HTTP probes. No paid APIs.

## Use it from any agent

Once it's published (see below), tell any agent that can browse:

> Read https://kindavishal.github.io/ai-ready-design-systems/llms.txt and find me the top 3 design systems for my product idea: *a B2B invoicing dashboard for small agencies, web, we use Next.js*. Then build the first screens with the one you recommend.

The agent follows the selection protocol in `llms.txt`:
1. Understand the product.
2. Filter `catalog.json`.
3. Rank the candidates and read their pages.
4. Return the top 3 with trade-offs.
5. Build with the chosen system, using its MCP server and `llms.txt` and following its build checklist.

**Agents that support skills (`SKILL.md` format):** copy `skills/pick-design-system/` into your agent's skills directory.

**Offline / in a repo:** point the agent at `site/llms.txt` and `site/catalog.json`.

## What's in the catalog

| | Count |
|---|---|
| Recommended (passes the gate and AI-readiness ≥ 45, or platform-native) | 104 |
| Solid (passes the gate) | 119 |
| Watch (maintenance slowing: 12–24 months) | 7 |
| Reference only (closed source, e.g. Airbnb, Stripe, Linear) | 11 |
| With an official MCP server | 41 |
| With `llms.txt` | 75 |

Browse it at `site/index.html`, which has search plus platform, framework and tier filters.

## How it works

```
curation/seed*.json ──► harvest ──► enrich ──────────────► score ─────────────► build ──► site/
(curated list)          + GitHub     GitHub GraphQL,        quality gate +        llms.txt, catalog.json,
                        topic search repo tree, npm,        AI-readiness rubric   systems/<slug>.md,
                        → review     pub.dev, NuGet,        → tiers               llms-full.txt, index.html
                        queue        llms.txt/MCP probes
```

```bash
npm run all                       # whole pipeline (Node ≥ 20, no dependencies)
SITE_URL=https://example.com npm run build
```

A GitHub token is read from `GITHUB_TOKEN`, or from `gh auth token`. Details are in [METHODOLOGY.md](METHODOLOGY.md).

## Maintaining

- **Add a system:** add an entry to `curation/seed-community.json`, then run `npm run all`. The entry is verified against GitHub and the package registries, and is listed only if it passes the gate.
- **Weekly refresh:** `.github/workflows/refresh.yml` re-runs the pipeline every week and deploys to GitHub Pages. New topic repos land in `data/raw/review-queue.json` for review.
- **Write a build guide:** add `guides/<slug>.md` with Install / Setup / Theme it to a brand / Agent tips.

## Sources

Candidates were gathered from [GitHub topics](https://github.com/topics/design-systems), [designsystems.one](https://www.designsystems.one/design-systems), [designsystems.surf](https://designsystems.surf/design-systems), [designsystems.com](https://www.designsystems.com/open-design-systems/) and the Design System Hub Figma plugin. Lens (Loom) and Gravity UI are included as systems. All signals come from public APIs.

## License

MIT. Each design system has its own license, shown on its page.
