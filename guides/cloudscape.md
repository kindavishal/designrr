---
writtenFor: "3"
written: 2026-11-05
---
## Install
```bash
npm install @cloudscape-design/components @cloudscape-design/global-styles
```

## Setup
```tsx
import '@cloudscape-design/global-styles/index.css';
import { AppLayout, ContentLayout, Header, Table } from '@cloudscape-design/components';
```
Dark mode / density: `applyMode(Mode.Dark)`, `applyDensity(Density.Compact)` from `@cloudscape-design/global-styles`.

## Theme it to a brand
Limited by design: `applyTheme({ theme: { tokens: { colorBackgroundButtonPrimaryDefault: '#…' } } })` from `@cloudscape-design/components/theming`.

## Agent tips
- Use the documented **patterns** (Create resource, Table view, Dashboard) — they map one-to-one to components.
- `@cloudscape-design/board-components` for drag-and-drop dashboards; `@cloudscape-design/chart-components` for charts.
