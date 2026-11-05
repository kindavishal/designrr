# Angular Primitives

> Headless, accessible Angular primitives for a custom-branded system.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Community |
| Platforms | web |
| Frameworks | angular |
| Styling | headless (headless) |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | custom-brand |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 4.5k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-04 |
| Docs | https://angularprimitives.com |
| Source | https://github.com/ng-primitives/ng-primitives |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 612 | GitHub API (ng-primitives/ng-primitives) |
| GitHub forks | 83 | GitHub API |
| Contributors (incl. anonymous) | 57 | GitHub API |
| Issues closed / open | 296 / 43 (87% closed) | GitHub API |
| npm weekly downloads | 50.1k | npm (`ng-primitives` 0.131.4) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - in-repo package: https://github.com/ng-primitives/ng-primitives/tree/HEAD/packages/mcp (see its README for setup)
- **Design tokens:** https://github.com/ng-primitives/ng-primitives/blob/HEAD/packages/tools/src/generators/token/schema.d.ts
- **Agent/contributor docs in repo:** https://github.com/ng-primitives/ng-primitives/blob/HEAD/.github/copilot-instructions.md

## Consider an alternative if
- you want a finished visual style out of the box. This is headless; you supply all styling.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install ng-primitives
```
Then follow the framework setup in the official getting-started guide: https://angularprimitives.com

## Agent tips
- Connect the MCP server listed above before writing code, and use it to look up components and props.
- Design tokens live in the repo (e.g. `packages/tools/src/generators/token/schema.d.ts`). Map brand colours and type onto these rather than hard-coding values.
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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/ng-primitives.md_
