# Astro UXDS

> Space and satellite ground-system operations UIs.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **25/100** |
| Maintainer | Rocket Communications (org-backed) |
| Brand-locked | **yes**: Built for US space-industry ground systems; strongly domain-specific look. |
| Platforms | web |
| Frameworks | web-components, react, angular, vanilla |
| Styling | web-components |
| Install | CDN link or npm; no build step needed |
| Good for | space, mission-control, data-dense, dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 18.6k KB |
| License | NOASSERTION |
| Last activity | 2026-10-29 |
| Docs | https://www.astrouxds.com |
| Source | https://github.com/RocketCommunicationsInc/astro |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 158 | GitHub API (RocketCommunicationsInc/astro) |
| GitHub forks | 35 | GitHub API |
| Contributors (incl. anonymous) | 34 | GitHub API |
| Issues closed / open | 133 / 2 (99% closed) | GitHub API |
| npm weekly downloads | 10.7k | npm (`@astrouxds/astro-web-components` 8.0.1) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- you are not that brand. Built for US space-industry ground systems; strongly domain-specific look.
- you rely on agent tooling. This system has few machine-readable resources.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
No build step needed. From the CDN (pinned to the current release):
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@astrouxds/astro-web-components@8.0.1/dist/astro-web-components/astro-web-components.esm.min.js"></script>
```
Check the docs for the recommended files: https://www.astrouxds.com
```bash
npm install @astrouxds/astro-web-components
```
Then follow the framework setup in the official getting-started guide: https://www.astrouxds.com

## Agent tips
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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked. Notes: AI-readiness 25 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/astro-uxds.md_
