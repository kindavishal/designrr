# Razorpay Blade

> Razorpay-style fintech dashboards in React and React Native.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | Razorpay (org-backed) |
| Brand-locked | **yes**: Razorpay brand identity. |
| Platforms | web, ios, android |
| Frameworks | react, react-native |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | fintech, payments, dashboard |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 50.8k KB |
| License | MIT |
| Last activity | 2026-11-06 |
| Docs | https://blade.razorpay.com |
| Source | https://github.com/razorpay/blade |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 665 | GitHub API (razorpay/blade) |
| GitHub forks | 205 | GitHub API |
| Contributors (incl. anonymous) | 125 | GitHub API |
| Issues closed / open | 330 / 103 (76% closed) | GitHub API |
| npm weekly downloads | 11.1k | npm (`@razorpay/blade` 12.131.0) |

## AI resources (use these first)
- llms.txt: not published
- **MCP server:**
  - in-repo package: https://github.com/razorpay/blade/tree/HEAD/packages/blade-mcp (see its README for setup)
- **Design tokens:** https://github.com/razorpay/blade/blob/HEAD/packages/blade/src/tokens/index.ts
- **Agent/contributor docs in repo:** https://github.com/razorpay/blade/blob/HEAD/AGENTS.md

## Consider an alternative if
- you are not that brand. Razorpay brand identity.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
npm install @razorpay/blade
```
Then follow the framework setup in the official getting-started guide: https://blade.razorpay.com

## Agent tips
- Connect the MCP server listed above before writing code, and use it to look up components and props.
- Design tokens live in the repo (e.g. `packages/blade/src/tokens/index.ts`). Map brand colours and type onto these rather than hard-coding values.
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

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/blade.md_
