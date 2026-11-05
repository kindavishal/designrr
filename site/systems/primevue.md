# PrimeVue

> Vue apps needing a very large component set (data tables, charts, editors) with themes.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | PrimeTek (org-backed) |
| Platforms | web |
| Frameworks | vue |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, admin, data-dense; shapes: app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 9.2k KB |
| License | MIT |
| GitHub stars | 14.4k |
| npm weekly downloads | 1.0M (`primevue` 5.0.4) |
| Last activity | 2026-10-22 |
| Docs | https://primevue.org |
| Source | https://github.com/primefaces/primevue |
| Same family | [PrimeNG](primeng.md), [PrimeReact](primereact.md) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - in-repo package: https://github.com/primefaces/primevue/tree/HEAD/packages/mcp (see its README for setup)
- **Agent/contributor docs in repo:** https://github.com/primefaces/primevue/blob/HEAD/apps/showcase/server/assets/llms/llms-full.txt

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you copy the build guide verbatim. It was written for v4; the latest release is 5.0.4, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v4; latest release 5.0.4._

## Install
```bash
npm install primevue @primeuix/themes primeicons
```

## Setup
```ts
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
app.use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: '.dark' } } });
```

## Theme it to a brand
`definePreset(Aura, { semantic: { primary: { 50: '{indigo.50}', …, 950: '{indigo.950}' } } })`. Tailwind users can use unstyled mode + the Tailwind preset.

## Agent tips
- The PrimeVue repo ships an MCP package (`packages/mcp`); see docs for setup. Same model for PrimeNG and PrimeReact.

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
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/primevue.md_
