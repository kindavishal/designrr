# Esri Calcite

> Esri Calcite by Esri.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | Esri (org-backed) |
| Platforms | web |
| Frameworks | web-components, react |
| Styling | web-components |
| Good for | maps, gis, enterprise |
| License | NOASSERTION |
| GitHub stars | 380 |
| npm weekly downloads | 0 (`@esri/calcite-components`) |
| Last activity | 2026-11-05 |
| Docs | https://developers.arcgis.com/calcite-design-system/ |
| Source | https://github.com/Esri/calcite-design-system |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/Esri/calcite-design-system/blob/HEAD/packages/design-tokens/.gitignore
- **Agent/contributor docs in repo:** https://github.com/Esri/calcite-design-system/blob/HEAD/.github/copilot-instructions.md


## Install
```bash
npm install @esri/calcite-components
```
Then follow the framework setup in the official getting-started guide: https://developers.arcgis.com/calcite-design-system/

## Agent tips
- Design tokens live in the repo (e.g. `packages/design-tokens/.gitignore`); map brand colours/typography onto these rather than hard-coding values.
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
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/calcite.md_
