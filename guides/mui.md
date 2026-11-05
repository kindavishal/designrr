---
writtenFor: "7"
written: 2026-11-05
---
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
