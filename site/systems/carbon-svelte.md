# Carbon Components Svelte

> IBM Carbon look in Svelte for data-dense enterprise apps.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | IBM (community) (org-backed) |
| Platforms | web |
| Frameworks | svelte |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, data-dense, dashboard |
| Dark mode / RTL | not detected / yes |
| Package size (unpacked) | 5.4k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-05 |
| Docs | https://svelte.carbondesignsystem.com |
| Source | https://github.com/carbon-design-system/carbon-components-svelte |
| Same family | [Carbon Design System](carbon.md), [Carbon for IBM Products](carbon-ibm-products.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 2.9k | GitHub API (carbon-design-system/carbon-components-svelte) |
| GitHub forks | 269 | GitHub API |
| Contributors (incl. anonymous) | 109 | GitHub API |
| Issues closed / open | 1.0k / 13 (99% closed) | GitHub API |
| npm weekly downloads | 47.8k | npm (`carbon-components-svelte` 0.113.1) |

## AI resources (use these first)
- **llms.txt:** https://svelte.carbondesignsystem.com/llms.txt
- **llms-full.txt:** https://svelte.carbondesignsystem.com/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/carbon-design-system/carbon-components-svelte/blob/HEAD/src/tokens/index.js

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install carbon-components-svelte
```
Then follow the framework setup in the official getting-started guide: https://svelte.carbondesignsystem.com

## Agent tips
- Read https://svelte.carbondesignsystem.com/llms.txt first. It indexes the official docs in markdown.
- Design tokens live in the repo (e.g. `src/tokens/index.js`). Map brand colours and type onto these rather than hard-coding values.
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
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/carbon-svelte.md_
