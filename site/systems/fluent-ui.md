# Fluent UI

> Productivity and enterprise apps, especially Microsoft 365 / Teams add-ins.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Microsoft (org-backed) |
| Platforms | web |
| Frameworks | react, web-components |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, productivity, microsoft-ecosystem, b2b; shapes: saas-app, app-dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 2.2k KB |
| License | NOASSERTION |
| Last activity | 2026-11-06 |
| Docs | https://react.fluentui.dev |
| Source | https://github.com/microsoft/fluentui |
| Same family | [Fluent UI Blazor](fluentui-blazor.md), [Fluent UI Apple](fluentui-apple.md), [Fluent UI Android](fluentui-android.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 20.4k | GitHub API (microsoft/fluentui) |
| GitHub forks | 3.0k | GitHub API |
| Contributors (incl. anonymous) | 975 | GitHub API |
| Issues closed / open | 13.3k / 468 (97% closed) | GitHub API |
| npm weekly downloads | 674.3k | npm (`@fluentui/react-components` 9.75.1) |

## AI resources (use these first)
- **llms.txt:** https://react.fluentui.dev/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/microsoft/fluentui/blob/HEAD/packages/tokens/etc
- **Agent/contributor docs in repo:** https://github.com/microsoft/fluentui/blob/HEAD/AGENTS.md

## Consider an alternative if
- you are not building inside the microsoft ecosystem.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Hand-written guide for v9, checked against https://storybooks.fluentui.dev/react//llms/concepts-developer-quick-start.txt on 2026-11-05; latest release 9.75.1._

## Install
```bash
npm install @fluentui/react-components
```

## Setup
```tsx
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
<FluentProvider theme={webLightTheme}>{/* app */}</FluentProvider>
```
Fluent v9 styles with CSS-in-JS, so `FluentProvider` must sit at the root. Built-in themes include `webLightTheme`, `webDarkTheme`, `teamsLightTheme` and `teamsDarkTheme`.

## Theme it to a brand
Build a 16-step `BrandVariants` ramp (the Theme Designer in the docs generates one) and call `createLightTheme(brand)` / `createDarkTheme(brand)`. Style custom parts with `makeStyles` and `tokens`.

## Agent tips
- Use v9 (`@fluentui/react-components`), not v8 (`@fluentui/react`); they are different libraries.
- LLM docs: `https://react.fluentui.dev/llms.txt` (links to plain-text pages per topic).
- Known React strict-mode issues in development are tracked on GitHub; they don't affect production builds.

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
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/fluent-ui.md_
