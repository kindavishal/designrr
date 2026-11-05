## Install
```bash
npm create tamagui@latest          # starter monorepo: Expo + Next.js sharing UI
# existing: npm install tamagui @tamagui/config
```

## Setup
```tsx
import { TamaguiProvider, createTamagui } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
const config = createTamagui(defaultConfig);
<TamaguiProvider config={config} defaultTheme="light">{/* app */}</TamaguiProvider>
```

## Agent tips
- Tokens and themes are typed in the config — use `$tokens` (`bg="$background"`, `p="$4"`) not raw values.
- Add the compiler plugin (Next/Vite/Metro) for production performance.
