# Nuxt UI

> Vue / Nuxt SaaS and marketing sites on Tailwind, with templates and dashboard blocks.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **75/100** |
| Maintainer | NuxtLabs (Vercel) (org-backed) |
| Platforms | web |
| Frameworks | vue, nuxt |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | saas, startup-mvp, marketing, dashboard; shapes: saas-app, marketing-site, content-site |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 2.8k KB |
| License | MIT |
| GitHub stars | 7.1k |
| npm weekly downloads | 0 (`@nuxt/ui` 4.12.0) |
| Last activity | 2026-11-04 |
| Docs | https://ui.nuxt.com |
| Source | https://github.com/nuxt/ui |

## AI resources (use these first)
- **llms.txt:** https://ui.nuxt.com/llms.txt
- **llms-full.txt:** https://ui.nuxt.com/llms-full.txt
- **MCP server:**
  - remote server https://ui.nuxt.com/mcp
    ```json
    {"mcpServers":{"nuxt-ui":{"type":"http","url":"https://ui.nuxt.com/mcp"}}}
    ```
- **Design tokens:** https://github.com/nuxt/ui/blob/HEAD/docs/app/utils/theme/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/nuxt/ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you copy the build guide verbatim. It was written for v3; the latest release is 4.12.0, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v3; latest release 4.12.0._

## Install
```bash
npm create nuxt@latest -- -t ui          # new Nuxt project with Nuxt UI
# existing: npx nuxt module add ui   then  @import "tailwindcss"; @import "@nuxt/ui";  in main.css
```
Plain Vue (Vite) is supported too via the `@nuxt/ui/vite` plugin.

## Setup
Wrap the app in `<UApp>` (provides toasts, tooltips, overlays).

## Theme it to a brand
`app.config.ts`: `ui: { colors: { primary: 'indigo', neutral: 'zinc' } }`; per-component `ui` slots override classes. Tailwind `@theme` for custom colour scales.

## Agent tips
- Remote MCP server: `https://ui.nuxt.com/mcp`; docs at `https://ui.nuxt.com/llms.txt`.
- Starter templates (dashboard, SaaS, landing, docs, chat) exist — start from one.

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
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/nuxt-ui.md_
