## Install
```bash
npm install react-aria-components          # unstyled, accessible — bring your own styles (Tailwind works well)
# Adobe-styled: npm install @adobe/react-spectrum   (Spectrum 2: @react-spectrum/s2)
```

## Setup
React Aria Components need no provider; style via `className` (render props expose states: `isHovered`, `isFocusVisible`, `isSelected`). Use the Tailwind plugin `tailwindcss-react-aria-components` for state variants.

## When to choose which
- **React Aria**: you need a custom brand with best-in-class a11y + i18n (date pickers, comboboxes, drag & drop, tables).
- **React Spectrum**: Adobe-style creative/pro tools.

## Agent tips
- The docs have copy-paste Tailwind and vanilla CSS starter kits — start from those rather than styling from zero.
