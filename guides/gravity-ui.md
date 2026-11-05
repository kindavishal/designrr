---
writtenFor: "8"
written: 2026-11-05
verifiedAgainst: https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md
---
## Install
```bash
npm install @gravity-ui/uikit
# optional: @gravity-ui/navigation @gravity-ui/date-components @gravity-ui/icons
```
Requires React 18 or 19. Virtualised and drag-and-drop entry points need extra peers (`@tanstack/react-virtual`, `@hello-pangea/dnd`).

## Setup
```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { Provider } from '@gravity-ui/uikit';

<Provider theme="light" lang="en">{/* app */}</Provider>   // themes: light, dark, light-hc, dark-hc
```
v8 replaced the app-level `ThemeProvider` with `Provider` (theme, language, layout, component defaults and mobile settings in one).

## Theme it to a brand
Override the semantic CSS variables (`--g-color-base-brand`, `--g-color-text-brand`, …) per theme; the Themer on gravity-ui.com generates them.

## Agent tips
- v8 moved the old `List`, `Menu`, `DropdownMenu` and `Table` to `@gravity-ui/uikit/legacy`; the root `List` and `Menu` have new APIs. Don't copy v7 examples.
- Layout: the new `Grid` plus responsive props on `Box`, `Flex`, `Container`, `Row` and `Col`.
- `@gravity-ui/navigation` gives a ready app shell (AsideHeader) for consoles.
