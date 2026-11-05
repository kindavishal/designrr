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
| Last activity | 2026-11-05 |
| Docs | https://cloudscape.design |
| Source | https://github.com/cloudscape-design/components |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 2.7k | GitHub API (cloudscape-design/components) |
| GitHub forks | 254 | GitHub API |
| Contributors (incl. anonymous) | 92 | GitHub API |
| Issues closed / open | 318 / 51 (86% closed) | GitHub API |
| npm weekly downloads | 165.6k | npm (`@cloudscape-design/components` 3.0.1410) |

## AI resources (use these first)
- **llms.txt:** https://cloudscape.design/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/cloudscape-design/components/blob/HEAD/style-dictionary
- **Agent/contributor docs in repo:** https://github.com/cloudscape-design/components/blob/HEAD/.github/copilot-instructions.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v3, checked against https://cloudscape.design/get-started/for-developers/using-cloudscape-components/index.html.md on 2026-11-05; latest release 3.0.1410._

## Install
```bash
npm install @cloudscape-design/global-styles @cloudscape-design/components
```

## Setup
```tsx
import '@cloudscape-design/global-styles/index.css';
import Button from '@cloudscape-design/components/button';   // per-component imports
import AppLayout from '@cloudscape-design/components/app-layout';
```
Colour mode and density:
```ts
import { applyMode, applyDensity, Mode, Density } from '@cloudscape-design/global-styles';
applyMode(Mode.Dark);
applyDensity(Density.Compact);
```

## Theme it to a brand
Limited by design: `applyTheme({ theme, selector: 'body' })` from `@cloudscape-design/components/theming` (needs a CSP that allows inline styles), or `generateThemeStylesheet` for build-time CSS.

## Agent tips
- Cloudscape's docs are built for agents: `https://cloudscape.design/llms.txt`, a Markdown version of every page (`…/index.html.md`) and machine-readable component APIs (`https://cloudscape.design/components/index.html.json`, or per component).
- Use the documented patterns (create resource, table view, dashboards), which map one-to-one to components.

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
