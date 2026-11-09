# Base UI

> Unstyled, accessible React primitives from the MUI team for building a custom-branded system.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | MUI (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | headless (headless) |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | custom-brand |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 10.1k KB |
| License | MIT |
| Last activity | 2026-11-09 |
| Docs | https://base-ui.com |
| Source | https://github.com/mui/base-ui |
| Same family | [Material UI (MUI)](mui.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 11.3k | GitHub API (mui/base-ui) |
| GitHub forks | 603 | GitHub API |
| Contributors (incl. anonymous) | 334 | GitHub API |
| Issues closed / open | 1.3k / 322 (80% closed) | GitHub API |
| npm weekly downloads | 28.5M | npm (`@base-ui/react` 1.9.0) |

## AI resources (use these first)
- **llms.txt:** https://base-ui.com/llms.txt
- **llms-full.txt:** https://base-ui.com/llms-full.txt
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/mui/base-ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- you want a finished visual style out of the box. This is headless; you supply all styling.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @base-ui/react
```
Then follow the framework setup in the official getting-started guide: https://base-ui.com

## Agent tips
- Read https://base-ui.com/llms.txt first. It indexes the official docs in markdown.
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
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/base-ui.md_
