# Mantine

> Full-featured React apps needing 100+ components plus hooks, forms, dates, charts and notifications out of the box.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **85/100** |
| Maintainer | Mantine |
| Platforms | web |
| Frameworks | react |
| Styling | css-modules |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | saas, dashboard, admin, startup-mvp; shapes: saas-app, app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 9.8k KB |
| License | MIT |
| GitHub stars | 31.9k |
| npm weekly downloads | 3.5M (`@mantine/core` 9.7.5) |
| Last activity | 2026-11-04 |
| Docs | https://mantine.dev |
| Source | https://github.com/mantinedev/mantine |

## AI resources (use these first)
- **llms.txt:** https://mantine.dev/llms.txt
- **llms-full.txt:** https://mantine.dev/llms-full.txt
- **MCP server:**
  - in-repo package: https://github.com/mantinedev/mantine/tree/HEAD/packages/@mantine/mcp-server (see its README for setup)
- **Design tokens:** https://github.com/mantinedev/mantine/blob/HEAD/apps/mantine.dev/src/styles/variables.css
- **Agent/contributor docs in repo:** https://github.com/mantinedev/mantine/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you copy the build guide verbatim. It was written for v8; the latest release is 9.7.5, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v8; latest release 9.7.5._

## Install
```bash
npm install @mantine/core @mantine/hooks
# extras as needed: @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/charts recharts @mantine/modals
```
Requires `postcss-preset-mantine` + `postcss-simple-vars` (see Getting started) and `import '@mantine/core/styles.css'`.

## Setup
```tsx
import { MantineProvider, createTheme } from '@mantine/core';
const theme = createTheme({ primaryColor: 'indigo', fontFamily: 'Inter, sans-serif', defaultRadius: 'md' });
<MantineProvider theme={theme} defaultColorScheme="auto">{/* app */}</MantineProvider>
```
Next.js: add `ColorSchemeScript` in `<head>`.

## Agent tips
- Read `https://mantine.dev/llms.txt`; Mantine also publishes an MCP server (`@mantine/mcp-server`).
- Prefer Mantine's own `AppShell`, `useForm`, `notifications` over third-party libs — it keeps one visual language.

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

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/mantine.md_
