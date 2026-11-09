# HeroUI (formerly NextUI)

> Consumer and SaaS React apps on Tailwind, with animations built in.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **85/100** |
| Maintainer | HeroUI |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | consumer, saas, marketing, startup-mvp; shapes: saas-app, marketing-site |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 936 KB |
| License | Apache-2.0 |
| Last activity | 2026-11-06 |
| Docs | https://www.heroui.com |
| Source | https://github.com/heroui-inc/heroui |
| Same family | [HeroUI Native](heroui-native.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 31.2k | GitHub API (heroui-inc/heroui) |
| GitHub forks | 2.2k | GitHub API |
| Contributors (incl. anonymous) | 248 | GitHub API |
| Issues closed / open | 2.9k / 7 (100% closed) | GitHub API |
| npm weekly downloads | 1.2M | npm (`@heroui/react` 3.2.7) |

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
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v3, checked against https://heroui.com/docs/react/getting-started/quick-start.mdx on 2026-11-05; latest release 3.2.7._

## Install
Requires React 19+ and Tailwind CSS v4 (set Tailwind up first with its framework guide).
```bash
npm i @heroui/styles @heroui/react
```
In your main Tailwind CSS file, import HeroUI right after Tailwind (order matters):
```css
@import "tailwindcss";
@import "@heroui/styles";
```

## Setup
No provider is needed in v3. Import components and use them:
```tsx
import { Button } from '@heroui/react';
export function App() { return <Button>My Button</Button>; }
```
Built on React Aria Components; components are composed from parts (for example `Card.Header`).

## Theme it to a brand
Themes are CSS variables on top of Tailwind v4's `@theme`. Set `class="light" data-theme="light"` (or `dark`) on `<html>`, and override semantic variables such as `--accent` and `--success` in `:root`, or under your own `[data-theme="brand"]` selector.

## Agent tips
- MCP server: `npx -y @heroui/react-mcp@latest`. HeroUI's own docs tell agents to treat the MCP as the source of truth for install steps and versions.
- v3 is a rewrite: v2 APIs (`HeroUIProvider`, the `heroui()` Tailwind plugin) no longer apply. The migration guide for agents is `https://heroui.com/en/docs/react/migration/agent-index`.
- Docs index: `https://www.heroui.com/llms.txt`; pages have `.mdx` source versions.

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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/heroui.md_
