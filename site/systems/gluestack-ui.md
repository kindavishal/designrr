# gluestack UI

> Copy-paste React Native + web components styled with NativeWind (Tailwind) for Expo apps.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | GeekyAnts (org-backed) |
| Platforms | ios, android, web |
| Frameworks | react-native, react |
| Styling | tailwind |
| Install | npm package, needs Tailwind CSS (requires: tailwind, bundler) |
| Good for | mobile, cross-platform, startup-mvp; shapes: mobile-app |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 1.4k KB |
| License | MIT |
| GitHub stars | 5.3k |
| npm weekly downloads | 0 (`@gluestack-ui/core` 5.0.15) |
| Last activity | 2026-09-02 |
| Docs | https://gluestack.io |
| Source | https://github.com/gluestack/gluestack-ui |

## AI resources (use these first)
- **llms.txt:** https://gluestack.io/llms.txt
- **llms-full.txt:** https://gluestack.io/llms-full.txt
- **MCP server:**
  - in-repo package: https://github.com/gluestack/gluestack-ui/tree/HEAD/apps/website (see its README for setup)
- **Agent/contributor docs in repo:** https://github.com/gluestack/gluestack-ui/blob/HEAD/CLAUDE.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you copy the build guide verbatim. It was written for v3; the latest release is 5.0.15, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v3; latest release 5.0.15._

## Install
```bash
npx gluestack-ui init
npx gluestack-ui add button input modal
```

## How it works
Copy-paste components (shadcn-style) for React Native + web, styled with NativeWind (Tailwind). Works with Expo and Next.js.

## Agent tips
- gluestack documents an MCP server for agents (see docs → MCP server).
- Theme via the CSS variables in `components/ui/gluestack-ui-provider/config.ts`.

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
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/gluestack-ui.md_
