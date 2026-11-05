# Ark UI

> Headless, state-machine-based components across React, Vue, Solid and Svelte.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **80/100** |
| Maintainer | Chakra UI |
| Platforms | web |
| Frameworks | react, vue, solid, svelte |
| Styling | headless (headless) |
| Good for | custom-brand |
| License | MIT |
| GitHub stars | 5.5k |
| npm weekly downloads | 1.4M (`@ark-ui/react`) |
| Last activity | 2026-11-04 |
| Docs | https://ark-ui.com |
| Source | https://github.com/chakra-ui/ark |

## AI resources (use these first)
- **llms.txt:** https://ark-ui.com/llms.txt
- **llms-full.txt:** https://ark-ui.com/llms-full.txt
- **MCP server:**
  - npm package `@ark-ui/mcp`
    ```json
    {"mcpServers":{"ark-ui":{"command":"npx","args":["-y","@ark-ui/mcp"]}}}
    ```
  - in-repo package: https://github.com/chakra-ui/ark/tree/HEAD/packages/mcp (see its README for setup)
- **Design tokens:** https://github.com/chakra-ui/ark/blob/HEAD/website/src/theme/tokens
- **Agent/contributor docs in repo:** https://github.com/chakra-ui/ark/blob/HEAD/.cursor/rules/solid-js.mdc

## Consider an alternative if
- you want a finished visual style out of the box — this is headless; you supply all styling.

## Install
```bash
npm install @ark-ui/react
```
Then follow the framework setup in the official getting-started guide: https://ark-ui.com

## Agent tips
- Read https://ark-ui.com/llms.txt first — it indexes the official docs in markdown.
- Connect the MCP server listed above before writing code; use it to look up components and props.
- Design tokens live in the repo (e.g. `website/src/theme/tokens`); map brand colours/typography onto these rather than hard-coding values.
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
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/ark-ui.md_
