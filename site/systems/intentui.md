# Intent UI

> Accessible React Aria components styled with Tailwind, copy-paste into your project.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **70/100** |
| Maintainer | Community |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | saas, accessibility-critical |
| Dark mode / RTL | yes / not detected |
| License | MIT |
| GitHub stars | 2.0k |
| Last activity | 2026-11-03 |
| Docs | https://intentui.com |
| Source | https://github.com/irsyadadl/intentui |

## AI resources (use these first)
- **llms.txt:** https://intentui.com/llms.txt
- **MCP server:**
  - in-repo package: https://github.com/irsyadadl/intentui/tree/HEAD/src/content (see its README for setup)
- **Agent/contributor docs in repo:** https://github.com/irsyadadl/intentui/blob/HEAD/public/llms.txt

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
See https://intentui.com for installation.

## Agent tips
- Read https://intentui.com/llms.txt first. It indexes the official docs in markdown.
- Connect the MCP server listed above before writing code, and use it to look up components and props.
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
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/intentui.md_
