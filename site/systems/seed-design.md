# SEED Design (Karrot)

> SEED Design (Karrot) by Daangn / Karrot.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **90/100** |
| Maintainer | Daangn / Karrot (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css |
| Good for | consumer, marketplace, mobile |
| License | Apache-2.0 |
| GitHub stars | 1.2k |
| npm weekly downloads | 46.0k (`@seed-design/react`) |
| Last activity | 2026-11-05 |
| Docs | https://seed-design.io |
| Source | https://github.com/daangn/seed-design |

## AI resources (use these first)
- **llms.txt:** https://seed-design.io/llms.txt
- **MCP server:**
  - in-repo package: https://github.com/daangn/seed-design/tree/HEAD/packages/docs-mcp (see its README for setup)
- **Design tokens:** https://github.com/daangn/seed-design/blob/HEAD/docs/content/foundations/design-token/meta.json
- **Agent/contributor docs in repo:** https://github.com/daangn/seed-design/blob/HEAD/.agents/learnings/AGENTS.md


## Install
```bash
npm install @seed-design/react
```
Then follow the framework setup in the official getting-started guide: https://seed-design.io

## Agent tips
- Read https://seed-design.io/llms.txt first — it indexes the official docs in markdown.
- Connect the MCP server listed above before writing code; use it to look up components and props.
- Design tokens live in the repo (e.g. `docs/content/foundations/design-token/meta.json`); map brand colours/typography onto these rather than hard-coding values.
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
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/seed-design.md_
