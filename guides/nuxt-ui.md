---
writtenFor: "3"
written: 2026-11-05
---
## Install
```bash
npm create nuxt@latest -- -t ui          # new Nuxt project with Nuxt UI
# existing: npx nuxt module add ui   then  @import "tailwindcss"; @import "@nuxt/ui";  in main.css
```
Plain Vue (Vite) is supported too via the `@nuxt/ui/vite` plugin.

## Setup
Wrap the app in `<UApp>` (provides toasts, tooltips, overlays).

## Theme it to a brand
`app.config.ts`: `ui: { colors: { primary: 'indigo', neutral: 'zinc' } }`; per-component `ui` slots override classes. Tailwind `@theme` for custom colour scales.

## Agent tips
- Remote MCP server: `https://ui.nuxt.com/mcp`; docs at `https://ui.nuxt.com/llms.txt`.
- Starter templates (dashboard, SaaS, landing, docs, chat) exist — start from one.
