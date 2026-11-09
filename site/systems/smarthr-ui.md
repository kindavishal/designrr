# SmartHR UI

> Japanese HR SaaS-style React apps.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **25/100** |
| Maintainer | SmartHR (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | hr, saas, b2b |
| Dark mode / RTL | not detected / not detected |
| Package size (unpacked) | 12.5k KB |
| License | MIT |
| Last activity | 2026-11-09 |
| Docs | https://smarthr.design |
| Source | https://github.com/kufu/smarthr-ui |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 977 | GitHub API (kufu/smarthr-ui) |
| GitHub forks | 146 | GitHub API |
| Contributors (incl. anonymous) | 120 | GitHub API |
| Issues closed / open | 354 / 4 (99% closed) | GitHub API |
| npm weekly downloads | 30.4k | npm (`smarthr-ui` 102.1.0) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/kufu/smarthr-ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you rely on agent tooling. This system has few machine-readable resources.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install smarthr-ui
```
Then follow the framework setup in the official getting-started guide: https://smarthr.design

## Agent tips
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
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked. Notes: AI-readiness 25 < 45.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/smarthr-ui.md_
