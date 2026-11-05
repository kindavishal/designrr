---
writtenFor: "5"
written: 2026-11-05
verifiedAgainst: https://daisyui.com/llms.txt
---
## Install
daisyUI 5 requires Tailwind CSS 4 (no `tailwind.config.js`).
```bash
npm i -D daisyui@latest
```
```css
@import "tailwindcss";
@plugin "daisyui";
```
No build step (prototypes): the precompiled CSS plus the Tailwind browser build:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

## How it works
Semantic class names (`btn btn-primary`, `card`, `modal`) on plain HTML; works with any framework or none.

## Theme it to a brand
Pick built-in themes with `@plugin "daisyui" { themes: light --default, dark --prefersdark; }`, or define one:
```css
@plugin "daisyui/theme" {
  name: "brand";
  default: true;
  --color-primary: oklch(55% 0.2 260);
  --radius-box: 0.5rem;
}
```
The theme generator on daisyui.com produces these blocks.

## Agent tips
- `https://daisyui.com/llms.txt` is a compact, complete class reference; load it before writing markup. A free agent skill is offered on the install page.
- daisyUI's official MCP server (Blueprint) is a paid subscription with a free trial.
