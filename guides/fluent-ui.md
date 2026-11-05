---
writtenFor: "9"
written: 2026-11-05
verifiedAgainst: https://storybooks.fluentui.dev/react//llms/concepts-developer-quick-start.txt
---
## Install
```bash
npm install @fluentui/react-components
```

## Setup
```tsx
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
<FluentProvider theme={webLightTheme}>{/* app */}</FluentProvider>
```
Fluent v9 styles with CSS-in-JS, so `FluentProvider` must sit at the root. Built-in themes include `webLightTheme`, `webDarkTheme`, `teamsLightTheme` and `teamsDarkTheme`.

## Theme it to a brand
Build a 16-step `BrandVariants` ramp (the Theme Designer in the docs generates one) and call `createLightTheme(brand)` / `createDarkTheme(brand)`. Style custom parts with `makeStyles` and `tokens`.

## Agent tips
- Use v9 (`@fluentui/react-components`), not v8 (`@fluentui/react`); they are different libraries.
- LLM docs: `https://react.fluentui.dev/llms.txt` (links to plain-text pages per topic).
- Known React strict-mode issues in development are tracked on GitHub; they don't affect production builds.
