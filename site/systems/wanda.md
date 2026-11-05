# Wonderflow Wanda

> Analytics and insights SaaS dashboards in React.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | Wonderflow (org-backed) |
| Brand-locked | **yes**: Wonderflow brand identity. |
| Platforms | web |
| Frameworks | react |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | analytics, saas |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 936 KB |
| License | Apache-2.0 |
| Last activity | 2026-10-29 |
| Docs | https://design.wonderflow.ai |
| Source | https://github.com/wonderflow-bv/wanda |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 238 | GitHub API (wonderflow-bv/wanda) |
| GitHub forks | 27 | GitHub API |
| Contributors (incl. anonymous) | 14 | GitHub API |
| Issues closed / open | 165 / 0 (100% closed) | GitHub API |
| npm weekly downloads | 899 | npm (`@wonderflow/react-components` 16.1.0) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/wonderflow-bv/wanda/blob/HEAD/packages/tokens/src
- **Agent/contributor docs in repo:** https://github.com/wonderflow-bv/wanda/blob/HEAD/packages/AGENTS.md

## Consider an alternative if
- you are not that brand. Wonderflow brand identity.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @wonderflow/react-components
```
Then follow the framework setup in the official getting-started guide: https://design.wonderflow.ai

## Agent tips
- Design tokens live in the repo (e.g. `packages/tokens/src`). Map brand colours and type onto these rather than hard-coding values.
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
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/wanda.md_
