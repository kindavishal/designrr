---
writtenFor: "9"
written: 2026-11-05
verifiedAgainst: https://mantine.dev/llms/getting-started.md
---
## Install
Quickest: start from an official template (Next.js or Vite) on mantine.dev. Existing app:
```bash
npm install @mantine/core @mantine/hooks
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
# extras as needed: @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/charts recharts
```
Create `postcss.config.cjs` with the `postcss-preset-mantine` and `postcss-simple-vars` plugins (breakpoint variables are listed in the getting-started guide).

## Setup
```tsx
import '@mantine/core/styles.css';   // once, at the root; other packages have their own styles.css
import { MantineProvider, createTheme } from '@mantine/core';
const theme = createTheme({ primaryColor: 'indigo', fontFamily: 'Inter, sans-serif', defaultRadius: 'md' });
export function App() { return <MantineProvider theme={theme} defaultColorScheme="auto">{/* app */}</MantineProvider>; }
```
With SSR (Next.js etc.): put `<ColorSchemeScript />` in `<head>` and spread `mantineHtmlProps` on `<html>` to avoid hydration warnings.

## Theme it to a brand
Everything goes through `createTheme`: `colors` (10-shade tuples), `primaryColor`, `fontFamily`, `headings`, `radius`, `spacing`, and per-component `components` defaults. Style custom parts with CSS modules and Mantine's CSS variables.

## Agent tips
- MCP server: `npx -y @mantine/mcp-server`. Docs index for LLMs: `https://mantine.dev/llms.txt` (every page has a Markdown twin under `/llms/`).
- Prefer Mantine's own `AppShell`, `useForm`, `notifications` and `@mantine/dates` over third-party libraries to keep one visual language.
- Create React App is not supported for new projects; use Vite or Next.js.
