---
writtenFor: "3"
written: 2026-11-05
verifiedAgainst: https://chakra-ui.com/llms-full.txt
---
## Install
Requires Node.js 20+. Framework guides exist for Next.js and Vite.
```bash
npm i @chakra-ui/react @emotion/react
npx @chakra-ui/cli snippet add      # adds the Provider, color-mode and other snippets to your repo
```

## Setup
Wrap the app with the generated provider (it composes `ChakraProvider` and `next-themes` for colour mode):
```tsx
import { Provider } from '@/components/ui/provider';
export default function RootLayout({ children }) {
  return <html suppressHydrationWarning><body><Provider>{children}</Provider></body></html>;
}
```

## Theme it to a brand
```ts
import { createSystem, defaultConfig } from '@chakra-ui/react';
export const system = createSystem(defaultConfig, {
  theme: { tokens: { fonts: { heading: { value: "'Figtree', sans-serif" }, body: { value: "'Figtree', sans-serif" } } } },
});
```
Pass it to `ChakraProvider value={system}` inside the provider, and run `npx @chakra-ui/cli typegen src/theme.ts` for typed tokens. Token values are always wrapped in `{ value: … }`.

## Agent tips
- MCP server: `npx -y @chakra-ui/react-mcp`.
- LLM docs: `https://chakra-ui.com/llms.txt` links to focused files (components, styling, theming, v3 migration). v3 differs from v2; don't use v2 examples.
- Chakra still uses Emotion at runtime today; check the docs before relying on zero-runtime styling.
