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
| Last activity | 2026-11-09 |
| Docs | https://ui.nuxt.com |
| Source | https://github.com/nuxt/ui |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 7.1k | GitHub API (nuxt/ui) |
| GitHub forks | 1.2k | GitHub API |
| Contributors (incl. anonymous) | 405 | GitHub API |
| Issues closed / open | 3.7k / 159 (96% closed) | GitHub API |
| npm weekly downloads | 1.0M | npm (`@nuxt/ui` 4.12.0) |

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

_Hand-written guide for v4, checked against https://ui.nuxt.com/raw/docs/getting-started/installation/nuxt.md on 2026-11-05; latest release 4.12.0._

## Install
New project from a template:
```bash
npm create nuxt@latest -- -t ui          # also: ui/landing, ui/docs, ui/saas, ui/dashboard, ui/chat
```
Existing Nuxt app:
```bash
npm install @nuxt/ui tailwindcss
```
Add `modules: ['@nuxt/ui']` and `css: ['~/assets/css/main.css']` to `nuxt.config.ts`, and in `app/assets/css/main.css`:
```css
@import "tailwindcss";
@import "@nuxt/ui";
```
Plain Vue (Vite): same packages, then add the `ui()` plugin from `@nuxt/ui/vite` to `vite.config.ts`.

## Setup
Wrap the app in `<UApp>` (provides toasts, tooltips and overlays):
```vue
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

## Theme it to a brand
`app/app.config.ts`:
```ts
export default defineAppConfig({ ui: { colors: { primary: 'indigo', secondary: 'purple', neutral: 'zinc' } } })
```
Custom colour scales go in CSS with Tailwind's `@theme`; per-component `ui` props override slot classes.

## Agent tips
- Remote MCP server: `https://ui.nuxt.com/mcp` (HTTP transport). Docs index: `https://ui.nuxt.com/llms.txt`; every page has a raw Markdown version under `/raw/docs/…`.
- Start from the template closest to the product (dashboard, SaaS, chat, docs) rather than from scratch.

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

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/nuxt-ui.md_
