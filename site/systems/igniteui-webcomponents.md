# Ignite UI for Web Components

> Data-heavy enterprise apps needing grids and inputs as web components.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Infragistics (org-backed) |
| Platforms | web |
| Frameworks | web-components |
| Styling | web-components |
| Install | CLI copies component source into your repo (requires: bundler) |
| Good for | enterprise, data-dense |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 12.5k KB |
| License | MIT |
| GitHub stars | 170 |
| npm weekly downloads | 0 (`igniteui-webcomponents` 7.4.1) |
| Last activity | 2026-11-04 |
| Docs | https://www.infragistics.com/products/ignite-ui-web-components |
| Source | https://github.com/IgniteUI/igniteui-webcomponents |

## AI resources (use these first)
- **llms.txt:** https://www.infragistics.com/llms.txt
- **llms-full.txt:** https://www.infragistics.com/llms-full.txt
- MCP server: none found
- **Agent skills shipped in the npm package:** `igniteui-wc-choose-components`, `igniteui-wc-customize-component-theme`, `igniteui-wc-figma-to-app`, `igniteui-wc-generate-from-image-design`, `igniteui-wc-grids`, `igniteui-wc-integrate-with-framework`, `igniteui-wc-migrate-grid-lite-to-premium`, `igniteui-wc-optimize-bundle-size`
- **Agent/contributor docs in repo:** https://github.com/IgniteUI/igniteui-webcomponents/blob/HEAD/.github/copilot-instructions.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install igniteui-webcomponents
```
Then follow the framework setup in the official getting-started guide: https://www.infragistics.com/products/ignite-ui-web-components

## Agent tips
- Read https://www.infragistics.com/llms.txt first. It indexes the official docs in markdown.
- The npm package ships agent skills (`igniteui-wc-choose-components`, `igniteui-wc-customize-component-theme`, `igniteui-wc-figma-to-app`, `igniteui-wc-generate-from-image-design`, `igniteui-wc-grids`, `igniteui-wc-integrate-with-framework`, `igniteui-wc-migrate-grid-lite-to-premium`, `igniteui-wc-optimize-bundle-size`); install them with your agent's skills tooling.
- Web components work in any framework; React 19+ supports them directly, older React may need wrappers.
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
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/igniteui-webcomponents.md_
