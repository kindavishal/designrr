# Taiga UI

> Taiga UI by T-Bank.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **80/100** |
| Maintainer | T-Bank (org-backed) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Good for | fintech, enterprise |
| License | Apache-2.0 |
| GitHub stars | 4.1k |
| npm weekly downloads | 0 (`@taiga-ui/core`) |
| Last activity | 2026-11-03 |
| Docs | https://taiga-ui.dev |
| Source | https://github.com/taiga-family/taiga-ui |

## AI resources (use these first)
- **llms.txt:** https://taiga-ui.dev/llms.txt
- **llms-full.txt:** https://taiga-ui.dev/llms-full.txt
- **MCP server:**
  - npm package `@taiga-ui/mcp`
    ```json
    {"mcpServers":{"taiga-ui":{"command":"npx","args":["-y","@taiga-ui/mcp"]}}}
    ```
- **Design tokens:** https://github.com/taiga-family/taiga-ui/blob/HEAD/projects/addon-commerce/tokens/currency-symbols.ts
- **Agent/contributor docs in repo:** https://github.com/taiga-family/taiga-ui/blob/HEAD/.github/copilot-instructions.md


## Install
```bash
ng add taiga-ui
```

## Agent tips
- MCP server: `@taiga-ui/mcp` for component docs and examples.
- Theme through CSS variables (`--tui-background-accent-1`, …).

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
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/taiga-ui.md_
