# Tamagui

> One React codebase shipping optimised UI to web, iOS and Android.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **70/100** |
| Maintainer | Tamagui |
| Platforms | web, ios, android |
| Frameworks | react, react-native |
| Styling | css-in-js |
| Good for | cross-platform, consumer, startup-mvp |
| License | MIT |
| GitHub stars | 14.3k |
| npm weekly downloads | 0 (`tamagui`) |
| Last activity | 2026-11-04 |
| Docs | https://tamagui.dev |
| Source | https://github.com/tamagui/tamagui |

## AI resources (use these first)
- **llms.txt:** https://tamagui.dev/llms.txt
- **llms-full.txt:** https://tamagui.dev/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/tamagui/tamagui/blob/HEAD/code/core/themes/src/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/tamagui/tamagui/blob/HEAD/.claude/skills/git-safety/SKILL.md

## Consider an alternative if
- you need zero-runtime styling or heavy React Server Components use — check the docs for RSC support.

## Install
```bash
npm create tamagui@latest          # starter monorepo: Expo + Next.js sharing UI
# existing: npm install tamagui @tamagui/config
```

## Setup
```tsx
import { TamaguiProvider, createTamagui } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
const config = createTamagui(defaultConfig);
<TamaguiProvider config={config} defaultTheme="light">{/* app */}</TamaguiProvider>
```

## Agent tips
- Tokens and themes are typed in the config — use `$tokens` (`bg="$background"`, `p="$4"`) not raw values.
- Add the compiler plugin (Next/Vite/Metro) for production performance.

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
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/tamagui.md_
