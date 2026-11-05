---
writtenFor: "1"
written: 2026-11-05
---
## Install
```bash
npm install @carbon/react sass
```

## Setup
```scss
// index.scss
@use '@carbon/react';
```
```tsx
import { Theme, Button } from '@carbon/react';
<Theme theme="white">{/* white | g10 | g90 | g100 */}</Theme>
```

## Theme it to a brand
Carbon is intentionally opinionated; customise via Sass theme tokens (`@use '@carbon/react/scss/themes' with (...)`) and `@carbon/styles` token overrides, not ad-hoc CSS.

## Agent tips
- Tokens are published as `@carbon/themes` / `@carbon/colors` packages (JSON + Sass).
- Use the UI Shell components (`Header`, `SideNav`) for app chrome and `DataTable` for tables.
- Web Components version: `@carbon/web-components`.
