---
writtenFor: "3"
written: 2026-11-05
---
## Install
```bash
npm create vuetify@latest        # scaffold
# existing: npm install vuetify @mdi/font  (+ vite-plugin-vuetify)
```

## Setup
```ts
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
export default createVuetify({ theme: { defaultTheme: 'light', themes: { light: { colors: { primary: '#4F46E5' } } } } });
```

## Agent tips
- `https://vuetifyjs.com/llms.txt` lists every component page.
- Use `v-data-table` (server variant for large data) instead of custom tables.
