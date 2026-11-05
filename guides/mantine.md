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
