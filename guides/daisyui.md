---
writtenFor: "5"
written: 2026-11-05
---
## Install (Tailwind v4)
```bash
npm install -D daisyui@latest
```
```css
@import "tailwindcss";
@plugin "daisyui" { themes: light --default, dark --prefersdark; }
```

## How it works
Semantic class names (`btn btn-primary`, `card`, `modal`) on plain HTML — works with any framework or none.

## Theme it to a brand
Define a custom theme with `@plugin "daisyui/theme" { name: "brand"; --color-primary: oklch(...); --radius-box: 1rem; }` or use the theme generator on daisyui.com.

## Agent tips
- `https://daisyui.com/llms.txt` is a compact, complete class reference — load it before writing markup.
