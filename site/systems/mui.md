# Material UI (MUI)

> React apps and admin tools built on Material Design, with a large component set (including the MUI X data grid).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | MUI (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, saas, dashboard, admin; shapes: saas-app, app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 8.3k KB |
| License | MIT |
| Last activity | 2026-11-05 |
| Docs | https://mui.com/material-ui/ |
| Source | https://github.com/mui/material-ui |
| Same family | [Base UI](base-ui.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 99.3k | GitHub API (mui/material-ui) |
| GitHub forks | 32.5k | GitHub API |
| Contributors (incl. anonymous) | 3.5k | GitHub API |
| Issues closed / open | 19.2k / 1.4k (93% closed) | GitHub API |
| npm weekly downloads | 13.6M | npm (`@mui/material` 9.5.0) |

## AI resources (use these first)
- **llms.txt:** https://mui.com/material-ui/llms.txt
- **MCP server:**
  - npm package `@mui/mcp`
    ```json
    {"mcpServers":{"mui":{"command":"npx","args":["-y","@mui/mcp"]}}}
    ```
- **Agent/contributor docs in repo:** https://github.com/mui/material-ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Hand-written guide for v9, checked against https://mui.com/material-ui/getting-started/installation.md on 2026-11-05; latest release 9.5.0._

## Install
```bash
npm install @mui/material @emotion/react @emotion/styled
# optional: npm install @mui/icons-material @mui/x-data-grid @mui/x-date-pickers @mui/x-charts
```
React 18 or older: also pin `react-is` to your React version (for example `npm install react-is@18.3.1` plus an `overrides` entry in package.json), because Material UI uses `react-is@19`.

## Setup
```tsx
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: { light: true, dark: true },
  palette: { primary: { main: '#4F46E5' } },
  shape: { borderRadius: 10 },
  typography: { fontFamily: 'Inter, sans-serif' },
});
export default function App() { return <ThemeProvider theme={theme}><CssBaseline />{/* app */}</ThemeProvider>; }
```
Next.js App Router: `npm install @mui/material-nextjs @emotion/cache`, then wrap `{children}` in `app/layout.tsx` with `AppRouterCacheProvider` from `@mui/material-nextjs/v15-appRouter` (use the `v1X-appRouter` path that matches your Next.js major).

## Theme it to a brand
All brand decisions go in `createTheme` (palette, typography, shape, `components` overrides). Avoid colour literals in `sx`; use `theme.palette.*` or the generated CSS variables (`var(--mui-palette-primary-main)`).

## Agent tips
- MCP server: `npx -y @mui/mcp@latest`. It gives exact, versioned docs and code samples; prefer it over memory.
- Every docs page has a Markdown twin (append `.md`); the index is `https://mui.com/material-ui/llms.txt`.
- For data-heavy UI use MUI X (Data Grid, Date Pickers, Charts) instead of building tables and pickers by hand.

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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/mui.md_
