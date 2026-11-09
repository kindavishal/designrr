# React Native Paper

> Material Design 3 apps in React Native.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Callstack (org-backed) |
| Platforms | ios, android |
| Frameworks | react-native |
| Styling | native |
| Install | npm package with a bundler (Vite, Next.js, …) |
| Good for | mobile, consumer; shapes: mobile-app |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 3.7k KB |
| License | MIT |
| Last activity | 2026-11-09 |
| Docs | https://callstack.github.io/react-native-paper/ |
| Source | https://github.com/callstack/react-native-paper |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 14.5k | GitHub API (callstack/react-native-paper) |
| GitHub forks | 2.3k | GitHub API |
| Contributors (incl. anonymous) | 384 | GitHub API |
| Issues closed / open | 2.5k / 328 (88% closed) | GitHub API |
| npm weekly downloads | 638.0k | npm (`react-native-paper` 5.15.4) |

## AI resources (use these first)
- **llms.txt:** https://callstack.github.io/react-native-paper/llms.txt
- **llms-full.txt:** https://callstack.github.io/react-native-paper/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/callstack/react-native-paper/blob/HEAD/src/theme/tokens
- **Agent/contributor docs in repo:** https://github.com/callstack/react-native-paper/blob/HEAD/.github/copilot-instructions.md


_Hand-written guide for v5, checked against https://callstack.github.io/react-native-paper/docs/guides/getting-started.md on 2026-11-05; latest release 5.15.4._

## Install
```bash
npm install react-native-paper react-native-safe-area-context
npm install @react-native-vector-icons/material-design-icons
npx pod-install      # iOS, bare React Native only
```
Optional, smaller production bundles: add `react-native-paper/babel` to the production `plugins` in your Babel config.

## Setup
```tsx
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
const theme = { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, primary: '#4F46E5' } };
<PaperProvider theme={theme}>{/* app */}</PaperProvider>
```

## Theme it to a brand
Generate a full Material 3 colour scheme from one brand colour (the theming guide links a generator) and paste it into `colors`; use `MD3DarkTheme` as the base for dark mode.

## Agent tips
- Pair with React Navigation; the docs cover theming navigation together with Paper.
- LLM index: `https://callstack.github.io/react-native-paper/llms.txt`; every page has a `.md` version.

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
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/react-native-paper.md_
