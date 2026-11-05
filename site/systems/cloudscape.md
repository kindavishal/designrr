# Cloudscape

> Cloud consoles, ops dashboards and data-heavy B2B tools (AWS console style).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | Amazon Web Services (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, dashboard, data-dense, devtools, cloud-console; shapes: app-dashboard |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 21.3k KB |
| License | Apache-2.0 |
| GitHub stars | 2.7k |
| npm weekly downloads | 168.9k (`@cloudscape-design/components` 3.0.1409) |
| Last activity | 2026-11-04 |
| Docs | https://cloudscape.design |
| Source | https://github.com/cloudscape-design/components |

## AI resources (use these first)
- **llms.txt:** https://cloudscape.design/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/cloudscape-design/components/blob/HEAD/style-dictionary
- **Agent/contributor docs in repo:** https://github.com/cloudscape-design/components/blob/HEAD/.github/copilot-instructions.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide, written 2026-11-05 for v3; latest release 3.0.1409._

## Install
```bash
npm install @cloudscape-design/components @cloudscape-design/global-styles
```

## Setup
```tsx
import '@cloudscape-design/global-styles/index.css';
import { AppLayout, ContentLayout, Header, Table } from '@cloudscape-design/components';
```
Dark mode / density: `applyMode(Mode.Dark)`, `applyDensity(Density.Compact)` from `@cloudscape-design/global-styles`.

## Theme it to a brand
Limited by design: `applyTheme({ theme: { tokens: { colorBackgroundButtonPrimaryDefault: '#…' } } })` from `@cloudscape-design/components/theming`.

## Agent tips
- Use the documented **patterns** (Create resource, Table view, Dashboard) — they map one-to-one to components.
- `@cloudscape-design/board-components` for drag-and-drop dashboards; `@cloudscape-design/chart-components` for charts.

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
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/cloudscape.md_
