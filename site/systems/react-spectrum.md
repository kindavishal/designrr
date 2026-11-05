# React Spectrum / React Aria

> Best-in-class accessibility and internationalisation; React Aria for custom-branded systems, Spectrum for Adobe-style tools.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Adobe (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | headless (headless) |
| Good for | enterprise, accessibility-critical, creative-tools, custom-brand |
| License | Apache-2.0 |
| GitHub stars | 16.0k |
| npm weekly downloads | 8.3M (`react-aria-components`) |
| Last activity | 2026-11-05 |
| Docs | https://react-spectrum.adobe.com |
| Source | https://github.com/adobe/react-spectrum |

## AI resources (use these first)
- **llms.txt:** https://react-spectrum.adobe.com/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/adobe/react-spectrum/blob/HEAD/packages/@react-spectrum/s2/style/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/adobe/react-spectrum/blob/HEAD/.claude/skills/release-notes/SKILL.md

## Consider an alternative if
- you want a finished visual style out of the box — this is headless; you supply all styling.

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

## Build checklist (any system)
1. **Install & provider** — follow the install section exactly for the detected framework and version.
2. **Brand → tokens** — set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first** — build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components** — map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States** — loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility** — keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness** — enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify** — run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/react-spectrum.md_
