## Install
```bash
npm install @salt-ds/core @salt-ds/theme @salt-ds/icons @salt-ds/lab
```

## Setup
```tsx
import '@salt-ds/theme/index.css';
import { SaltProvider } from '@salt-ds/core';
<SaltProvider mode="light" density="medium">{/* app */}</SaltProvider>
```

## Agent tips
- `density="high"` for trading / data-dense screens; AG Grid theme available (`@salt-ds/ag-grid-theme`).
- MCP server: `@salt-ds/mcp`.
