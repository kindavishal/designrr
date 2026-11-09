# Primer CSS

> GitHub's look as plain CSS classes; developer tools and content sites without a framework.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **35/100** |
| Maintainer | GitHub (org-backed) |
| Platforms | web |
| Frameworks | any, vanilla |
| Styling | css |
| Install | CDN link or npm; no build step needed |
| Good for | devtools, content, framework-agnostic; shapes: content-site, saas-app |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 6.6k KB |
| License | MIT |
| Last activity | 2026-11-04 |
| Docs | https://primer.style/css |
| Source | https://github.com/primer/css |
| Same family | [Primer](primer.md), [Primer Primitives (tokens)](primer-primitives.md), [Primer ViewComponents](primer-view-components.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 13.1k | GitHub API (primer/css) |
| GitHub forks | 1.3k | GitHub API |
| Contributors (incl. anonymous) | 204 | GitHub API |
| Issues closed / open | 524 / 2 (100% closed) | GitHub API |
| npm weekly downloads | 56.9k | npm (`@primer/css` 22.3.3) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@primer/mcp`
    ```json
    {"mcpServers":{"primer-css":{"command":"npx","args":["-y","@primer/mcp"]}}}
    ```


_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
No build step needed. From the CDN (pinned to the current release):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@primer/css@22.3.3/dist/primer.min.css">
```
Check the docs for the recommended files: https://primer.style/css
```bash
npm install @primer/css
```
Then follow the framework setup in the official getting-started guide: https://primer.style/css

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
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 0/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked. Notes: AI-readiness 35 < 45.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/primer-css.md_
