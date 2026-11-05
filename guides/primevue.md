---
writtenFor: "5"
written: 2026-11-05
verifiedAgainst: https://github.com/primefaces/primevue/tree/master/apps/showcase/doc/vite
---
## Install
```bash
npm install primevue @primeuix/themes
```

## Setup
```ts
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: '.dark' } } });
```
Nuxt: use the `@primevue/nuxt-module` module. Components can be auto-imported (see "Auto Import" in the docs).

## Theme it to a brand
`definePreset(Aura, { semantic: { primary: { 50: '{indigo.50}', …, 950: '{indigo.950}' } } })` from `@primeuix/themes`. Tailwind users can run PrimeVue in unstyled mode with pass-through classes.

## Agent tips
- MCP server: `npx -y @primevue/mcp`. Docs moved to primevue.dev; the LLM index is `https://primevue.dev/llms/llms.txt` (plus `llms-full.txt`).
- PrimeNG (Angular) and PrimeReact share the same theming model; PrimeNG's MCP is `@primeng/mcp`.
