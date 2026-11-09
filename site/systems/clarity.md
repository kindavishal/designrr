# Clarity

> Angular cloud-management consoles (VMware-style).

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | VMware / Broadcom (org-backed) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, cloud-console |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 7.5k KB |
| License | NOASSERTION |
| Last activity | 2026-11-09 |
| Docs | https://clarity.design |
| Source | https://github.com/vmware-clarity/ng-clarity |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 433 | GitHub API (vmware-clarity/ng-clarity) |
| GitHub forks | 106 | GitHub API |
| Contributors (incl. anonymous) | 140 | GitHub API |
| Issues closed / open | 259 / 46 (85% closed) | GitHub API |
| npm weekly downloads | 29.8k | npm (`@clr/angular` 18.5.0) |

## AI resources (use these first)
- **llms.txt:** https://clarity.design/llms.txt
- **llms-full.txt:** https://clarity.design/llms-full.txt
- MCP server: none found
- **Agent skills shipped in the npm package:** `clr-accordion`, `clr-alert`, `clr-app-layout`, `clr-badge`, `clr-breadcrumbs`, `clr-button`, `clr-button-group`, `clr-card`, `clr-collapsible-panel`, `clr-combobox`, `clr-datagrid`, `clr-datepicker`, `clr-dropdown`, `clr-forms`, `clr-header`, `clr-icons`, `clr-label`, `clr-modal`, `clr-navigation`, `clr-popover`, `clr-progress-bar`, `clr-side-panel`, `clr-signpost`, `clr-spinner`, `clr-stack-view`, `clr-stepper`, `clr-tabs`, `clr-timeline`, `clr-tooltip`, `clr-tree-view`, `clr-vertical-nav`, `clr-wizard`
- **Design tokens:** https://github.com/vmware-clarity/ng-clarity/blob/HEAD/projects/addons/datagrid/interfaces/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/vmware-clarity/ng-clarity/blob/HEAD/projects/addons/ai/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @clr/angular
```
Then follow the framework setup in the official getting-started guide: https://clarity.design

## Agent tips
- Read https://clarity.design/llms.txt first. It indexes the official docs in markdown.
- The npm package ships agent skills (`clr-accordion`, `clr-alert`, `clr-app-layout`, `clr-badge`, `clr-breadcrumbs`, `clr-button`, `clr-button-group`, `clr-card`, `clr-collapsible-panel`, `clr-combobox`, `clr-datagrid`, `clr-datepicker`, `clr-dropdown`, `clr-forms`, `clr-header`, `clr-icons`, `clr-label`, `clr-modal`, `clr-navigation`, `clr-popover`, `clr-progress-bar`, `clr-side-panel`, `clr-signpost`, `clr-spinner`, `clr-stack-view`, `clr-stepper`, `clr-tabs`, `clr-timeline`, `clr-tooltip`, `clr-tree-view`, `clr-vertical-nav`, `clr-wizard`); install them with your agent's skills tooling.
- Design tokens live in the repo (e.g. `projects/addons/datagrid/interfaces/tokens.ts`). Map brand colours and type onto these rather than hard-coding values.
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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/clarity.md_
