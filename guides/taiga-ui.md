---
writtenFor: "5"
written: 2026-11-05
verifiedAgainst: https://taiga-ui.dev/getting-started.md
---
## Install
The schematic installs packages and configures styles, assets and providers:
```bash
ng add taiga-ui            # Angular CLI
# Nx: npm i taiga-ui && nx g taiga-ui:ng-add
```
Manual: `npm i @taiga-ui/{cdk,core,kit,icons}` plus add-ons as needed (`@taiga-ui/addon-charts`, `addon-table`, `addon-commerce`, `addon-mobile`, `layout`).

## Setup
```ts
// main.ts
import { provideTaiga } from '@taiga-ui/core';
bootstrapApplication(App, { providers: [provideTaiga()] });
```
```ts
// app component
import { TuiRoot } from '@taiga-ui/core';
@Component({ selector: 'app-root', imports: [TuiRoot], template: `<tui-root><!-- app --></tui-root>` })
export class App {}
```
Manual installs also add `@taiga-ui/styles/taiga-ui-theme.less` and `taiga-ui-fonts.less` to the build `styles`, and copy `@taiga-ui/icons/src` to `assets/taiga-ui/icons`.

## Theme it to a brand
Override Taiga's CSS variables (`--tui-background-accent-1`, `--tui-text-primary`, …) in a global stylesheet.

## Agent tips
- MCP server: `npx @taiga-ui/mcp init` scaffolds the config for your agent (`--client <client>` to choose one). Docs index: `https://taiga-ui.dev/llms.txt`.
