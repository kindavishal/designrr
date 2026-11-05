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
| Good for | enterprise, productivity, microsoft-ecosystem, b2b |
| License | NOASSERTION |
| GitHub stars | 20.4k |
| npm weekly downloads | 647.5k (`@fluentui/react-components`) |
| Last activity | 2026-11-04 |
| Docs | https://react.fluentui.dev |
| Source | https://github.com/microsoft/fluentui |

## AI resources (use these first)
- **llms.txt:** https://react.fluentui.dev/llms.txt
- MCP server: none found
- **Design tokens:** https://github.com/microsoft/fluentui/blob/HEAD/packages/react-components/babel-preset-storybook-full-source/src/__fixtures__/storybook-stories-fullsource-with-tokens/css-module-with-tokens/tokens.css
- **Agent/contributor docs in repo:** https://github.com/microsoft/fluentui/blob/HEAD/.agents/skills/assign-prs/SKILL.md

## Consider an alternative if
- you are not building inside the microsoft ecosystem — its visual language signals that brand.
- you need zero-runtime styling or heavy React Server Components use — check the docs for RSC support.

## Install
```bash
npm install @fluentui/react-components @fluentui/react-icons
```

## Setup
```tsx
import { FluentProvider, webLightTheme, createLightTheme } from '@fluentui/react-components';
<FluentProvider theme={webLightTheme}>{/* app */}</FluentProvider>
```
Brand: build a 16-step `BrandVariants` ramp and call `createLightTheme(brand)` / `createDarkTheme(brand)`. Use `makeStyles` + `tokens` for custom styling.

## Agent tips
- Use v9 (`@fluentui/react-components`), not v8 (`@fluentui/react`) — they are different libraries.
- Teams apps: use `teamsLightTheme` / `teamsDarkTheme`.

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

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/fluent-ui.md_
