# daisyUI

> Framework-agnostic Tailwind component classes with many themes; great for quick MVPs in any stack.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | daisyUI |
| Platforms | web |
| Frameworks | any |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | startup-mvp, marketing, consumer, framework-agnostic; shapes: marketing-site, saas-app, content-site |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 2.8k KB |
| License | MIT |
| GitHub stars | 42.7k |
| npm weekly downloads | 1.4M (`daisyui` 5.7.50) |
| Last activity | 2026-10-13 |
| Docs | https://daisyui.com |
| Source | https://github.com/saadeghi/daisyui |

## AI resources (use these first)
- **llms.txt:** https://daisyui.com/llms.txt
- **MCP server:**
  - in-repo package: https://github.com/saadeghi/daisyui/tree/HEAD/packages/docs (see its README for setup)
- **Design tokens:** https://github.com/saadeghi/daisyui/blob/HEAD/packages/daisyui/functions/variables.css
- **Agent/contributor docs in repo:** https://github.com/saadeghi/daisyui/blob/HEAD/packages/AGENTS.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v5, written 2026-11-05; latest release 5.7.50._

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
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 0/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/daisyui.md_
