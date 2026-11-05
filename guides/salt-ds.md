---
writtenFor: "1"
written: 2026-11-05
verifiedAgainst: https://github.com/jpmorganchase/salt-ds/blob/main/README.md
---
## Install
```bash
npm install @salt-ds/core @salt-ds/theme @salt-ds/lab @salt-ds/icons
```

## Setup
```tsx
import '@salt-ds/theme/index.css';
import { SaltProvider, Button } from '@salt-ds/core';
<SaltProvider mode="light" density="medium">{/* density: 'high' | 'medium' | 'low' | 'touch' */}</SaltProvider>
```

## Agent tips
- Use `density="high"` for trading and data-dense screens; an AG Grid theme is published as `@salt-ds/ag-grid-theme`.
- Salt's identity is J.P. Morgan's by default; theme it before using it for another brand.
- No released MCP server yet: `@salt-ds/mcp` exists on npm only as a snapshot build.
