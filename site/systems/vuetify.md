# Vuetify

> Material-style Vue apps with a large component set.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Vuetify |
| Platforms | web |
| Frameworks | vue |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | admin, saas, dashboard; shapes: saas-app, app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 76.4k KB |
| License | NOASSERTION |
| Last activity | 2026-11-03 |
| Docs | https://vuetifyjs.com |
| Source | https://github.com/vuetifyjs/vuetify |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 41.0k | GitHub API (vuetifyjs/vuetify) |
| GitHub forks | 7.1k | GitHub API |
| Contributors (incl. anonymous) | 1.2k | GitHub API |
| Issues closed / open | 15.3k / 229 (99% closed) | GitHub API |
| npm weekly downloads | 1.3M | npm (`vuetify` 4.3.2) |

## AI resources (use these first)
- **llms.txt:** https://vuetifyjs.com/llms.txt
- **MCP server:**
  - remote server https://mcp.vuetifyjs.com/mcp
    ```json
    {"mcpServers":{"vuetify":{"type":"http","url":"https://mcp.vuetifyjs.com/mcp"}}}
    ```
- **Agent/contributor docs in repo:** https://github.com/vuetifyjs/vuetify/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v4, checked against https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/pages/en/getting-started/installation.md on 2026-11-05; latest release 4.3.2._

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

## Build checklist (any system)
1. **Install & provider:** follow the install section exactly for the detected framework and version.
2. **Brand → tokens:** set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first:** build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components:** map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States:** loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility:** keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness:** enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify:** run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/vuetify.md_
