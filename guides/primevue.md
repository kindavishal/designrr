---
writtenFor: "4"
written: 2026-11-05
---
## Install
```bash
npm install primevue @primeuix/themes primeicons
```

## Setup
```ts
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
app.use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: '.dark' } } });
```

## Theme it to a brand
`definePreset(Aura, { semantic: { primary: { 50: '{indigo.50}', …, 950: '{indigo.950}' } } })`. Tailwind users can use unstyled mode + the Tailwind preset.

## Agent tips
- The PrimeVue repo ships an MCP package (`packages/mcp`); see docs for setup. Same model for PrimeNG and PrimeReact.
