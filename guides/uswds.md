## Install
```bash
npm install @uswds/uswds --save
npx gulp init   # with @uswds/compile, sets up Sass compilation and assets
```

## Theme it to a brand
USWDS uses design tokens set via Sass settings (`$theme-color-primary: 'indigo-60v'`, `$theme-font-type-sans: 'public-sans'`).

## Agent tips
- Copy markup from each component page; add `usa-` classes. React apps can use `@trussworks/react-uswds`.
