---
writtenFor: "4"
written: 2026-11-05
verifiedAgainst: https://ui.shadcn.com/docs/cli.md
---
## Install
New project (scaffolds the app and shadcn/ui together):
```bash
npx shadcn@latest init --template next     # templates: next, vite, start, react-router, laravel, astro
```
Existing project: run `npx shadcn@latest init` in the app root. Choose the primitive base with `--base radix|base|aria`, or a saved design with `--preset <code>` (build one at ui.shadcn.com/create). Then add components:
```bash
npx shadcn@latest add button card dialog field input table sidebar
```

## How it works
Components are copied into your repo (`components/ui/*`), so you own and edit the source. Config lives in `components.json`. Built on Radix, Base UI or React Aria primitives with Tailwind CSS.

## Theme it to a brand
- Edit the CSS variables in your global CSS (`--background`, `--foreground`, `--primary`, `--radius`, …) for `:root` and `.dark`, or start from a preset.
- `npx shadcn@latest preset decode <code>` shows what a preset sets; `shadcn apply` re-applies one to an existing project.
- Fonts: set them in your layout and map them to `--font-sans`.

## Agent tips
- MCP server: `npx shadcn@latest mcp init --client <claude|cursor|vscode|codex|opencode>`. It lets the agent search and install registry items.
- Agent skill: `npx skills add shadcn/ui`.
- `npx shadcn@latest docs <component>` and `view` print docs and source; `search` queries registries.
- Never hand-write a component that exists in the registry; `add` it. Use blocks (for example `npx shadcn@latest add dashboard-01`) to scaffold whole screens.
