---
writtenFor: "3"
written: 2026-11-05
verifiedAgainst: https://tamagui.dev/llms.txt
---
## Install
New cross-platform app (Expo + Next.js starter):
```bash
npm create tamagui@latest
```
Existing app:
```bash
npm install tamagui @tamagui/config
```

## Setup
```tsx
// tamagui.config.ts
import { defaultConfig } from '@tamagui/config/v6';
import { createTamagui } from 'tamagui';
export const config = createTamagui(defaultConfig);
```
```tsx
import { TamaguiProvider } from 'tamagui';
import { config } from './tamagui.config';
<TamaguiProvider config={config} defaultTheme="light">{/* app */}</TamaguiProvider>
```
Import `tamagui.config.ts` in one place near the root.

## Theme it to a brand
Tokens and themes are typed in the config: use `$tokens` (`bg="$background"`, `p="$4"`), never raw values. `@tamagui/config/v6` provides sensible settings, themes and fonts; override parts of it rather than starting from zero.

## Agent tips
- Add the optimising compiler for production web builds: `npm i -D @tamagui/cli` and `tamaguiPlugin()` from `@tamagui/cli/vite` (equivalents exist for Next.js and Metro).
- Animations are pluggable drivers (CSS, Reanimated, Motion) configured in `createTamagui`.
- The full docs are a single LLM file at `https://tamagui.dev/llms.txt` (very large; search it rather than reading it whole).
