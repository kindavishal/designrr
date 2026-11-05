# Yamada UI

> Feature-rich, themeable React apps with style props (Chakra-like).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Community |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | saas |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 20.8k KB |
| License | MIT |
| GitHub stars | 1.0k |
| npm weekly downloads | 0 (`@yamada-ui/react` 2.3.1) |
| Last activity | 2026-11-04 |
| Docs | https://yamada-ui.com |
| Source | https://github.com/yamada-ui/yamada-ui |

## AI resources (use these first)
- **llms.txt:** https://yamada-ui.com/llms.txt
- **llms-full.txt:** https://yamada-ui.com/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/yamada-ui/yamada-ui/blob/HEAD/packages/react/src/theme/tokens
- **Agent/contributor docs in repo:** https://github.com/yamada-ui/yamada-ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @yamada-ui/react
```
Then follow the framework setup in the official getting-started guide: https://yamada-ui.com

## Agent tips
- Read https://yamada-ui.com/llms.txt first. It indexes the official docs in markdown.
- Design tokens live in the repo (e.g. `packages/react/src/theme/tokens`). Map brand colours and type onto these rather than hard-coding values.
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
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/yamada-ui.md_
