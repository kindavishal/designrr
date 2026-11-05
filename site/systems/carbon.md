# Carbon Design System

> Serious enterprise and data products with strict accessibility and a rigorous token system.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **85/100** |
| Maintainer | IBM (org-backed) |
| Platforms | web |
| Frameworks | react, web-components |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, data-dense, dashboard, b2b, accessibility-critical; shapes: app-dashboard, forms-flows |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 5.2k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-05 |
| Docs | https://carbondesignsystem.com |
| Source | https://github.com/carbon-design-system/carbon |
| Same family | [Carbon Components Svelte](carbon-svelte.md), [Carbon for IBM Products](carbon-ibm-products.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 9.6k | GitHub API (carbon-design-system/carbon) |
| GitHub forks | 2.3k | GitHub API |
| Contributors (incl. anonymous) | 706 | GitHub API |
| Issues closed / open | 10.4k / 984 (91% closed) | GitHub API |
| npm weekly downloads | 192.5k | npm (`@carbon/react` 1.120.0) |

## AI resources (use these first)
- **llms.txt:** https://carbondesignsystem.com/llms.txt
- **MCP server:**
  - remote server https://mcp.carbondesignsystem.com/mcp
    ```json
    {"mcpServers":{"carbon":{"type":"http","url":"https://mcp.carbondesignsystem.com/mcp"}}}
    ```
  - **Access:** Hosted by IBM; connecting requires signing in with an IBMid [https://github.com/carbon-design-system/carbon-mcp].
- **Design tokens:** https://github.com/carbon-design-system/carbon/blob/HEAD/packages/type/src/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/carbon-design-system/carbon/blob/HEAD/AGENTS.md
- **Figma Code Connect:** yes, so Figma components map to code.

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v1, checked against https://github.com/carbon-design-system/carbon/blob/main/packages/react/README.md on 2026-11-05; latest release 1.120.0._

## Install
```bash
npm install @carbon/react
npm install sass
```

## Setup
```scss
// index.scss: all component styles (or @use '@carbon/react/scss/components/button' for one)
@use '@carbon/react';
```
```tsx
import { Theme, Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';

<Theme theme="white">{/* 'white' | 'g10' | 'g90' | 'g100' */}
  <Button renderIcon={Add}>Create</Button>
</Theme>
```
`Theme` can wrap the whole app or a single region (for example a dark `g100` header on a `white` page).

## Theme it to a brand
Carbon is intentionally opinionated: pick one of the four themes and customise through its Sass theme tokens rather than ad-hoc CSS.

## Agent tips
- Carbon MCP (hosted): `https://mcp.carbondesignsystem.com/mcp` (streamable HTTP). It requires signing in with an IBMid. A "Carbon Builder" agent skill is published in the carbon-mcp repository.
- Docs index for LLMs: `https://carbondesignsystem.com/llms.txt`.
- Use the UI Shell components (`Header`, `SideNav`) for app chrome and `DataTable` for tables. Web Components version: `@carbon/web-components`.

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
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 5/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/carbon.md_
