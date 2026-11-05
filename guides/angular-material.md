## Install
```bash
ng add @angular/material
```

## Theme it to a brand
```scss
@use '@angular/material' as mat;
html { @include mat.theme((color: (primary: mat.$violet-palette, theme-type: light), typography: Inter, density: 0)); }
```
Customise further with `mat.<component>-overrides(...)` mixins and the generated `--mat-sys-*` CSS variables.

## Agent tips
- Use the CDK (`@angular/cdk`) for overlays, drag & drop and virtual scroll before reaching for third-party libraries.
- Prefer standalone component imports (`MatButtonModule` etc.) per component.
