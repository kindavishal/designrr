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
| GitHub stars | 3.0k |
| npm weekly downloads | 0 (`@spartan-ng/brain` 1.9.0) |
| Last activity | 2026-11-03 |
| Docs | https://www.spartan.ng |
| Source | https://github.com/spartan-ng/spartan |
| Same family | [shadcn/ui](shadcn-ui.md), [shadcn-vue](shadcn-vue.md), [Zard UI (shadcn for Angular)](zardui.md), [shadcn_ui (Flutter)](shadcn-flutter-ui.md), [shadcn-svelte](shadcn-svelte.md), [React Native Reusables](rn-reusables.md) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@spartan-ng/mcp`
    ```json
    {"mcpServers":{"spartan":{"command":"npx","args":["-y","@spartan-ng/mcp"]}}}
    ```
  - in-repo package: https://github.com/spartan-ng/spartan/tree/HEAD/libs/mcp (see its README for setup)
- **Agent/contributor docs in repo:** https://github.com/spartan-ng/spartan/blob/HEAD/CLAUDE.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you copy the build guide verbatim. It was written for v0; the latest release is 1.9.0, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v0; latest release 1.9.0._

## Install
```bash
npm i -D @spartan-ng/cli
ng g @spartan-ng/cli:init
ng g @spartan-ng/cli:ui button       # adds helm (styled) + brain (headless) parts
```

## How it works
shadcn model for Angular: `brain` = accessible headless primitives (npm), `helm` = Tailwind-styled source copied into your repo.

## Agent tips
- MCP server: `@spartan-ng/mcp`. Theme with the same CSS variables model as shadcn/ui.

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

Quality gate: activity **active**; traction via stars.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/spartan.md_
