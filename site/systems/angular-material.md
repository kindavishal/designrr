# Angular Material

> Material Design for Angular apps, maintained by the Angular team.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **35/100** |
| Maintainer | Google (org-backed) |
| Platforms | web |
| Frameworks | angular |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, admin; shapes: saas-app, forms-flows |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 7.5k KB |
| License | MIT |
| GitHub stars | 25.0k |
| npm weekly downloads | 0 (`@angular/material` 22.2.6) |
| Last activity | 2026-11-04 |
| Docs | https://material.angular.dev |
| Source | https://github.com/angular/components |
| Same family | [Flutter Material 3](flutter-material.md), [Material Design 3 for Android (Compose)](material-android.md), [Material Web](material-web.md) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Design tokens:** https://github.com/angular/components/blob/HEAD/src/cdk/table/tokens.ts

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v22, checked against https://github.com/angular/components/blob/main/guides/getting-started.md on 2026-11-05; latest release 22.2.6._

## Install
```bash
ng add @angular/material
```

## Setup
Import components directly into standalone components:
```ts
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({ imports: [MatButtonModule, MatSlideToggle], template: `<mat-slide-toggle>Toggle me</mat-slide-toggle>` })
export class App {}
```

## Theme it to a brand
```scss
@use '@angular/material' as mat;

html {
  color-scheme: light dark;   // follows the OS; use `light` or `dark` to force one
  @include mat.theme((
    color: (primary: mat.$violet-palette, tertiary: mat.$orange-palette),
    typography: Inter,
    density: 0,
  ));
}
body { background: var(--mat-sys-surface); color: var(--mat-sys-on-surface); }
```
Fine-tune with `mat.<component>-overrides((...))` mixins and the `--mat-sys-*` CSS variables.

## Agent tips
- Angular's own LLM docs: `https://angular.dev/llms.txt`. The Angular Material site does not publish an llms.txt.
- Use the CDK (`@angular/cdk`) for overlays, drag and drop and virtual scrolling before reaching for third-party libraries.

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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked. Notes: AI-readiness 35 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/angular-material.md_
