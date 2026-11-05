# Ontario Design System

> Ontario Design System by Government of Ontario.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **40/100** |
| Maintainer | Government of Ontario (org-backed) |
| Platforms | web |
| Frameworks | web-components, react, angular |
| Styling | web-components |
| Good for | government, public-service |
| License | Apache-2.0 |
| GitHub stars | 11 |
| npm weekly downloads | 0 (`@ongov/ontario-design-system-component-library`) |
| Last activity | 2026-10-29 |
| Docs | https://designsystem.ontario.ca |
| Source | https://github.com/ongov/ontario-design-system |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/ongov/ontario-design-system/blob/HEAD/packages/ontario-design-system-design-tokens/README.md
- **Agent/contributor docs in repo:** https://github.com/ongov/ontario-design-system/blob/HEAD/AGENTS.md

## Consider an alternative if
- you are building a commercial or non-government product — government systems are designed (and sometimes licensed) for public services.

## Install
```bash
npm install @ongov/ontario-design-system-component-library
```
Then follow the framework setup in the official getting-started guide: https://designsystem.ontario.ca

## Agent tips
- Design tokens live in the repo (e.g. `packages/ontario-design-system-design-tokens/README.md`); map brand colours/typography onto these rather than hard-coding values.
- Web components work in any framework; in React 19+ they can be used directly, older React may need wrappers.
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
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked. Notes: AI-readiness 40 < 45.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/ontario-ds.md_
