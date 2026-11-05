---
writtenFor: "22"
written: 2026-11-05
verifiedAgainst: https://github.com/angular/components/blob/main/guides/getting-started.md
---
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
