# SEED Design (Karrot)

> Karrot-style mobile-first consumer and marketplace apps in React.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **90/100** |
| Maintainer | Daangn / Karrot (org-backed) |
| Brand-locked | **yes**: Karrot (Daangn) brand identity. |
| Platforms | web |
| Frameworks | react |
| Styling | css |
| Install | CLI copies component source into your repo (requires: bundler) |
| Good for | consumer, marketplace, mobile |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 2.2k KB |
| License | Apache-2.0 |
| GitHub stars | 1.2k |
| npm weekly downloads | 0 (`@seed-design/react` 3.1.1) |
| Last activity | 2026-11-05 |
| Docs | https://seed-design.io |
| Source | https://github.com/daangn/seed-design |

## AI resources (use these first)
- **llms.txt:** https://seed-design.io/llms.txt
- **MCP server:**
  - in-repo package: https://github.com/daangn/seed-design/tree/HEAD/packages/docs-mcp (see its README for setup)
- **Design tokens:** https://github.com/daangn/seed-design/blob/HEAD/packages/design-token/package.json
- **Agent/contributor docs in repo:** https://github.com/daangn/seed-design/blob/HEAD/.agents/learnings/AGENTS.md

## Consider an alternative if
- you are not that brand. Karrot (Daangn) brand identity.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @seed-design/react
```
Then follow the framework setup in the official getting-started guide: https://seed-design.io

## Agent tips
- Read https://seed-design.io/llms.txt first. It indexes the official docs in markdown.
- Connect the MCP server listed above before writing code, and use it to look up components and props.
- Design tokens live in the repo (e.g. `packages/design-token/package.json`). Map brand colours and type onto these rather than hard-coding values.
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
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/seed-design.md_
