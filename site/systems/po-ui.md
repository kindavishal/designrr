# PO UI

> Angular enterprise and ERP apps (TOTVS).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | TOTVS (org-backed) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, erp |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 14.9k KB |
| License | MIT |
| Last activity | 2026-11-03 |
| Docs | https://po-ui.io |
| Source | https://github.com/po-ui/po-angular |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 1.0k | GitHub API (po-ui/po-angular) |
| GitHub forks | 240 | GitHub API |
| Contributors (incl. anonymous) | 103 | GitHub API |
| Issues closed / open | 520 / 91 (85% closed) | GitHub API |
| npm weekly downloads | 6.0k | npm (`@po-ui/ng-components` 21.36.0) |

## AI resources (use these first)
- **llms.txt:** https://po-ui.io/llms.txt
- **llms-full.txt:** https://po-ui.io/llms-full.txt
- **MCP server:**
  - npm package `@po-ui/mcp`
    ```json
    {"mcpServers":{"po-ui":{"command":"npx","args":["-y","@po-ui/mcp"]}}}
    ```
- **Agent/contributor docs in repo:** https://github.com/po-ui/po-angular/blob/HEAD/.github/instructions/copilot-instructions.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @po-ui/ng-components
```
Then follow the framework setup in the official getting-started guide: https://po-ui.io

## Agent tips
- Read https://po-ui.io/llms.txt first. It indexes the official docs in markdown.
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

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/po-ui.md_
