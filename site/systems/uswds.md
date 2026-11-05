# U.S. Web Design System

> US government websites and services; themeable, accessible, CDN or npm.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | U.S. Government (GSA) (org-backed) |
| Platforms | web |
| Frameworks | any, vanilla |
| Styling | css |
| Install | CDN link or npm; no build step needed |
| Good for | government, public-service, accessibility-critical; shapes: forms-flows, content-site |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 18.0k KB |
| License | NOASSERTION |
| Last activity | 2026-10-09 |
| Docs | https://designsystem.digital.gov |
| Source | https://github.com/uswds/uswds |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 7.2k | GitHub API (uswds/uswds) |
| GitHub forks | 1.1k | GitHub API |
| Contributors (incl. anonymous) | 267 | GitHub API |
| Issues closed / open | 3.4k / 111 (97% closed) | GitHub API |
| npm weekly downloads | 82.4k | npm (`@uswds/uswds` 3.14.0) |

## AI resources (use these first)
- **llms.txt:** https://designsystem.digital.gov/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/uswds/uswds/blob/HEAD/packages/uswds-tokens/colors
- **Agent/contributor docs in repo:** https://github.com/uswds/uswds/blob/HEAD/AGENTS.md

## Consider an alternative if
- you are building a commercial or non-government product. Government systems are designed (and sometimes licensed) for public services.

_Hand-written guide for v3, checked against https://designsystem.digital.gov/documentation/getting-started/developers/phase-one-install/ on 2026-11-05; latest release 3.14.0._

## Install
```bash
npm install @uswds/uswds --save-exact
npm install @uswds/compile        # official Sass compile + asset copy tooling (gulp)
npx gulp init                     # copy assets and compile with your gulpfile
```
No build step: the package also ships compiled CSS and JS in `dist/` (`dist/css/uswds.min.css`, `dist/js/uswds.min.js`).

## Theme it to a brand
Set theme settings in `_uswds-theme.scss` with `@use "uswds-core" with (…)`, for example `$theme-color-primary` and `$theme-font-type-sans`. Values are USWDS design tokens such as `"blue-60v"`.

## Agent tips
- Copy markup from each component page and keep the `usa-` classes.
- `https://designsystem.digital.gov/llms.txt` indexes the documentation.

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
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/uswds.md_
