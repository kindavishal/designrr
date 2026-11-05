# Spartan (shadcn for Angular)

> shadcn/ui-style accessible components for Angular (brain + helm) on Tailwind.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | Spartan |
| Platforms | web |
| Frameworks | angular |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | saas, startup-mvp |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 3.1k KB |
| License | MIT |
| Last activity | 2026-11-03 |
| Docs | https://www.spartan.ng |
| Source | https://github.com/spartan-ng/spartan |
| Same family | [shadcn/ui](shadcn-ui.md), [shadcn-svelte](shadcn-svelte.md), [shadcn-vue](shadcn-vue.md), [Zard UI (shadcn for Angular)](zardui.md), [shadcn_ui (Flutter)](shadcn-flutter-ui.md), [React Native Reusables](rn-reusables.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 3.0k | GitHub API (spartan-ng/spartan) |
| GitHub forks | 339 | GitHub API |
| Contributors (incl. anonymous) | 158 | GitHub API |
| Issues closed / open | 598 / 70 (90% closed) | GitHub API |
| npm weekly downloads | 108.8k | npm (`@spartan-ng/brain` 1.9.0) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@spartan-ng/mcp`
    ```json
    {"mcpServers":{"spartan":{"command":"npx","args":["-y","@spartan-ng/mcp"]}}}
    ```
  - in-repo package: https://github.com/spartan-ng/spartan/tree/HEAD/libs/mcp (see its README for setup)
- **Copy-the-source CLI:** documented at https://github.com/spartan-ng/spartan/blob/main/skills/spartan/cli.md
- **Agent/contributor docs in repo:** https://github.com/spartan-ng/spartan/blob/HEAD/CLAUDE.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v1, checked against https://github.com/spartan-ng/spartan/blob/main/skills/spartan/cli.md on 2026-11-05; latest release 1.9.0._

## Install
```bash
npm i -D @spartan-ng/cli
ng g @spartan-ng/cli:init
ng g @spartan-ng/cli:ui-theme          # pick a theme (CSS variables)
ng g @spartan-ng/cli:ui --name=button  # or: ng g @spartan-ng/cli:ui all
```
Nx: use `npx nx g @spartan-ng/cli:…` with the same generators.

## How it works
shadcn/ui's model for Angular: `@spartan-ng/brain` provides accessible headless primitives (installed from npm); `helm` provides Tailwind-styled source copied into your repo, which you own and edit.

## Theme it to a brand
Edit the CSS variables written by `ui-theme` (same model as shadcn/ui: `--primary`, `--background`, `--radius`, …).

## Agent tips
- MCP server: `npx -y @spartan-ng/mcp`. Agent skill: `npx skills add spartan-ng/spartan`.
- `ng g @spartan-ng/cli:healthcheck --autoFix` checks and repairs the setup.

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
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/spartan.md_
