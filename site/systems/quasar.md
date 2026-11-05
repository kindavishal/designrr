# Quasar

> Quasar by Quasar.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **75/100** |
| Maintainer | Quasar |
| Platforms | web, ios, android, desktop |
| Frameworks | vue |
| Styling | css |
| Good for | admin, hybrid-app, mobile |
| License | MIT |
| GitHub stars | 27.2k |
| npm weekly downloads | 478.1k (`quasar`) |
| Last activity | 2026-10-19 |
| Docs | https://quasar.dev |
| Source | https://github.com/quasarframework/quasar |

## AI resources (use these first)
- **llms.txt:** https://quasar.dev/llms.txt
- **MCP server:**
  - in-repo package: https://github.com/quasarframework/quasar/tree/HEAD/mcp/README.md (see its README for setup)
- **Design tokens:** https://github.com/quasarframework/quasar/blob/HEAD/docs/build/mcp/output/tokens.js
- **Agent/contributor docs in repo:** https://github.com/quasarframework/quasar/blob/HEAD/.claude/skills/release-notes/SKILL.md


## Install
```bash
npm init quasar
```
One Vue codebase → SPA, SSR, PWA, mobile (Capacitor/Cordova) and desktop (Electron).

## Theme it to a brand
`quasar.config` → `framework.config.brand` or Sass variables (`$primary`, `$secondary`) in `src/css/quasar.variables.scss`.

## Agent tips
- The repo ships an MCP server (see `mcp/` in the repo) for component lookup.

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
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/quasar.md_
