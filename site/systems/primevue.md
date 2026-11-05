# PrimeVue

> Vue apps that need a large component set (data tables, charts, editors) with themes.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | PrimeTek (org-backed) |
| Platforms | web |
| Frameworks | vue |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, admin, data-dense; shapes: app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 9.2k KB |
| License | MIT |
| Last activity | 2026-10-22 |
| Docs | https://primevue.dev |
| Source | https://github.com/primefaces/primevue |
| Same family | [PrimeNG](primeng.md), [PrimeReact](primereact.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 14.4k | GitHub API (primefaces/primevue) |
| GitHub forks | 1.8k | GitHub API |
| Contributors (incl. anonymous) | 457 | GitHub API |
| Issues closed / open | 5.9k / 688 (90% closed) | GitHub API |
| npm weekly downloads | 1.0M | npm (`primevue` 5.0.4) |

## AI resources (use these first)
- **llms.txt:** https://primevue.dev/llms/llms.txt
- **llms-full.txt:** https://primevue.dev/llms/llms-full.txt
- **MCP server:**
  - npm package `@primevue/mcp`
    ```json
    {"mcpServers":{"primevue":{"command":"npx","args":["-y","@primevue/mcp"]}}}
    ```
  - in-repo package: https://github.com/primefaces/primevue/tree/HEAD/packages/mcp (see its README for setup)
- **Agent/contributor docs in repo:** https://github.com/primefaces/primevue/blob/HEAD/apps/showcase/server/assets/llms/llms-full.txt

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v5, checked against https://github.com/primefaces/primevue/tree/master/apps/showcase/doc/vite on 2026-11-05; latest release 5.0.4._

## Install
```bash
npm install primevue @primeuix/themes
```

## Setup
```ts
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: '.dark' } } });
```
Nuxt: use the `@primevue/nuxt-module` module. Components can be auto-imported (see "Auto Import" in the docs).

## Theme it to a brand
`definePreset(Aura, { semantic: { primary: { 50: '{indigo.50}', …, 950: '{indigo.950}' } } })` from `@primeuix/themes`. Tailwind users can run PrimeVue in unstyled mode with pass-through classes.

## Agent tips
- MCP server: `npx -y @primevue/mcp`. Docs moved to primevue.dev; the LLM index is `https://primevue.dev/llms/llms.txt` (plus `llms-full.txt`).
- PrimeNG (Angular) and PrimeReact share the same theming model; PrimeNG's MCP is `@primeng/mcp`.

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
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/primevue.md_
