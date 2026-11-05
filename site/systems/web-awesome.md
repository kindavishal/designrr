# Web Awesome

> Framework-agnostic web components with themes and dark mode; works from a CDN with no build step.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | Font Awesome (org-backed) |
| Platforms | web |
| Frameworks | web-components, any, vanilla |
| Styling | web-components |
| Install | CDN link or npm; no build step needed |
| Good for | framework-agnostic, content, marketing; shapes: content-site, marketing-site, saas-app |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 17.1k KB |
| License | MIT |
| Last activity | 2026-11-04 |
| Docs | https://webawesome.com |
| Source | https://github.com/shoelace-style/webawesome |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 1.4k | GitHub API (shoelace-style/webawesome) |
| GitHub forks | 215 | GitHub API |
| Contributors (incl. anonymous) | 165 | GitHub API |
| Issues closed / open | 993 / 52 (95% closed) | GitHub API |
| npm weekly downloads | 275.5k | npm (`@awesome.me/webawesome` 3.14.0) |

## AI resources (use these first)
- **llms.txt:** https://webawesome.com/llms.txt
- MCP server: none found
- **Agent skills shipped in the npm package:** `webawesome`, `webawesome-design`
- **Design tokens:** https://github.com/shoelace-style/webawesome/blob/HEAD/packages/webawesome/docs/docs/tokens/tokens.json
- **Agent/contributor docs in repo:** https://github.com/shoelace-style/webawesome/blob/HEAD/packages/webawesome/CLAUDE.md


_Hand-written guide for v3, checked against https://webawesome.com/llms.txt on 2026-11-05; latest release 3.14.0._

## Install
No build step needed. In `<head>` (pinned to v3.14.0, the latest release when this page was built):
```html
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@3.14.0/styles/themes/default.css" />
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@3.14.0/styles/utilities.css" />
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@3.14.0/styles/native.css" />
<script type="module" src="https://ka-f.webawesome.com/webawesome@3.14.0/webawesome.loader.js"></script>
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

## Build checklist (any system)
1. **Install & provider:** follow the install section exactly for the detected framework and version.
2. **Brand → tokens:** set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first:** build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components:** map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States:** loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility:** keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness:** enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify:** run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/web-awesome.md_
