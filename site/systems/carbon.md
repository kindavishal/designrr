# Carbon Design System

> Serious enterprise and data products with strict accessibility and a rigorous token system.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | IBM (org-backed) |
| Platforms | web |
| Frameworks | react, web-components |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, data-dense, dashboard, b2b, accessibility-critical; shapes: app-dashboard, forms-flows |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 5.2k KB |
| License | Apache-2.0 |
| GitHub stars | 9.6k |
| npm weekly downloads | 186.2k (`@carbon/react` 1.120.0) |
| Last activity | 2026-11-05 |
| Docs | https://carbondesignsystem.com |
| Source | https://github.com/carbon-design-system/carbon |
| Same family | [Carbon Components Svelte](carbon-svelte.md), [Carbon for IBM Products](carbon-ibm-products.md) |

## AI resources (use these first)
- **llms.txt:** https://carbondesignsystem.com/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/carbon-design-system/carbon/blob/HEAD/packages/type/src/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/carbon-design-system/carbon/blob/HEAD/AGENTS.md
- **Figma Code Connect:** yes, so Figma components map to code.

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v1, written 2026-11-05; latest release 1.120.0._

## Install
```bash
npm install @carbon/react sass
```

## Setup
```scss
// index.scss
@use '@carbon/react';
```
```tsx
import { Theme, Button } from '@carbon/react';
<Theme theme="white">{/* white | g10 | g90 | g100 */}</Theme>
```

## Theme it to a brand
Carbon is intentionally opinionated; customise via Sass theme tokens (`@use '@carbon/react/scss/themes' with (...)`) and `@carbon/styles` token overrides, not ad-hoc CSS.

## Agent tips
- Tokens are published as `@carbon/themes` / `@carbon/colors` packages (JSON + Sass).
- Use the UI Shell components (`Header`, `SideNav`) for app chrome and `DataTable` for tables.
- Web Components version: `@carbon/web-components`.

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
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 5/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/carbon.md_
