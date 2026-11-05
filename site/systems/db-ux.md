# DB UX Design System

> DB UX Design System by Deutsche Bahn.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **70/100** |
| Maintainer | Deutsche Bahn (org-backed) |
| Platforms | web |
| Frameworks | react, vue, angular, web-components |
| Styling | css |
| Good for | transport, consumer, enterprise |
| License | NOASSERTION |
| GitHub stars | 137 |
| npm weekly downloads | 2.6k (`@db-ux/core-components`) |
| Last activity | 2026-11-05 |
| Docs | https://design-system.deutschebahn.com |
| Source | https://github.com/db-ux-design-system/core-web |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@db-ux/mcp-server`
    ```json
    {"mcpServers":{"db-ux":{"command":"npx","args":["-y","@db-ux/mcp-server"]}}}
    ```
  - in-repo package: https://github.com/db-ux-design-system/core-web/tree/HEAD/packages/mcp-server (see its README for setup)
- **Design tokens:** https://github.com/db-ux-design-system/core-web/blob/HEAD/packages/mcp-server/src/tools/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/db-ux-design-system/core-web/blob/HEAD/.github/copilot-instructions.md
- **Figma Code Connect:** yes — Figma components map to code.


## Install
```bash
npm install @db-ux/core-components
```
Then follow the framework setup in the official getting-started guide: https://design-system.deutschebahn.com

## Agent tips
- Connect the MCP server listed above before writing code; use it to look up components and props.
- Design tokens live in the repo (e.g. `packages/mcp-server/src/tools/tokens.ts`); map brand colours/typography onto these rather than hard-coding values.
- Web components work in any framework; in React 19+ they can be used directly, older React may need wrappers.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

## Build checklist (any system)
1. **Install & provider** — follow the install section exactly for the detected framework and version.
2. **Brand → tokens** — set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first** — build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components** — map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States** — loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility** — keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness** — enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify** — run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 5/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/db-ux.md_
