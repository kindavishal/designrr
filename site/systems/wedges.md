# Lemon Squeezy Wedges

> Lemon Squeezy Wedges by Lemon Squeezy (Stripe).

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **20/100** |
| Maintainer | Lemon Squeezy (Stripe) (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Good for | saas, ecommerce, creator |
| License | MIT |
| GitHub stars | 1.5k |
| npm weekly downloads | 471 (`@lemonsqueezy/wedges`) |
| Last activity | 2025-12-12 |
| Docs | https://www.lemonsqueezy.com/wedges |
| Source | https://github.com/lmsqueezy/wedges |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you rely on agent tooling — this system has few machine-readable resources, so agents will rely on general knowledge and the docs site.

## Install
```bash
npm install @lemonsqueezy/wedges
```
Then follow the framework setup in the official getting-started guide: https://www.lemonsqueezy.com/wedges

## Agent tips
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
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked. Notes: AI-readiness 20 < 45.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/wedges.md_
