# Material UI (MUI)

> Feature-rich React apps and admin tools that benefit from Material Design and a huge component set (incl. MUI X data grid).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | MUI (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Good for | enterprise, saas, dashboard, admin |
| License | MIT |
| GitHub stars | 99.3k |
| npm weekly downloads | 13.6M (`@mui/material`) |
| Last activity | 2026-11-03 |
| Docs | https://mui.com/material-ui/ |
| Source | https://github.com/mui/material-ui |

## AI resources (use these first)
- **llms.txt:** https://mui.com/material-ui/llms.txt
- **MCP server:**
  - npm package `@mui/mcp`
    ```json
    {"mcpServers":{"mui":{"command":"npx","args":["-y","@mui/mcp"]}}}
    ```
- **Agent/contributor docs in repo:** https://github.com/mui/material-ui/blob/HEAD/.agents/skills/material-ui-review/SKILL.md

## Consider an alternative if
- you need zero-runtime styling or heavy React Server Components use — check the docs for RSC support.

## Install
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
# optional: npm install @mui/x-data-grid @mui/x-date-pickers @mui/x-charts
```

## Setup
```tsx
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
const theme = createTheme({ cssVariables: true, colorSchemes: { light: true, dark: true },
  palette: { primary: { main: '#4F46E5' } }, shape: { borderRadius: 10 },
  typography: { fontFamily: 'Inter, sans-serif' } });
export default function App() { return <ThemeProvider theme={theme}><CssBaseline />{/* app */}</ThemeProvider>; }
```
Next.js App Router: also install `@mui/material-nextjs` and wrap in `AppRouterCacheProvider`.

## Theme it to a brand
All brand decisions go in `createTheme` (palette, typography, shape, `components` overrides). Avoid per-component `sx` colour literals — use `theme.palette.*`.

## Agent tips
- Add the MCP server: `npx -y @mui/mcp@latest` — gives exact, versioned docs and code samples.
- Read `https://mui.com/material-ui/llms.txt` for the component index.
- Data-heavy UI: MUI X Data Grid (MIT tier) instead of building tables by hand.

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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/mui.md_
