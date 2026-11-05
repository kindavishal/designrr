---
writtenFor: "3"
written: 2026-11-05
---
## Install
```bash
npx shadcn@latest init          # in an existing Next.js / Vite / React Router / Astro app with Tailwind
npx shadcn@latest add button card dialog form input table sidebar
```
New project: `npx shadcn@latest init` offers templates; or start from `npx create-next-app@latest` first.

## How it works
Components are copied into your repo (`components/ui/*`) — you own and edit the source. Config lives in `components.json`. Built on Radix (or Base UI) primitives + Tailwind.

## Theme it to a brand
- Edit the CSS variables in `app/globals.css` (`--background`, `--foreground`, `--primary`, `--radius`, …) for `:root` and `.dark`.
- Pick a base theme at init, or generate one at ui.shadcn.com/themes and paste the variables.
- Fonts: set in your layout and map to `--font-sans`.

## Agent tips
- Run `npx shadcn@latest mcp init` (or add `npx shadcn@latest mcp` to your MCP client) so you can search and install registry items directly.
- Use **blocks** (`npx shadcn@latest add dashboard-01 sidebar-07 login-03`) to scaffold whole screens, then edit.
- Never hand-write a component that exists in the registry; `add` it.
- Charts: `add chart` (Recharts). Forms: `add form` (react-hook-form + zod).
