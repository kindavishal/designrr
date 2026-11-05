## Install
```bash
npm install @primer/react @primer/primitives styled-components
```

## Setup
```tsx
import { ThemeProvider, BaseStyles } from '@primer/react';
import '@primer/primitives/dist/css/functional/themes/light.css';
<ThemeProvider colorMode="auto"><BaseStyles>{/* app */}</BaseStyles></ThemeProvider>
```

## Agent tips
- MCP server: `npx -y @primer/mcp` — component and token lookup for agents.
- Use `@primer/primitives` CSS variables (`var(--fgColor-default)`) for any custom styling.
- Rails apps: Primer ViewComponents (`primer_view_components` gem).
