# Preline UI

> Tailwind components and plugins for marketing sites and dashboards in any stack.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **25/100** |
| Maintainer | Htmlstream |
| Platforms | web |
| Frameworks | any |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | marketing, startup-mvp, framework-agnostic; shapes: marketing-site, app-dashboard |
| Dark mode / RTL | not detected / not detected |
| Package size (unpacked) | 6.8k KB |
| License | NOASSERTION |
| Last activity | 2026-08-31 |
| Docs | https://preline.co |
| Source | https://github.com/htmlstreamofficial/preline |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 6.5k | GitHub API (htmlstreamofficial/preline) |
| GitHub forks | 413 | GitHub API |
| Contributors (incl. anonymous) | 34 | GitHub API |
| Issues closed / open | 572 / 9 (98% closed) | GitHub API |
| npm weekly downloads | 75.7k | npm (`preline` 5.0.0) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Agent skills shipped in the npm package:** `get-documentation`, `theme-generator`
- **Agent/contributor docs in repo:** https://github.com/htmlstreamofficial/preline/blob/HEAD/skills/preline-mcp/SKILL.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you rely on agent tooling. This system has few machine-readable resources.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install preline
```
Then follow the framework setup in the official getting-started guide: https://preline.co

## Agent tips
- The npm package ships agent skills (`get-documentation`, `theme-generator`); install them with your agent's skills tooling.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

## Build checklist (any system)
1. **Install & provider:** follow the install section exactly for the detected framework and version.
2. **Brand → tokens:** set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first:** build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components:** map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States:** loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility:** keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness:** enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify:** run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm. Notes: AI-readiness 25 < 45.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/preline.md_
