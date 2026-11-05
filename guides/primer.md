---
writtenFor: "38"
written: 2026-11-05
verifiedAgainst: https://primer.style/product/getting-started/react
---
## Install
```bash
npm install @primer/react @primer/primitives react react-dom
```
Primer React no longer needs styled-components.

## Setup
```tsx
import '@primer/primitives/dist/css/functional/themes/light.css';   // import each theme you use
import { BaseStyles, ThemeProvider } from '@primer/react';

export function RootLayout() {
  return <ThemeProvider><BaseStyles><App /></BaseStyles></ThemeProvider>;
}
```
For GitHub.com-style base element styling, also import `@primer/css/dist/primer.css`. Wrap rendered Markdown in `className="markdown-body"`.

## Theme it to a brand
Primer is GitHub's identity; customise through the Primer Primitives CSS variables (`var(--fgColor-default)`, `var(--bgColor-default)`, …) rather than hard-coded colours.

## Agent tips
- MCP server: `npx -y @primer/mcp` for component and token lookup.
- Rails apps: Primer ViewComponents (`primer_view_components` gem). Plain HTML: Primer CSS.
