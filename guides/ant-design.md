---
writtenFor: "6"
written: 2026-11-05
verifiedAgainst: https://ant.design/docs/react/getting-started.md
---
## Install
```bash
npm install antd @ant-design/icons
# Next.js App Router: npm install @ant-design/nextjs-registry
```
antd 6 needs React 18 or newer and `@ant-design/icons` 6 (icons 6 does not work with antd 5).

## Setup
```tsx
import { ConfigProvider, App as AntApp, theme } from 'antd';
<ConfigProvider theme={{
  token: { colorPrimary: '#1677ff', borderRadius: 8, fontFamily: 'Inter' },
  algorithm: theme.defaultAlgorithm, // or theme.darkAlgorithm, theme.compactAlgorithm, or an array of them
}}>
  <AntApp>{/* app */}</AntApp>
</ConfigProvider>
```
Next.js App Router: wrap `{children}` in `app/layout.tsx` with `<AntdRegistry>` from `@ant-design/nextjs-registry`.

## Theme it to a brand
Global design tokens in `token`, per-component tokens in `components: { Button: { … } }`. Use `compactAlgorithm` for dense back-office screens.

## Agent tips
- antd 6 changed and deprecated many props (for example `Alert` `message` → `title`, `closeText` → `closable`). Don't trust v5 examples from memory.
- MCP server via the official CLI: `npx -y @ant-design/cli mcp`. The CLI also works offline: `antd info Button`, `antd doc Button`, `antd token DatePicker`.
- Agent skill: `npx skills add ant-design/ant-design-cli`. Docs for agents: `https://ant.design/docs/react/for-agents.md` and `https://ant.design/llms.txt`.
- For admin apps use ProComponents (`@ant-design/pro-components`): ProTable, ProForm and ProLayout save a lot of code.
