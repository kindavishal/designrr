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
| GitHub stars | 14.5k |
| npm weekly downloads | 0 (`react-native-paper` 5.15.4) |
| Last activity | 2026-11-04 |
| Docs | https://callstack.github.io/react-native-paper/ |
| Source | https://github.com/callstack/react-native-paper |

## AI resources (use these first)
- **llms.txt:** https://callstack.github.io/react-native-paper/llms.txt
- **llms-full.txt:** https://callstack.github.io/react-native-paper/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/callstack/react-native-paper/blob/HEAD/src/theme/tokens
- **Agent/contributor docs in repo:** https://github.com/callstack/react-native-paper/blob/HEAD/.github/copilot-instructions.md


_Hand-written guide for v5, written 2026-11-05; latest release 5.15.4._

## Install
```bash
npm install react-native-paper react-native-safe-area-context
# Expo: npx expo install react-native-paper react-native-safe-area-context
```

## Setup
```tsx
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
const theme = { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, primary: '#4F46E5' } };
<PaperProvider theme={theme}>{/* app */}</PaperProvider>
```

## Agent tips
- Generate full MD3 colour schemes from one brand colour with Material Theme Builder and paste into `colors`.
- Pair with React Navigation; Paper provides themed navigation adapters.

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

Quality gate: activity **active**; traction via stars, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/react-native-paper.md_
