## Install
```bash
npx heroui-cli@latest init        # new project
# existing app: npm install @heroui/react framer-motion   (Tailwind required)
```
Follow the Tailwind plugin step in the docs (v4: `@plugin './hero.ts'` in your CSS).

## Setup
```tsx
import { HeroUIProvider } from '@heroui/react';
<HeroUIProvider>{/* app */}</HeroUIProvider>
```

## Theme it to a brand
Themes are defined in the `heroui()` Tailwind plugin (`themes: { light: { colors: { primary: { DEFAULT: '#…' } } } }`).

## Agent tips
- MCP server: `npx -y @heroui/react-mcp` ; docs index at `https://www.heroui.com/llms.txt`.
- Check whether the project is on HeroUI v2 or v3 before copying examples — the APIs differ.
