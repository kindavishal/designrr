# Ionic Framework

> Cross-platform mobile apps from one web codebase with iOS and Material styling.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **50/100** |
| Maintainer | Ionic (org-backed) |
| Platforms | web, ios, android |
| Frameworks | web-components, react, vue, angular |
| Styling | web-components |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | mobile, hybrid-app, consumer; shapes: mobile-app |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 20.4k KB |
| License | MIT |
| GitHub stars | 52.7k |
| npm weekly downloads | 0 (`@ionic/core` 9.0.10) |
| Last activity | 2026-11-04 |
| Docs | https://ionicframework.com/docs |
| Source | https://github.com/ionic-team/ionic-framework |

## AI resources (use these first)
- **llms.txt:** https://ionicframework.com/docs/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/ionic-team/ionic-framework/blob/HEAD/packages/angular/schematics/add/files/root/theme/variables.css

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you copy the build guide verbatim. It was written for v8; the latest release is 9.0.10, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v8; latest release 9.0.10._

## Install
```bash
npm install -g @ionic/cli
ionic start myApp tabs --type=react     # or angular / vue
npx cap add ios && npx cap add android  # native shells via Capacitor
```

## Theme it to a brand
CSS variables in `src/theme/variables.css` (`--ion-color-primary`, …). Components adapt to iOS vs Material mode automatically.

## Agent tips
- Use `IonPage`, `IonHeader`, `IonContent` structure on every page or navigation transitions break.

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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/ionic.md_
