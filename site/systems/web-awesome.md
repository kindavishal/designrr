# Web Awesome

> Web Awesome by Font Awesome.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | Font Awesome (org-backed) |
| Platforms | web |
| Frameworks | web-components, any |
| Styling | web-components |
| Good for | framework-agnostic, content, marketing |
| License | MIT |
| GitHub stars | 1.4k |
| npm weekly downloads | 0 (`@awesome.me/webawesome`) |
| Last activity | 2026-11-04 |
| Docs | https://webawesome.com |
| Source | https://github.com/shoelace-style/webawesome |

## AI resources (use these first)
- **llms.txt:** https://webawesome.com/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/shoelace-style/webawesome/blob/HEAD/packages/webawesome/docs/docs/tokens/tokens.json
- **Agent/contributor docs in repo:** https://github.com/shoelace-style/webawesome/blob/HEAD/packages/webawesome/CLAUDE.md


## Install
```html
<!-- CDN (free tier) -->
<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@<version>/styles/webawesome.css">
<script type="module" src="https://ka-f.webawesome.com/webawesome@<version>/webawesome.loader.js"></script>
```
or `npm install @awesome.me/webawesome`.

## How it works
Framework-agnostic web components (`<wa-button variant="brand">`) — successor to Shoelace. Works in React, Vue, Svelte, Angular or plain HTML.

## Theme it to a brand
Pick a theme class and override CSS custom properties (`--wa-color-brand-…`, `--wa-border-radius-scale`).

## Build checklist (any system)
1. **Install & provider** — follow the install section exactly for the detected framework and version.
2. **Brand → tokens** — set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first** — build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components** — map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States** — loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility** — keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness** — enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify** — run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/web-awesome.md_
