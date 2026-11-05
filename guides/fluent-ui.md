## Install
```bash
npm install @fluentui/react-components @fluentui/react-icons
```

## Setup
```tsx
import { FluentProvider, webLightTheme, createLightTheme } from '@fluentui/react-components';
<FluentProvider theme={webLightTheme}>{/* app */}</FluentProvider>
```
Brand: build a 16-step `BrandVariants` ramp and call `createLightTheme(brand)` / `createDarkTheme(brand)`. Use `makeStyles` + `tokens` for custom styling.

## Agent tips
- Use v9 (`@fluentui/react-components`), not v8 (`@fluentui/react`) — they are different libraries.
- Teams apps: use `teamsLightTheme` / `teamsDarkTheme`.
