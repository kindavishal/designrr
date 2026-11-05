# Primer

> Developer tools and GitHub-like interfaces.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **70/100** |
| Maintainer | GitHub (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css-modules |
| Good for | devtools, saas, content |
| License | MIT |
| GitHub stars | 3.9k |
| npm weekly downloads | 61.1k (`@primer/react`) |
| Last activity | 2026-11-04 |
| Docs | https://primer.style |
| Source | https://github.com/primer/react |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - npm package `@primer/mcp`
    ```json
    {"mcpServers":{"primer":{"command":"npx","args":["-y","@primer/mcp"]}}}
    ```
  - in-repo package: https://github.com/primer/react/tree/HEAD/packages/mcp (see its README for setup)
- **Design tokens:** https://github.com/primer/react/blob/HEAD/packages/react/src/Token/IssueLabelToken.module.css
- **Agent/contributor docs in repo:** https://github.com/primer/react/blob/HEAD/.agents/skills/agentic-workflows/SKILL.md
- **Figma Code Connect:** yes — Figma components map to code.


## Install
```bash
npm install @primer/react @primer/primitives styled-components
```

## Setup
```tsx
import { ThemeProvider, BaseStyles } from '@primer/react';
import '@primer/primitives/dist/css/functional/themes/light.css';
<ThemeProvider colorMode="auto"><BaseStyles>{/* app */}</BaseStyles></ThemeProvider>
```

## Agent tips
- MCP server: `npx -y @primer/mcp` — component and token lookup for agents.
- Use `@primer/primitives` CSS variables (`var(--fgColor-default)`) for any custom styling.
- Rails apps: Primer ViewComponents (`primer_view_components` gem).

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

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/primer.md_
