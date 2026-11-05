# U.S. Web Design System

> U.S. Web Design System by U.S. Government (GSA).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | U.S. Government (GSA) (org-backed) |
| Platforms | web |
| Frameworks | any |
| Styling | css |
| Good for | government, public-service, accessibility-critical |
| License | NOASSERTION |
| GitHub stars | 7.2k |
| npm weekly downloads | 0 (`@uswds/uswds`) |
| Last activity | 2026-10-09 |
| Docs | https://designsystem.digital.gov |
| Source | https://github.com/uswds/uswds |

## AI resources (use these first)
- **llms.txt:** https://designsystem.digital.gov/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/uswds/uswds/blob/HEAD/packages/uswds-core/src/styles/tokens/_index.scss
- **Agent/contributor docs in repo:** https://github.com/uswds/uswds/blob/HEAD/.agents/skills/uswds-accessibility/SKILL.md

## Consider an alternative if
- you are building a commercial or non-government product — government systems are designed (and sometimes licensed) for public services.

## Install
```bash
npm install @uswds/uswds --save
npx gulp init   # with @uswds/compile, sets up Sass compilation and assets
```

## Theme it to a brand
USWDS uses design tokens set via Sass settings (`$theme-color-primary: 'indigo-60v'`, `$theme-font-type-sans: 'public-sans'`).

## Agent tips
- Copy markup from each component page; add `usa-` classes. React apps can use `@trussworks/react-uswds`.

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
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/uswds.md_
