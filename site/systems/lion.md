# Lion

> White-label, accessible web components to build your own branded system (ING).

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **35/100** |
| Maintainer | ING (org-backed) |
| Platforms | web |
| Frameworks | web-components |
| Styling | headless (headless) |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | custom-brand, fintech, accessibility-critical |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 7.3k KB |
| License | MIT |
| GitHub stars | 2.0k |
| npm weekly downloads | 0 (`@lion/ui` 0.26.0) |
| Last activity | 2026-11-03 |
| Docs | https://lion.js.org |
| Source | https://github.com/ing-bank/lion |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/ing-bank/lion/blob/HEAD/docs/_assets/variables.css

## Consider an alternative if
- you want a finished visual style out of the box. This is headless; you supply all styling.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @lion/ui
```
Then follow the framework setup in the official getting-started guide: https://lion.js.org

## Agent tips
- Design tokens live in the repo (e.g. `docs/_assets/variables.css`). Map brand colours and type onto these rather than hard-coding values.
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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked. Notes: AI-readiness 35 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/lion.md_
