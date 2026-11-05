# Base Web

> Base Web by Uber.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **35/100** |
| Maintainer | Uber (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Good for | enterprise, consumer |
| License | MIT |
| GitHub stars | 9.0k |
| npm weekly downloads | 112.5k (`baseui`) |
| Last activity | 2026-09-25 |
| Docs | https://baseweb.design |
| Source | https://github.com/uber/baseweb |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/uber/baseweb/blob/HEAD/src/tokens/color-primitive-tokens.ts

## Consider an alternative if
- you need zero-runtime styling or heavy React Server Components use — check the docs for RSC support.

## Install
```bash
npm install baseui
```
Then follow the framework setup in the official getting-started guide: https://baseweb.design

## Agent tips
- Design tokens live in the repo (e.g. `src/tokens/color-primitive-tokens.ts`); map brand colours/typography onto these rather than hard-coding values.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked. Notes: AI-readiness 35 < 45.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/baseweb.md_
