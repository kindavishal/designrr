---
writtenFor: "4"
written: 2026-11-05
verifiedAgainst: https://ui.nuxt.com/raw/docs/getting-started/installation/nuxt.md
---
## Install
New project from a template:
```bash
npm create nuxt@latest -- -t ui          # also: ui/landing, ui/docs, ui/saas, ui/dashboard, ui/chat
```
Existing Nuxt app:
```bash
npm install @nuxt/ui tailwindcss
```
Add `modules: ['@nuxt/ui']` and `css: ['~/assets/css/main.css']` to `nuxt.config.ts`, and in `app/assets/css/main.css`:
```css
@import "tailwindcss";
@import "@nuxt/ui";
```
Plain Vue (Vite): same packages, then add the `ui()` plugin from `@nuxt/ui/vite` to `vite.config.ts`.

## Setup
Wrap the app in `<UApp>` (provides toasts, tooltips and overlays):
```vue
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

## Theme it to a brand
`app/app.config.ts`:
```ts
export default defineAppConfig({ ui: { colors: { primary: 'indigo', secondary: 'purple', neutral: 'zinc' } } })
```
Custom colour scales go in CSS with Tailwind's `@theme`; per-component `ui` props override slot classes.

## Agent tips
- Remote MCP server: `https://ui.nuxt.com/mcp` (HTTP transport). Docs index: `https://ui.nuxt.com/llms.txt`; every page has a raw Markdown version under `/raw/docs/…`.
- Start from the template closest to the product (dashboard, SaaS, chat, docs) rather than from scratch.
