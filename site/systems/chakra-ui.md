# Chakra UI

> Accessible, themeable React apps with style props.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **85/100** |
| Maintainer | Chakra UI |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | saas, startup-mvp, consumer, marketing; shapes: saas-app, marketing-site |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 2.8k KB |
| License | MIT |
| Last activity | 2026-11-07 |
| Docs | https://chakra-ui.com |
| Source | https://github.com/chakra-ui/chakra-ui |
| Same family | [Ark UI](ark-ui.md), [Park UI](park-ui.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 40.7k | GitHub API (chakra-ui/chakra-ui) |
| GitHub forks | 3.6k | GitHub API |
| Contributors (incl. anonymous) | 825 | GitHub API |
| Issues closed / open | 4.4k / 2 (100% closed) | GitHub API |
| npm weekly downloads | 2.0M | npm (`@chakra-ui/react` 3.38.0) |

## AI resources (use these first)
- **llms.txt:** https://chakra-ui.com/llms.txt
- **llms-full.txt:** https://chakra-ui.com/llms-full.txt
- **MCP server:**
  - npm package `@chakra-ui/react-mcp`
    ```json
    {"mcpServers":{"chakra-ui":{"command":"npx","args":["-y","@chakra-ui/react-mcp"]}}}
    ```
  - in-repo package: https://github.com/chakra-ui/chakra-ui/tree/HEAD/apps/mcp (see its README for setup)
- **Design tokens:** https://github.com/chakra-ui/chakra-ui/blob/HEAD/apps/www/public/r/theme/tokens
- **Agent/contributor docs in repo:** https://github.com/chakra-ui/chakra-ui/blob/HEAD/CLAUDE.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Hand-written guide for v3, checked against https://chakra-ui.com/llms-full.txt on 2026-11-05; latest release 3.38.0._

## Install
Requires Node.js 20+. Framework guides exist for Next.js and Vite.
```bash
npm i @chakra-ui/react @emotion/react
npx @chakra-ui/cli snippet add      # adds the Provider, color-mode and other snippets to your repo
```

## Setup
Wrap the app with the generated provider (it composes `ChakraProvider` and `next-themes` for colour mode):
```tsx
import { Provider } from '@/components/ui/provider';
export default function RootLayout({ children }) {
  return <html suppressHydrationWarning><body><Provider>{children}</Provider></body></html>;
}
```

## Theme it to a brand
```ts
import { createSystem, defaultConfig } from '@chakra-ui/react';
export const system = createSystem(defaultConfig, {
  theme: { tokens: { fonts: { heading: { value: "'Figtree', sans-serif" }, body: { value: "'Figtree', sans-serif" } } } },
});
```
Pass it to `ChakraProvider value={system}` inside the provider, and run `npx @chakra-ui/cli typegen src/theme.ts` for typed tokens. Token values are always wrapped in `{ value: … }`.

## Agent tips
- MCP server: `npx -y @chakra-ui/react-mcp`.
- LLM docs: `https://chakra-ui.com/llms.txt` links to focused files (components, styling, theming, v3 migration). v3 differs from v2; don't use v2 examples.
- Chakra still uses Emotion at runtime today; check the docs before relying on zero-runtime styling.

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
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/chakra-ui.md_
