# Bootstrap

> Quick, familiar responsive sites and admin panels in any stack, CDN-ready with no build step.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | Bootstrap team (org-backed) |
| Platforms | web |
| Frameworks | any, vanilla |
| Styling | css |
| Install | CDN link or npm; no build step needed |
| Good for | marketing, startup-mvp, framework-agnostic, admin; shapes: marketing-site, content-site, app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 9.4k KB |
| License | MIT |
| Last activity | 2026-11-05 |
| Docs | https://getbootstrap.com |
| Source | https://github.com/twbs/bootstrap |
| Same family | [BootstrapVueNext](bootstrap-vue-next.md), [React Bootstrap](react-bootstrap.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 175.0k | GitHub API (twbs/bootstrap) |
| GitHub forks | 78.6k | GitHub API |
| Contributors (incl. anonymous) | 1.7k | GitHub API |
| Issues closed / open | 22.9k / 139 (99% closed) | GitHub API |
| npm weekly downloads | 8.2M | npm (`bootstrap` 5.3.8) |

## AI resources (use these first)
- **llms.txt:** https://getbootstrap.com/llms.txt
- **llms-full.txt:** https://getbootstrap.com/llms-full.txt
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/twbs/bootstrap/blob/HEAD/AGENTS.md


_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
No build step needed. From the CDN (pinned to the current release):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"></script>
```
Check the docs for the recommended files: https://getbootstrap.com
```bash
npm install bootstrap
```
Then follow the framework setup in the official getting-started guide: https://getbootstrap.com

## Agent tips
- Read https://getbootstrap.com/llms.txt first. It indexes the official docs in markdown.
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
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/bootstrap.md_
