# Quasar

> One Vue codebase for SPA, SSR, PWA, mobile (Capacitor) and desktop (Electron) apps.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **75/100** |
| Maintainer | Quasar |
| Platforms | web, ios, android, desktop |
| Frameworks | vue |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | admin, hybrid-app, mobile; shapes: saas-app, mobile-app |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 13.7k KB |
| License | MIT |
| Last activity | 2026-11-05 |
| Docs | https://quasar.dev |
| Source | https://github.com/quasarframework/quasar |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 27.2k | GitHub API (quasarframework/quasar) |
| GitHub forks | 3.7k | GitHub API |
| Contributors (incl. anonymous) | 809 | GitHub API |
| Issues closed / open | 8.1k / 54 (99% closed) | GitHub API |
| npm weekly downloads | 478.3k | npm (`quasar` 2.35.2) |

## AI resources (use these first)
- **llms.txt:** https://quasar.dev/llms.txt
- **MCP server:**
  - npm package `@quasar/mcp`
    ```json
    {"mcpServers":{"quasar":{"command":"npx","args":["-y","@quasar/mcp"]}}}
    ```
  - in-repo package: https://github.com/quasarframework/quasar/tree/HEAD/mcp/README.md (see its README for setup)
- **Design tokens:** https://github.com/quasarframework/quasar/blob/HEAD/docs/build/mcp/output/tokens.js
- **Agent/contributor docs in repo:** https://github.com/quasarframework/quasar/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v2, checked against https://quasar.dev/start/quick-start.md on 2026-11-05; latest release 2.35.2._

## Install
```bash
pnpm create quasar@latest        # the quick start lists the npm/yarn/bun equivalents
pnpm add -g @quasar/cli@latest   # optional global CLI, then `quasar dev`
```
One Vue codebase → SPA, SSR, PWA, mobile (Capacitor/Cordova) and desktop (Electron). Other flavours: Vite plugin or UMD.

## Theme it to a brand
Sass variables (`$primary`, `$secondary`, …) in `src/css/quasar.variables.scss` (or `.sass`), plus the colour utilities for changing brand colours at runtime.

## Agent tips
- MCP server: `npx -y @quasar/mcp@latest`, run from the project folder. It serves the docs and component API of the exact Quasar versions installed, and works offline.
- LLM index: `https://quasar.dev/llms.txt`.

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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/quasar.md_
