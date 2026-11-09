# Cisco Momentum

> Cisco Webex-style collaboration apps as web components.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **50/100** |
| Maintainer | Cisco (org-backed) |
| Brand-locked | **yes**: Cisco / Webex brand identity. |
| Platforms | web |
| Frameworks | web-components, vanilla |
| Styling | web-components |
| Install | CDN link or npm; no build step needed |
| Good for | communications, enterprise |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 9.1k KB |
| License | MIT |
| Last activity | 2026-11-09 |
| Docs | https://momentum.design |
| Source | https://github.com/momentum-design/momentum-design |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 45 | GitHub API (momentum-design/momentum-design) |
| GitHub forks | 68 | GitHub API |
| Contributors (incl. anonymous) | 50 | GitHub API |
| Issues closed / open | 47 / 0 (100% closed) | GitHub API |
| npm weekly downloads | 10.1k | npm (`@momentum-design/components` 0.143.2) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/momentum-design/momentum-design/blob/HEAD/packages/assets/tokens/.eslintrc.js
- **Agent/contributor docs in repo:** https://github.com/momentum-design/momentum-design/blob/HEAD/.github/copilot-instructions.md
- **Figma Code Connect:** yes, so Figma components map to code.

## Consider an alternative if
- you are not that brand. Cisco / Webex brand identity.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
No build step needed. From the CDN (pinned to the current release):
```html
<script src="https://cdn.jsdelivr.net/npm/@momentum-design/components@0.143.2/dist/index.min.js"></script>
```
Check the docs for the recommended files: https://momentum.design
```bash
npm install @momentum-design/components
```
Then follow the framework setup in the official getting-started guide: https://momentum.design

## Agent tips
- Design tokens live in the repo (e.g. `packages/assets/tokens/.eslintrc.js`). Map brand colours and type onto these rather than hard-coding values.
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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 5/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/momentum.md_
