# Radix Themes

> Polished, accessible React UI with a clean default look and minimal setup.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **40/100** |
| Maintainer | WorkOS (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | saas, devtools, startup-mvp; shapes: saas-app, content-site |
| Dark mode / RTL | not detected / not detected |
| Package size (unpacked) | 4.8k KB |
| License | MIT |
| GitHub stars | 8.8k |
| npm weekly downloads | 1.5M (`@radix-ui/themes` 3.3.0) |
| Last activity | 2026-04-11 |
| Docs | https://www.radix-ui.com/themes/docs |
| Source | https://github.com/radix-ui/themes |
| Same family | [Radix Primitives](radix-primitives.md) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/radix-ui/themes/blob/HEAD/packages/radix-ui-themes/src/styles/tokens/base.css
- **Agent/contributor docs in repo:** https://github.com/radix-ui/themes/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v3, written 2026-11-05; latest release 3.3.0._

## Install
```bash
npm install @radix-ui/themes
```

## Setup
```tsx
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
<Theme accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">{/* app */}</Theme>
```

## Agent tips
- Layout with `Flex`, `Grid`, `Box`, `Container`, `Section` and their responsive props; no Tailwind needed.
- Theme panel (`<ThemePanel />`) helps pick settings during development; remove before shipping.

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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked. Notes: AI-readiness 40 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/radix-themes.md_
