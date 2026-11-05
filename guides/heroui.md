---
writtenFor: "3"
written: 2026-11-05
verifiedAgainst: https://heroui.com/docs/react/getting-started/quick-start.mdx
---
## Install
Requires React 19+ and Tailwind CSS v4 (set Tailwind up first with its framework guide).
```bash
npm i @heroui/styles @heroui/react
```
In your main Tailwind CSS file, import HeroUI right after Tailwind (order matters):
```css
@import "tailwindcss";
@import "@heroui/styles";
```

## Setup
No provider is needed in v3. Import components and use them:
```tsx
import { Button } from '@heroui/react';
export function App() { return <Button>My Button</Button>; }
```
Built on React Aria Components; components are composed from parts (for example `Card.Header`).

## Theme it to a brand
Themes are CSS variables on top of Tailwind v4's `@theme`. Set `class="light" data-theme="light"` (or `dark`) on `<html>`, and override semantic variables such as `--accent` and `--success` in `:root`, or under your own `[data-theme="brand"]` selector.

## Agent tips
- MCP server: `npx -y @heroui/react-mcp@latest`. HeroUI's own docs tell agents to treat the MCP as the source of truth for install steps and versions.
- v3 is a rewrite: v2 APIs (`HeroUIProvider`, the `heroui()` Tailwind plugin) no longer apply. The migration guide for agents is `https://heroui.com/en/docs/react/migration/agent-index`.
- Docs index: `https://www.heroui.com/llms.txt`; pages have `.mdx` source versions.
