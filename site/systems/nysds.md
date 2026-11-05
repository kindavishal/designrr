# New York State Design System

> New York State Design System by New York State ITS.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **70/100** |
| Maintainer | New York State ITS (org-backed) |
| Platforms | web |
| Frameworks | web-components |
| Styling | web-components |
| Good for | government, public-service |
| License | NOASSERTION |
| GitHub stars | 55 |
| npm weekly downloads | 0 (`@nysds/components`) |
| Last activity | 2026-11-02 |
| Docs | https://designsystem.ny.gov |
| Source | https://github.com/ITS-HCD/nysds |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@nysds/mcp-server`
    ```json
    {"mcpServers":{"nysds":{"command":"npx","args":["-y","@nysds/mcp-server"]}}}
    ```
  - in-repo package: https://github.com/ITS-HCD/nysds/tree/HEAD/packages/mcp-server (see its README for setup)
- **Design tokens:** https://github.com/ITS-HCD/nysds/blob/HEAD/packages/mcp-server/src/resources/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/ITS-HCD/nysds/blob/HEAD/.claude/CLAUDE.md
- **Figma Code Connect:** yes — Figma components map to code.

## Consider an alternative if
- you are building a commercial or non-government product — government systems are designed (and sometimes licensed) for public services.

## Install
```bash
npm install @nysds/components
```
Then follow the framework setup in the official getting-started guide: https://designsystem.ny.gov

## Agent tips
- Connect the MCP server listed above before writing code; use it to look up components and props.
- Design tokens live in the repo (e.g. `packages/mcp-server/src/resources/tokens.ts`); map brand colours/typography onto these rather than hard-coding values.
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

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/nysds.md_
