---
writtenFor: "9"
written: 2026-11-05
verifiedAgainst: https://mui.com/material-ui/getting-started/installation.md
---
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
