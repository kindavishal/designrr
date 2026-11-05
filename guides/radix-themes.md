---
writtenFor: "3"
written: 2026-11-05
---
## Install
```bash
npm install @radix-ui/themes
```

## Setup
```tsx
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
<Theme accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">{/* app */}</Theme>
```

## Agent tips
- Layout with `Flex`, `Grid`, `Box`, `Container`, `Section` and their responsive props; no Tailwind needed.
- Theme panel (`<ThemePanel />`) helps pick settings during development; remove before shipping.
