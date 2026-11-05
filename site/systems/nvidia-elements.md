# NVIDIA Elements

> AI-factory and developer-tool UIs as web components with agent tooling.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | NVIDIA (org-backed) |
| Platforms | web |
| Frameworks | web-components |
| Styling | web-components |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | ai-app, enterprise, devtools; shapes: chat-ai, app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 8.3k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-04 |
| Docs | https://github.com/NVIDIA/elements |
| Source | https://github.com/NVIDIA/elements |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 113 | GitHub API (NVIDIA/elements) |
| GitHub forks | 20 | GitHub API |
| Contributors (incl. anonymous) | 22 | GitHub API |
| Issues closed / open | 0 / 0 | GitHub API |
| npm weekly downloads | 4.1k | npm (`@nvidia-elements/core` 2.22.3) |

## AI resources (use these first)
- **llms.txt:** https://github.com/llms.txt
- **llms-full.txt:** https://github.com/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/NVIDIA/elements/blob/HEAD/projects/site/src/_11ty/shortcodes/tokens.js
- **Agent/contributor docs in repo:** https://github.com/NVIDIA/elements/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @nvidia-elements/core
```
Then follow the framework setup in the official getting-started guide: https://github.com/NVIDIA/elements

## Agent tips
- Read https://github.com/llms.txt first. It indexes the official docs in markdown.
- Design tokens live in the repo (e.g. `projects/site/src/_11ty/shortcodes/tokens.js`). Map brand colours and type onto these rather than hard-coding values.
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
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/nvidia-elements.md_
