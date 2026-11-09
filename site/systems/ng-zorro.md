# NG-ZORRO

> Ant Design for Angular: enterprise admin and data-entry apps.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | Community (Ant Design) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, admin |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 24.4k KB |
| License | MIT |
| Last activity | 2026-11-09 |
| Docs | https://ng.ant.design |
| Source | https://github.com/NG-ZORRO/ng-zorro-antd |
| Same family | [Ant Design](ant-design.md), [Ant Design Vue](ant-design-vue.md), [Ant Design Pro Components](pro-components.md), [Ant Design Mobile](ant-design-mobile.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 9.2k | GitHub API (NG-ZORRO/ng-zorro-antd) |
| GitHub forks | 4.0k | GitHub API |
| Contributors (incl. anonymous) | 352 | GitHub API |
| Issues closed / open | 4.6k / 711 (87% closed) | GitHub API |
| npm weekly downloads | 184.9k | npm (`ng-zorro-antd` 22.2.0) |

## AI resources (use these first)
- **llms.txt:** https://ng.ant.design/llms.txt
- **llms-full.txt:** https://ng.ant.design/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/NG-ZORRO/ng-zorro-antd/blob/HEAD/components/input/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/NG-ZORRO/ng-zorro-antd/blob/HEAD/.claude/CLAUDE.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install ng-zorro-antd
```
Then follow the framework setup in the official getting-started guide: https://ng.ant.design

## Agent tips
- Read https://ng.ant.design/llms.txt first. It indexes the official docs in markdown.
- Design tokens live in the repo (e.g. `components/input/tokens.ts`). Map brand colours and type onto these rather than hard-coding values.
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
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/ng-zorro.md_
