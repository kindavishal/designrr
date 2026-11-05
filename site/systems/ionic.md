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
| Last activity | 2026-11-04 |
| Docs | https://ionicframework.com/docs |
| Source | https://github.com/ionic-team/ionic-framework |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 52.7k | GitHub API (ionic-team/ionic-framework) |
| GitHub forks | 13.3k | GitHub API |
| Contributors (incl. anonymous) | 547 | GitHub API |
| Issues closed / open | 21.8k / 441 (98% closed) | GitHub API |
| npm weekly downloads | 582.7k | npm (`@ionic/core` 9.0.10) |

## AI resources (use these first)
- **llms.txt:** https://ionicframework.com/docs/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/ionic-team/ionic-framework/blob/HEAD/packages/angular/schematics/add/files/root/theme/variables.css

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v9, checked against https://ionicframework.com/docs/react/quickstart.md on 2026-11-05; latest release 9.0.10._

## Install
```bash
npm install -g @ionic/cli
ionic start myApp tabs --type=react     # or --type=angular / --type=vue
cd myApp && ionic serve
```
Native shells via Capacitor (Ionic 9 supports Capacitor 7+): `npx cap add ios` and `npx cap add android`.

## Theme it to a brand
Set the colour variables (`--ion-color-primary`, its `-rgb`, `-contrast`, `-shade` and `-tint` variants) in your theme CSS file; the colour generator in the docs produces the full set from one hex. Dark mode: import one of `@ionic/<framework>/css/palettes/dark.system.css` (follows the OS), `dark.class.css` (toggle with a class) or `dark.always.css`.

## Agent tips
- Components adapt to iOS and Material styling automatically per platform.
- Keep the `IonPage` / `IonHeader` / `IonContent` structure on every page, or navigation transitions break.
- Upgrading an older app: `npx @ionic/migrate` applies Ionic 9's breaking changes and lists what is left. Angular 18–22 are supported.
- Docs index for LLMs: `https://ionicframework.com/docs/llms.txt`; pages have `.md` versions.

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

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/ionic.md_
