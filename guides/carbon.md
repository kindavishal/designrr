---
writtenFor: "1"
written: 2026-11-05
verifiedAgainst: https://github.com/carbon-design-system/carbon/blob/main/packages/react/README.md
---
## Install
```bash
npm install @carbon/react
npm install sass
```

## Setup
```scss
// index.scss: all component styles (or @use '@carbon/react/scss/components/button' for one)
@use '@carbon/react';
```
```tsx
import { Theme, Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';

<Theme theme="white">{/* 'white' | 'g10' | 'g90' | 'g100' */}
  <Button renderIcon={Add}>Create</Button>
</Theme>
```
`Theme` can wrap the whole app or a single region (for example a dark `g100` header on a `white` page).

## Theme it to a brand
Carbon is intentionally opinionated: pick one of the four themes and customise through its Sass theme tokens rather than ad-hoc CSS.

## Agent tips
- Carbon MCP (hosted): `https://mcp.carbondesignsystem.com/mcp` (streamable HTTP). It requires signing in with an IBMid. A "Carbon Builder" agent skill is published in the carbon-mcp repository.
- Docs index for LLMs: `https://carbondesignsystem.com/llms.txt`.
- Use the UI Shell components (`Header`, `SideNav`) for app chrome and `DataTable` for tables. Web Components version: `@carbon/web-components`.
