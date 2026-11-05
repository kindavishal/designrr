---
writtenFor: "3"
written: 2026-11-05
---
## Install
No build step needed. In `<head>` (pinned to v{{version}}, the latest release when this page was built):
```html
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@{{version}}/styles/themes/default.css" />
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@{{version}}/styles/utilities.css" />
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@{{version}}/styles/native.css" />
<script type="module" src="https://ka-f.webawesome.com/webawesome@{{version}}/webawesome.loader.js"></script>
```
Set the theme on `<html>`: `<html class="wa-theme-default wa-palette-default wa-light">` (swap `wa-light` for `wa-dark`, add `wa-brand-<hue>` to re-brand). With a bundler: `npm install @awesome.me/webawesome` and import components individually.

## How it works
Framework-agnostic web components (`<wa-button variant="brand">`) — successor to Shoelace. Works in React, Vue, Svelte, Angular or plain HTML.

## Theme it to a brand
One class re-brands everything: `wa-brand-<hue>` on `<html>`. Finer control: override `--wa-*` tokens in one stylesheet (semantic tokens like `--wa-color-brand-fill-loud`, `--wa-color-surface-raised`, never palette tints). Free themes: default, awesome, shoelace.

## Agent tips
- The package ships two agent skills: `npx skills add ./node_modules/@awesome.me/webawesome/dist/skills/webawesome` (component API) and `.../webawesome-design` (layout, theming, composition). Read them before building.
- Full pages use `<wa-page>` (nav goes in `slot="navigation"` once; it becomes a mobile drawer automatically). Sections use `wa-stack`, `wa-cluster`, `wa-grid`, `wa-split` with `wa-gap-*`.
- No hex, `px` or hand-written flex/grid: use `--wa-*` tokens and layout utilities. Custom elements never self-close.
