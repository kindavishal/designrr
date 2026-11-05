# Salt Design System

> Financial and trading apps with dense data and strict accessibility.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **25/100** |
| Maintainer | J.P. Morgan (org-backed) |
| Brand-locked | **yes**: J.P. Morgan identity by default (themeable). |
| Platforms | web |
| Frameworks | react |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | fintech, enterprise, data-dense, trading; shapes: app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 6.6k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-04 |
| Docs | https://www.saltdesignsystem.com |
| Source | https://github.com/jpmorganchase/salt-ds |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 215 | GitHub API (jpmorganchase/salt-ds) |
| GitHub forks | 145 | GitHub API |
| Contributors (incl. anonymous) | 68 | GitHub API |
| Issues closed / open | 2.6k / 157 (94% closed) | GitHub API |
| npm weekly downloads | 11.7k | npm (`@salt-ds/core` 1.74.0) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- you are not that brand. J.P. Morgan identity by default (themeable).
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you rely on agent tooling. This system has few machine-readable resources.

_Hand-written guide for v1, checked against https://github.com/jpmorganchase/salt-ds/blob/main/README.md on 2026-11-05; latest release 1.74.0._

## Install
```bash
npm install @salt-ds/core @salt-ds/theme @salt-ds/lab @salt-ds/icons
```

## Setup
```tsx
import '@salt-ds/theme/index.css';
import { SaltProvider, Button } from '@salt-ds/core';
<SaltProvider mode="light" density="medium">{/* density: 'high' | 'medium' | 'low' | 'touch' */}</SaltProvider>
```

## Agent tips
- Use `density="high"` for trading and data-dense screens; an AG Grid theme is published as `@salt-ds/ag-grid-theme`.
- Salt's identity is J.P. Morgan's by default; theme it before using it for another brand.
- No released MCP server yet: `@salt-ds/mcp` exists on npm only as a snapshot build.

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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked. Notes: AI-readiness 25 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/salt-ds.md_
