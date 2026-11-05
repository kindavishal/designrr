# Tremor

> Dashboards and analytics UIs (charts, KPI cards) on React + Tailwind.

| | |
|---|---|
| Tier | **watch** |
| AI-readiness | **20/100** |
| Maintainer | Tremor (Vercel) (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | dashboard, analytics, saas; shapes: app-dashboard |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 483 KB |
| License | Apache-2.0 |
| Last activity | 2025-10-10 |
| Docs | https://tremor.so |
| Source | https://github.com/tremorlabs/tremor |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 3.7k | GitHub API (tremorlabs/tremor) |
| GitHub forks | 200 | GitHub API |
| Contributors (incl. anonymous) | 4 | GitHub API |
| Issues closed / open | 41 / 18 (69% closed) | GitHub API |
| npm weekly downloads | 530.1k | npm (`@tremor/react` 3.18.7) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- maintenance has slowed (last activity 390 days ago).
- you rely on agent tooling. This system has few machine-readable resources.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @tremor/react
```
Then follow the framework setup in the official getting-started guide: https://tremor.so

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
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **watch**; traction via stars, npm, orgBacked. Notes: Last activity 390 days ago (12-24 months).

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/tremor.md_
