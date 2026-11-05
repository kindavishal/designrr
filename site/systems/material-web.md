# Material Web

> Material 3 as web components (Google; maintenance mode).

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **30/100** |
| Maintainer | Google (org-backed) |
| Platforms | web |
| Frameworks | web-components |
| Styling | web-components |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | consumer, framework-agnostic; shapes: saas-app, content-site |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 7.7k KB |
| License | Apache-2.0 |
| GitHub stars | 11.4k |
| npm weekly downloads | 0 (`@material/web` 2.5.0) |
| Last activity | 2026-11-04 |
| Docs | https://material-web.dev |
| Source | https://github.com/material-components/material-web |
| Same family | [Flutter Material 3](flutter-material.md), [Material Design 3 for Android (Compose)](material-android.md), [Angular Material](angular-material.md) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/material-components/material-web/blob/HEAD/testing/tokens.ts

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @material/web
```
Then follow the framework setup in the official getting-started guide: https://material-web.dev

## Agent tips
- Design tokens live in the repo (e.g. `testing/tokens.ts`). Map brand colours and type onto these rather than hard-coding values.
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
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked. Notes: AI-readiness 30 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/material-web.md_
