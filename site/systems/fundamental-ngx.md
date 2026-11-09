# SAP Fundamental NGX

> Angular apps that must look like SAP Fiori.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **75/100** |
| Maintainer | SAP (org-backed) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, sap-ecosystem |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 13.8k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-06 |
| Docs | https://sap.github.io/fundamental-ngx/ |
| Source | https://github.com/SAP/fundamental-ngx |
| Same family | [SAP UI5 Web Components](ui5.md), [SAP Fundamental Styles](fundamental-styles.md), [UI5 Web Components for React](ui5-react.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 296 | GitHub API (SAP/fundamental-ngx) |
| GitHub forks | 151 | GitHub API |
| Contributors (incl. anonymous) | 115 | GitHub API |
| Issues closed / open | 5.7k / 113 (98% closed) | GitHub API |
| npm weekly downloads | 24.6k | npm (`@fundamental-ngx/core` 0.66.0) |

## AI resources (use these first)
- **llms.txt:** https://sap.github.io/fundamental-ngx/llms.txt
- **MCP server:**
  - npm package `@fundamental-ngx/mcp`
    ```json
    {"mcpServers":{"fundamental-ngx":{"command":"npx","args":["-y","@fundamental-ngx/mcp"]}}}
    ```
  - in-repo package: https://github.com/SAP/fundamental-ngx/tree/HEAD/libs/docs (see its README for setup)
- **Design tokens:** https://github.com/SAP/fundamental-ngx/blob/HEAD/libs/core/bar/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/SAP/fundamental-ngx/blob/HEAD/.claude/CLAUDE.md

## Consider an alternative if
- you are not building inside the sap ecosystem.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @fundamental-ngx/core
```
Then follow the framework setup in the official getting-started guide: https://sap.github.io/fundamental-ngx/

## Agent tips
- Read https://sap.github.io/fundamental-ngx/llms.txt first. It indexes the official docs in markdown.
- Connect the MCP server listed above before writing code, and use it to look up components and props.
- Design tokens live in the repo (e.g. `libs/core/bar/tokens.ts`). Map brand colours and type onto these rather than hard-coding values.
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

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/fundamental-ngx.md_
