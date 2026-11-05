---
writtenFor: "5"
written: 2026-11-05
verifiedAgainst: https://gluestack.io/llms-full.txt
---
## Install
```bash
npx gluestack-ui init                  # prompts for a styling engine: NativeWind v5 or UniWind (Expo only)
npx gluestack-ui add button input modal
# or every component: npx gluestack-ui add --all
```
`init` writes `gluestack-ui.config.json`, adds `GluestackUIProvider` and the core components (icon, overlay, toast), installs dependencies and updates `metro.config.js`, `babel.config.js`, `global.css` and your entry file. Monorepos: `npx gluestack-ui init --monorepo --path packages/ui`.

## How it works
Copy-paste components (shadcn-style) for React Native and web, styled with Tailwind CSS v4 classes. Works with Expo, React Native CLI and Next.js.

## Setup
Wrap the app in the generated provider: `<GluestackUIProvider mode="light">{children}</GluestackUIProvider>` (`mode` can follow your colour-mode state).

## Theme it to a brand
v5 has no `tailwind.config.js`: theme tokens are shadcn-style semantic variables defined in `global.css`. Edit those for light and dark.

## Agent tips
- Upgrading from v4 or earlier: `npx gluestack-ui@latest upgrade` detects the version and migrates to your chosen engine.
- Full docs for LLMs: `https://gluestack.io/llms-full.txt` (index at `https://gluestack.io/llms.txt`).
