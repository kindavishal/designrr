---
writtenFor: "5"
written: 2026-11-05
verifiedAgainst: https://callstack.github.io/react-native-paper/docs/guides/getting-started.md
---
## Install
```bash
npm install react-native-paper react-native-safe-area-context
npm install @react-native-vector-icons/material-design-icons
npx pod-install      # iOS, bare React Native only
```
Optional, smaller production bundles: add `react-native-paper/babel` to the production `plugins` in your Babel config.

## Setup
```tsx
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
const theme = { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, primary: '#4F46E5' } };
<PaperProvider theme={theme}>{/* app */}</PaperProvider>
```

## Theme it to a brand
Generate a full Material 3 colour scheme from one brand colour (the theming guide links a generator) and paste it into `colors`; use `MD3DarkTheme` as the base for dark mode.

## Agent tips
- Pair with React Navigation; the docs cover theming navigation together with Paper.
- LLM index: `https://callstack.github.io/react-native-paper/llms.txt`; every page has a `.md` version.
