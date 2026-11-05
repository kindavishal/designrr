# Taiga UI

> Angular fintech and enterprise apps that need many form, data and input components.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **80/100** |
| Maintainer | T-Bank (org-backed) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | fintech, enterprise |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 1.4k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-05 |
| Docs | https://taiga-ui.dev |
| Source | https://github.com/taiga-family/taiga-ui |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 4.1k | GitHub API (taiga-family/taiga-ui) |
| GitHub forks | 585 | GitHub API |
| Contributors (incl. anonymous) | 338 | GitHub API |
| Issues closed / open | 2.8k / 79 (97% closed) | GitHub API |
| npm weekly downloads | 35.5k | npm (`@taiga-ui/core` 5.31.0) |

## AI resources (use these first)
- **llms.txt:** https://taiga-ui.dev/llms.txt
- **llms-full.txt:** https://taiga-ui.dev/llms-full.txt
- **MCP server:**
  - npm package `@taiga-ui/mcp`
    ```json
    {"mcpServers":{"taiga-ui":{"command":"npx","args":["-y","@taiga-ui/mcp"]}}}
    ```
- **Design tokens:** https://github.com/taiga-family/taiga-ui/blob/HEAD/projects/kit/tokens/i18n.ts
- **Agent/contributor docs in repo:** https://github.com/taiga-family/taiga-ui/blob/HEAD/.github/copilot-instructions.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v5, checked against https://taiga-ui.dev/getting-started.md on 2026-11-05; latest release 5.31.0._

## Install
The schematic installs packages and configures styles, assets and providers:
```bash
ng add taiga-ui            # Angular CLI
# Nx: npm i taiga-ui && nx g taiga-ui:ng-add
```
Manual: `npm i @taiga-ui/{cdk,core,kit,icons}` plus add-ons as needed (`@taiga-ui/addon-charts`, `addon-table`, `addon-commerce`, `addon-mobile`, `layout`).

## Setup
```ts
// main.ts
import { provideTaiga } from '@taiga-ui/core';
bootstrapApplication(App, { providers: [provideTaiga()] });
```
```ts
// app component
import { TuiRoot } from '@taiga-ui/core';
@Component({ selector: 'app-root', imports: [TuiRoot], template: `<tui-root><!-- app --></tui-root>` })
export class App {}
```
Manual installs also add `@taiga-ui/styles/taiga-ui-theme.less` and `taiga-ui-fonts.less` to the build `styles`, and copy `@taiga-ui/icons/src` to `assets/taiga-ui/icons`.

## Theme it to a brand
Override Taiga's CSS variables (`--tui-background-accent-1`, `--tui-text-primary`, …) in a global stylesheet.

## Agent tips
- MCP server: `npx @taiga-ui/mcp init` scaffolds the config for your agent (`--client <client>` to choose one). Docs index: `https://taiga-ui.dev/llms.txt`.

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
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/taiga-ui.md_
