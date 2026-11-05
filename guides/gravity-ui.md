---
writtenFor: "7"
written: 2026-11-05
---
## Install
```bash
npm install @gravity-ui/uikit
# optional: @gravity-ui/navigation @gravity-ui/date-components @gravity-ui/charts @gravity-ui/icons
```

## Setup
```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from '@gravity-ui/uikit';
<ThemeProvider theme="light">{/* light | dark | light-hc | dark-hc */}</ThemeProvider>
```

## Theme it to a brand
Override CSS variables (`--g-color-base-brand`, `--g-color-text-brand`, …) per theme class (`.g-root_theme_light`). The online Themer at gravity-ui.com generates them.

## Agent tips
- `@gravity-ui/navigation` gives a ready AsideHeader/app shell for consoles.
