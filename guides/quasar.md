---
writtenFor: "2"
written: 2026-11-05
verifiedAgainst: https://quasar.dev/start/quick-start.md
---
## Install
```bash
pnpm create quasar@latest        # the quick start lists the npm/yarn/bun equivalents
pnpm add -g @quasar/cli@latest   # optional global CLI, then `quasar dev`
```
One Vue codebase → SPA, SSR, PWA, mobile (Capacitor/Cordova) and desktop (Electron). Other flavours: Vite plugin or UMD.

## Theme it to a brand
Sass variables (`$primary`, `$secondary`, …) in `src/css/quasar.variables.scss` (or `.sass`), plus the colour utilities for changing brand colours at runtime.

## Agent tips
- MCP server: `npx -y @quasar/mcp@latest`, run from the project folder. It serves the docs and component API of the exact Quasar versions installed, and works offline.
- LLM index: `https://quasar.dev/llms.txt`.
