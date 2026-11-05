---
writtenFor: "4"
written: 2026-11-05
verifiedAgainst: https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/pages/en/getting-started/installation.md
---
## Install
New project:
```bash
npm create vuetify@latest
```
Existing Vite app:
```bash
npm i vuetify
npm i -D vite-plugin-vuetify      # optional: tree-shaking and SASS variable support
npm i @mdi/font @fontsource/roboto
```
Nuxt: `npm i -D vuetify vite-plugin-vuetify` and register the plugin in `nuxt.config.ts` (see the installation guide).

## Setup
```ts
import { createApp } from 'vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import '@fontsource/roboto';

const vuetify = createVuetify({ components, directives, theme: { defaultTheme: 'system' } });
createApp(App).use(vuetify).mount('#app');
```
Vuetify does not bundle the Roboto font; add it yourself (as above).

## Theme it to a brand
`createVuetify({ theme: { defaultTheme: 'light', themes: { light: { colors: { primary: '#4F46E5' } } } } })`. `defaultTheme` accepts `'system'` to follow the OS; switch at runtime with the theme instance's `change`, `toggle` or `cycle`.

## Agent tips
- Vuetify MCP (remote): `https://mcp.vuetifyjs.com/mcp`. It includes upgrade tools for moving from Vuetify 3 to 4.
- Vuetify 4 changed style entry points (`vuetify/styles/core`), typography, elevation and several component defaults; don't copy v3 examples blindly.
- Use `v-data-table` (or `v-data-table-server` for large data) instead of hand-built tables.
