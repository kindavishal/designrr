# Carbon Components Svelte

> Carbon Components Svelte by IBM (community).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **55/100** |
| Maintainer | IBM (community) (org-backed) |
| Platforms | web |
| Frameworks | svelte |
| Styling | css |
| Good for | enterprise, data-dense, dashboard |
| License | Apache-2.0 |
| GitHub stars | 2.9k |
| npm weekly downloads | 0 (`carbon-components-svelte`) |
| Last activity | 2026-11-05 |
| Docs | https://svelte.carbondesignsystem.com |
| Source | https://github.com/carbon-design-system/carbon-components-svelte |

## AI resources (use these first)
- **llms.txt:** https://svelte.carbondesignsystem.com/llms.txt
- **llms-full.txt:** https://svelte.carbondesignsystem.com/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/carbon-design-system/carbon-components-svelte/blob/HEAD/scripts/lib/tokens.ts


## Install
```bash
npm install carbon-components-svelte
```
Then follow the framework setup in the official getting-started guide: https://svelte.carbondesignsystem.com

## Agent tips
- Read https://svelte.carbondesignsystem.com/llms.txt first — it indexes the official docs in markdown.
- Design tokens live in the repo (e.g. `scripts/lib/tokens.ts`); map brand colours/typography onto these rather than hard-coding values.
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
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/carbon-svelte.md_
