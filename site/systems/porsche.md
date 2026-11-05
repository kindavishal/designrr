# Porsche Design System

> Porsche Design System by Porsche.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | Porsche (org-backed) |
| Platforms | web |
| Frameworks | web-components, react, angular, vue |
| Styling | web-components |
| Good for | automotive, premium-brand, consumer |
| License | NOASSERTION |
| GitHub stars | 674 |
| npm weekly downloads | 0 (`@porsche-design-system/components-js`) |
| Last activity | 2026-11-03 |
| Docs | https://designsystem.porsche.com |
| Source | https://github.com/porsche-design-system/porsche-design-system |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/porsche-design-system/porsche-design-system/blob/HEAD/packages/components-angular/projects/angular-wrapper/src/tokens/index.ts
- **Agent/contributor docs in repo:** https://github.com/porsche-design-system/porsche-design-system/blob/HEAD/.cursor/rules/assets.mdc
- **Figma Code Connect:** yes — Figma components map to code.


## Install
```bash
npm install @porsche-design-system/components-js
```
Then follow the framework setup in the official getting-started guide: https://designsystem.porsche.com

## Agent tips
- Design tokens live in the repo (e.g. `packages/components-angular/projects/angular-wrapper/src/tokens/index.ts`); map brand colours/typography onto these rather than hard-coding values.
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
| Figma Code Connect (design ↔ code mapping) | 5/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/porsche.md_
