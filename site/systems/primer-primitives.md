# Primer Primitives (tokens)

> Design tokens only: Primer colour, size and typography as CSS variables / JSON.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | GitHub (org-backed) |
| Platforms | web |
| Frameworks | any |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | tokens |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 56.2k KB |
| License | MIT |
| GitHub stars | 417 |
| npm weekly downloads | 114.8k (`@primer/primitives` 11.10.0) |
| Last activity | 2026-11-02 |
| Docs | https://primer.style/primitives |
| Source | https://github.com/primer/primitives |
| Same family | [Primer](primer.md), [Primer ViewComponents](primer-view-components.md), [Primer CSS](primer-css.md) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@primer/mcp`
    ```json
    {"mcpServers":{"primer-primitives":{"command":"npx","args":["-y","@primer/mcp"]}}}
    ```
- **Design tokens:** https://github.com/primer/primitives/blob/HEAD/src/tokens/removed.json
- **Agent/contributor docs in repo:** https://github.com/primer/primitives/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @primer/primitives
```
Then follow the framework setup in the official getting-started guide: https://primer.style/primitives

## Agent tips
- Connect the MCP server listed above before writing code, and use it to look up components and props.
- Design tokens live in the repo (e.g. `src/tokens/removed.json`). Map brand colours and type onto these rather than hard-coding values.
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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/primer-primitives.md_
