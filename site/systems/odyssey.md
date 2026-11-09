# Okta Odyssey

> Okta-style identity and admin consoles (MUI-based).

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **30/100** |
| Maintainer | Okta (org-backed) |
| Brand-locked | **yes**: Okta brand identity. |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, security, admin |
| Dark mode / RTL | not detected / yes |
| Package size (unpacked) | 12.0k KB |
| License | NOASSERTION |
| Last activity | 2026-10-28 |
| Docs | https://odyssey.okta.design |
| Source | https://github.com/okta/odyssey |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 114 | GitHub API (okta/odyssey) |
| GitHub forks | 33 | GitHub API |
| Contributors (incl. anonymous) | 73 | GitHub API |
| Issues closed / open | 716 / 0 (100% closed) | GitHub API |
| npm weekly downloads | 935 | npm (`@okta/odyssey-react-mui` 1.72.0) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/okta/odyssey/blob/HEAD/AGENTS.md

## Consider an alternative if
- you are not that brand. Okta brand identity.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @okta/odyssey-react-mui
```
Then follow the framework setup in the official getting-started guide: https://odyssey.okta.design

## Agent tips
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
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked. Notes: AI-readiness 30 < 45.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/odyssey.md_
