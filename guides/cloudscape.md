---
writtenFor: "3"
written: 2026-11-05
verifiedAgainst: https://cloudscape.design/get-started/for-developers/using-cloudscape-components/index.html.md
---
## Install
```bash
npm install @cloudscape-design/global-styles @cloudscape-design/components
```

## Setup
```tsx
import '@cloudscape-design/global-styles/index.css';
import Button from '@cloudscape-design/components/button';   // per-component imports
import AppLayout from '@cloudscape-design/components/app-layout';
```
Colour mode and density:
```ts
import { applyMode, applyDensity, Mode, Density } from '@cloudscape-design/global-styles';
applyMode(Mode.Dark);
applyDensity(Density.Compact);
```

## Theme it to a brand
Limited by design: `applyTheme({ theme, selector: 'body' })` from `@cloudscape-design/components/theming` (needs a CSP that allows inline styles), or `generateThemeStylesheet` for build-time CSS.

## Agent tips
- Cloudscape's docs are built for agents: `https://cloudscape.design/llms.txt`, a Markdown version of every page (`…/index.html.md`) and machine-readable component APIs (`https://cloudscape.design/components/index.html.json`, or per component).
- Use the documented patterns (create resource, table view, dashboards), which map one-to-one to components.
