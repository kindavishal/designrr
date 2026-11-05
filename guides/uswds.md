---
writtenFor: "3"
written: 2026-11-05
verifiedAgainst: https://designsystem.digital.gov/documentation/getting-started/developers/phase-one-install/
---
## Install
```bash
npm install @uswds/uswds --save-exact
npm install @uswds/compile        # official Sass compile + asset copy tooling (gulp)
npx gulp init                     # copy assets and compile with your gulpfile
```
No build step: the package also ships compiled CSS and JS in `dist/` (`dist/css/uswds.min.css`, `dist/js/uswds.min.js`).

## Theme it to a brand
Set theme settings in `_uswds-theme.scss` with `@use "uswds-core" with (…)`, for example `$theme-color-primary` and `$theme-font-type-sans`. Values are USWDS design tokens such as `"blue-60v"`.

## Agent tips
- Copy markup from each component page and keep the `usa-` classes.
- `https://designsystem.digital.gov/llms.txt` indexes the documentation.
