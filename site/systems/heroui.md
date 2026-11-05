# HeroUI (formerly NextUI)

> Good-looking consumer and SaaS React apps on Tailwind with animations built in.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **95/100** |
| Maintainer | HeroUI |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Good for | consumer, saas, marketing, startup-mvp |
| License | Apache-2.0 |
| GitHub stars | 31.1k |
| npm weekly downloads | 1.2M (`@heroui/react`) |
| Last activity | 2026-10-30 |
| Docs | https://www.heroui.com |
| Source | https://github.com/heroui-inc/heroui |

## AI resources (use these first)
- **llms.txt:** https://www.heroui.com/llms.txt
- **llms-full.txt:** https://www.heroui.com/llms-full.txt
- **MCP server:**
  - npm package `@heroui/react-mcp`
    ```json
    {"mcpServers":{"heroui":{"command":"npx","args":["-y","@heroui/react-mcp"]}}}
    ```
  - in-repo package: https://github.com/heroui-inc/heroui/tree/HEAD/apps/docs (see its README for setup)
- **Design tokens:** https://github.com/heroui-inc/heroui/blob/HEAD/packages/styles/themes/default/variables.css
- **Agent/contributor docs in repo:** https://github.com/heroui-inc/heroui/blob/HEAD/AGENTS.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.

## Install
```bash
npx heroui-cli@latest init        # new project
# existing app: npm install @heroui/react framer-motion   (Tailwind required)
```
Follow the Tailwind plugin step in the docs (v4: `@plugin './hero.ts'` in your CSS).

## Setup
```tsx
import { HeroUIProvider } from '@heroui/react';
<HeroUIProvider>{/* app */}</HeroUIProvider>
```

## Theme it to a brand
Themes are defined in the `heroui()` Tailwind plugin (`themes: { light: { colors: { primary: { DEFAULT: '#…' } } } }`).

## Agent tips
- MCP server: `npx -y @heroui/react-mcp` ; docs index at `https://www.heroui.com/llms.txt`.
- Check whether the project is on HeroUI v2 or v3 before copying examples — the APIs differ.

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
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/heroui.md_
