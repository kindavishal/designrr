---
writtenFor: "3"
written: 2026-11-05
verifiedAgainst: https://www.radix-ui.com/themes/docs/overview/getting-started.md
---
## Install
```bash
npm install @radix-ui/themes
```

## Setup
```tsx
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default function Root() {
  return <html><body><Theme><MyApp /></Theme></body></html>;
}
```

## Theme it to a brand
Configure the `Theme`: `<Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">`. During development, drop `<ThemePanel />` inside `Theme` to preview settings live (remove it before shipping).

## Agent tips
- Layout with `Flex`, `Grid`, `Box`, `Container` and `Section` and their responsive props; no Tailwind needed.
- Docs pages have Markdown versions (append `.md`, for example `…/themes/docs/overview/getting-started.md`). There is no llms.txt index.
