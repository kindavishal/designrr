# shadcn/ui

> Modern SaaS and AI apps on React/Next.js + Tailwind where you want to own and restyle component source.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **80/100** |
| Maintainer | shadcn (Vercel) (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | saas, startup-mvp, dashboard, marketing, ai-app, devtools; shapes: saas-app, app-dashboard, marketing-site |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 209 KB |
| License | MIT |
| GitHub stars | 127.4k |
| npm weekly downloads | 17.3M (`shadcn` 4.23.0) |
| Last activity | 2026-11-04 |
| Docs | https://ui.shadcn.com |
| Source | https://github.com/shadcn-ui/ui |
| Same family | [shadcn-vue](shadcn-vue.md), [Zard UI (shadcn for Angular)](zardui.md), [shadcn_ui (Flutter)](shadcn-flutter-ui.md), [shadcn-svelte](shadcn-svelte.md), [Spartan (shadcn for Angular)](spartan.md), [React Native Reusables](rn-reusables.md) |

## AI resources (use these first)
- **llms.txt:** https://ui.shadcn.com/llms.txt
- **MCP server:**
  - `npx shadcn@latest mcp`
    ```json
    {"mcpServers":{"shadcn-ui":{"command":"npx","args":["shadcn@latest","mcp"]}}}
    ```
- **Theming tokens:** Theme is CSS variables (globals.css) generated per registry theme; see ui.shadcn.com/docs/theming
- **Agent/contributor docs in repo:** https://github.com/shadcn-ui/ui/blob/HEAD/apps/v4/AGENTS.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v4, checked against https://ui.shadcn.com/docs/cli.md on 2026-11-05; latest release 4.23.0._

## Install
New project (scaffolds the app and shadcn/ui together):
```bash
npx shadcn@latest init --template next     # templates: next, vite, start, react-router, laravel, astro
```
Existing project: run `npx shadcn@latest init` in the app root. Choose the primitive base with `--base radix|base|aria`, or a saved design with `--preset <code>` (build one at ui.shadcn.com/create). Then add components:
```bash
npx shadcn@latest add button card dialog field input table sidebar
```

## How it works
Components are copied into your repo (`components/ui/*`), so you own and edit the source. Config lives in `components.json`. Built on Radix, Base UI or React Aria primitives with Tailwind CSS.

## Theme it to a brand
- Edit the CSS variables in your global CSS (`--background`, `--foreground`, `--primary`, `--radius`, …) for `:root` and `.dark`, or start from a preset.
- `npx shadcn@latest preset decode <code>` shows what a preset sets; `shadcn apply` re-applies one to an existing project.
- Fonts: set them in your layout and map them to `--font-sans`.

## Agent tips
- MCP server: `npx shadcn@latest mcp init --client <claude|cursor|vscode|codex|opencode>`. It lets the agent search and install registry items.
- Agent skill: `npx skills add shadcn/ui`.
- `npx shadcn@latest docs <component>` and `view` print docs and source; `search` queries registries.
- Never hand-write a component that exists in the registry; `add` it. Use blocks (for example `npx shadcn@latest add dashboard-01`) to scaffold whole screens.

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
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/shadcn-ui.md_
