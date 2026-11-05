# Vaadin Web Components

> Java (Vaadin Flow) or web-component enterprise apps with heavy data grids.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **40/100** |
| Maintainer | Vaadin (org-backed) |
| Platforms | web |
| Frameworks | web-components, java |
| Styling | web-components |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, data-dense, java-ecosystem |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 42 KB |
| License | Apache-2.0 |
| Last activity | 2026-11-05 |
| Docs | https://vaadin.com/docs/latest/components |
| Source | https://github.com/vaadin/web-components |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 585 | GitHub API (vaadin/web-components) |
| GitHub forks | 106 | GitHub API |
| Contributors (incl. anonymous) | 162 | GitHub API |
| Issues closed / open | 2.3k / 905 (71% closed) | GitHub API |
| npm weekly downloads | 112.1k | npm (`@vaadin/button` 25.3.5) |

## AI resources (use these first)
- **llms.txt:** https://vaadin.com/docs/latest/components/llms.txt
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/vaadin/web-components/blob/HEAD/CLAUDE.md

## Consider an alternative if
- you are not building inside the java ecosystem.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @vaadin/button
```
Then follow the framework setup in the official getting-started guide: https://vaadin.com/docs/latest/components

## Agent tips
- Read https://vaadin.com/docs/latest/components/llms.txt first. It indexes the official docs in markdown.
- Web components work in any framework; React 19+ supports them directly, older React may need wrappers.
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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked. Notes: AI-readiness 40 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/vaadin.md_
