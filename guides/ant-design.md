## Install
```bash
npm install antd @ant-design/icons
# Next.js App Router: npm install @ant-design/nextjs-registry
```

## Setup
```tsx
import { ConfigProvider, App as AntApp, theme } from 'antd';
<ConfigProvider theme={{ token: { colorPrimary: '#1677ff', borderRadius: 8, fontFamily: 'Inter' },
  algorithm: theme.defaultAlgorithm /* or theme.darkAlgorithm / compactAlgorithm */ }}>
  <AntApp>{/* app */}</AntApp>
</ConfigProvider>
```

## Theme it to a brand
Design tokens (`token`) for globals, `components: { Button: { … } }` for per-component tokens. `compactAlgorithm` for dense back-office screens.

## Agent tips
- Read `https://ant.design/llms.txt` (and `llms-full.txt`) — official, per-component markdown docs.
- For admin apps use ProComponents (`@ant-design/pro-components`): ProTable, ProForm, ProLayout save a lot of code.
- Use `Form` with `rules` for validation rather than custom state.
