---
writtenFor: "1"
written: 2026-11-05
verifiedAgainst: https://github.com/spartan-ng/spartan/blob/main/skills/spartan/cli.md
---
## Install
```bash
npm i -D @spartan-ng/cli
ng g @spartan-ng/cli:init
ng g @spartan-ng/cli:ui-theme          # pick a theme (CSS variables)
ng g @spartan-ng/cli:ui --name=button  # or: ng g @spartan-ng/cli:ui all
```
Nx: use `npx nx g @spartan-ng/cli:…` with the same generators.

## How it works
shadcn/ui's model for Angular: `@spartan-ng/brain` provides accessible headless primitives (installed from npm); `helm` provides Tailwind-styled source copied into your repo, which you own and edit.

## Theme it to a brand
Edit the CSS variables written by `ui-theme` (same model as shadcn/ui: `--primary`, `--background`, `--radius`, …).

## Agent tips
- MCP server: `npx -y @spartan-ng/mcp`. Agent skill: `npx skills add spartan-ng/spartan`.
- `ng g @spartan-ng/cli:healthcheck --autoFix` checks and repairs the setup.
