---
writtenFor: "1"
written: 2026-11-05
verifiedAgainst: https://shadcn-svelte.com/docs/installation/sveltekit.md
---
## Install
```bash
npx sv create my-app --add tailwindcss     # new SvelteKit app with Tailwind
npx shadcn-svelte@latest init
npx shadcn-svelte@latest add button card dialog
```
Vite, Astro and manual setups have their own guides.

## How it works
Same model as shadcn/ui: source is copied into your project (`$lib/components/ui`), built on Bits UI and Tailwind CSS, and themed with CSS variables. It also supports publishing your own registry.

## Theme it to a brand
Edit the CSS variables in your global stylesheet (`--primary`, `--background`, `--radius`, …) for light and dark.

## Agent tips
- `https://shadcn-svelte.com/llms.txt` indexes every page as Markdown. Use Svelte 5 syntax (runes); older examples use Svelte 4.
