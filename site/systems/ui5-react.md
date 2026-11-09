# UI5 Web Components for React

> SAP Fiori-compliant React apps.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **50/100** |
| Maintainer | SAP (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | web-components |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, erp, data-dense, sap-ecosystem |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 5.6k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-05 |
| Docs | https://sap.github.io/ui5-webcomponents-react/ |
| Source | https://github.com/UI5/webcomponents-react |
| Same family | [SAP Fundamental NGX](fundamental-ngx.md), [SAP UI5 Web Components](ui5.md), [SAP Fundamental Styles](fundamental-styles.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 542 | GitHub API (UI5/webcomponents-react) |
| GitHub forks | 114 | GitHub API |
| Contributors (incl. anonymous) | 53 | GitHub API |
| Issues closed / open | 1.6k / 10 (99% closed) | GitHub API |
| npm weekly downloads | 59.2k | npm (`@ui5/webcomponents-react` 2.28.2) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - in-repo package: https://github.com/UI5/webcomponents-react/tree/HEAD/packages/mcp-server (see its README for setup)
- **Agent/contributor docs in repo:** https://github.com/UI5/webcomponents-react/blob/HEAD/CLAUDE.md

## Consider an alternative if
- you are not building inside the sap ecosystem.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @ui5/webcomponents-react
```
Then follow the framework setup in the official getting-started guide: https://sap.github.io/ui5-webcomponents-react/

## Agent tips
- Connect the MCP server listed above before writing code, and use it to look up components and props.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

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
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/ui5-react.md_
