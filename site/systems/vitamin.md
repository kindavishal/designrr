# Decathlon Vitamin

> Decathlon products (brand-locked).

| | |
|---|---|
| Tier | **watch** |
| AI-readiness | **40/100** |
| Maintainer | Decathlon (org-backed) |
| Brand-locked | **yes**: Decathlon brand identity. |
| Platforms | web |
| Frameworks | any, react, vue, svelte |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | ecommerce, consumer, retail |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 37.1k KB |
| License | Apache-2.0 |
| Last activity | 2025-06-06 |
| Docs | https://www.decathlon.design |
| Source | https://github.com/Decathlon/vitamin-web |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 289 | GitHub API (Decathlon/vitamin-web) |
| GitHub forks | 76 | GitHub API |
| Contributors (incl. anonymous) | 65 | GitHub API |
| Issues closed / open | 242 / 7 (97% closed) | GitHub API |
| npm weekly downloads | 2.8k | npm (`@vtmn/css` 3.0.2) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/Decathlon/vitamin-web/blob/HEAD/packages/sources/css/src/design-tokens/package.json

## Consider an alternative if
- you are not that brand. Decathlon brand identity.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- maintenance has slowed (last activity 516 days ago).

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @vtmn/css
```
Then follow the framework setup in the official getting-started guide: https://www.decathlon.design

## Agent tips
- Design tokens live in the repo (e.g. `packages/sources/css/src/design-tokens/package.json`). Map brand colours and type onto these rather than hard-coding values.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

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
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **watch**; traction via orgBacked. Notes: Last activity 516 days ago (12-24 months).

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/vitamin.md_
