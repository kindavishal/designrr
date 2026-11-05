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
| Install | CLI copies component source into your repo (requires: bundler) |
| Good for | cross-platform, consumer, startup-mvp; shapes: mobile-app, saas-app |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 5.2k KB |
| License | MIT |
| Last activity | 2026-11-05 |
| Docs | https://tamagui.dev |
| Source | https://github.com/tamagui/tamagui |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 14.3k | GitHub API (tamagui/tamagui) |
| GitHub forks | 627 | GitHub API |
| Contributors (incl. anonymous) | 256 | GitHub API |
| Issues closed / open | 1.5k / 67 (96% closed) | GitHub API |
| npm weekly downloads | 294.4k | npm (`tamagui` 3.2.2) |

## AI resources (use these first)
- **llms.txt:** https://tamagui.dev/llms.txt
- **llms-full.txt:** https://tamagui.dev/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/tamagui/tamagui/blob/HEAD/code/core/themes/src/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/tamagui/tamagui/blob/HEAD/AGENTS.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Hand-written guide for v3, checked against https://tamagui.dev/llms.txt on 2026-11-05; latest release 3.2.2._

## Install
New cross-platform app (Expo + Next.js starter):
```bash
npm create tamagui@latest
```
Existing app:
```bash
npm install tamagui @tamagui/config
```

## Setup
```tsx
// tamagui.config.ts
import { defaultConfig } from '@tamagui/config/v6';
import { createTamagui } from 'tamagui';
export const config = createTamagui(defaultConfig);
```
```tsx
import { TamaguiProvider } from 'tamagui';
import { config } from './tamagui.config';
<TamaguiProvider config={config} defaultTheme="light">{/* app */}</TamaguiProvider>
```
Import `tamagui.config.ts` in one place near the root.

## Theme it to a brand
Tokens and themes are typed in the config: use `$tokens` (`bg="$background"`, `p="$4"`), never raw values. `@tamagui/config/v6` provides sensible settings, themes and fonts; override parts of it rather than starting from zero.

## Agent tips
- Add the optimising compiler for production web builds: `npm i -D @tamagui/cli` and `tamaguiPlugin()` from `@tamagui/cli/vite` (equivalents exist for Next.js and Metro).
- Animations are pluggable drivers (CSS, Reanimated, Motion) configured in `createTamagui`.
- The full docs are a single LLM file at `https://tamagui.dev/llms.txt` (very large; search it rather than reading it whole).

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
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/tamagui.md_
