---
writtenFor: "5"
written: 2026-11-05
---
## Install
```bash
npm install react-native-paper react-native-safe-area-context
# Expo: npx expo install react-native-paper react-native-safe-area-context
```

## Setup
```tsx
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
const theme = { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, primary: '#4F46E5' } };
<PaperProvider theme={theme}>{/* app */}</PaperProvider>
```

## Agent tips
- Generate full MD3 colour schemes from one brand colour with Material Theme Builder and paste into `colors`.
- Pair with React Navigation; Paper provides themed navigation adapters.
