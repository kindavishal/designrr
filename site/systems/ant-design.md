# Ant Design

> Data-dense enterprise and back-office apps (tables, forms, workflows) in React.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | Ant Group (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | enterprise, admin, dashboard, data-dense, b2b; shapes: app-dashboard, forms-flows |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 48.3k KB |
| License | MIT |
| Last activity | 2026-11-05 |
| Docs | https://ant.design |
| Source | https://github.com/ant-design/ant-design |
| Same family | [NG-ZORRO](ng-zorro.md), [Ant Design Vue](ant-design-vue.md), [Ant Design Pro Components](pro-components.md), [Ant Design Mobile](ant-design-mobile.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 100.1k | GitHub API (ant-design/ant-design) |
| GitHub forks | 54.6k | GitHub API |
| Contributors (incl. anonymous) | 2.8k | GitHub API |
| Issues closed / open | 31.9k / 971 (97% closed) | GitHub API |
| npm weekly downloads | 5.1M | npm (`antd` 6.7.0) |

## AI resources (use these first)
- **llms.txt:** https://ant.design/llms.txt
- **llms-full.txt:** https://ant.design/llms-full.txt
- **MCP server:**
  - `npx -y @ant-design/cli mcp`
    ```json
    {"mcpServers":{"ant-design":{"command":"npx","args":["-y","@ant-design/cli","mcp"]}}}
    ```
- **Agent/contributor docs in repo:** https://github.com/ant-design/ant-design/blob/HEAD/.github/copilot-instructions.md

## Consider an alternative if
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you need zero-runtime styling or heavy React Server Components use. Check the docs for RSC support.

_Hand-written guide for v6, checked against https://ant.design/docs/react/getting-started.md on 2026-11-05; latest release 6.7.0._

## Install
```bash
npm install antd @ant-design/icons
# Next.js App Router: npm install @ant-design/nextjs-registry
```
antd 6 needs React 18 or newer and `@ant-design/icons` 6 (icons 6 does not work with antd 5).

## Setup
```tsx
import { ConfigProvider, App as AntApp, theme } from 'antd';
<ConfigProvider theme={{
  token: { colorPrimary: '#1677ff', borderRadius: 8, fontFamily: 'Inter' },
  algorithm: theme.defaultAlgorithm, // or theme.darkAlgorithm, theme.compactAlgorithm, or an array of them
}}>
  <AntApp>{/* app */}</AntApp>
</ConfigProvider>
```
Next.js App Router: wrap `{children}` in `app/layout.tsx` with `<AntdRegistry>` from `@ant-design/nextjs-registry`.

## Theme it to a brand
Global design tokens in `token`, per-component tokens in `components: { Button: { … } }`. Use `compactAlgorithm` for dense back-office screens.

## Agent tips
- antd 6 changed and deprecated many props (for example `Alert` `message` → `title`, `closeText` → `closable`). Don't trust v5 examples from memory.
- MCP server via the official CLI: `npx -y @ant-design/cli mcp`. The CLI also works offline: `antd info Button`, `antd doc Button`, `antd token DatePicker`.
- Agent skill: `npx skills add ant-design/ant-design-cli`. Docs for agents: `https://ant.design/docs/react/for-agents.md` and `https://ant.design/llms.txt`.
- For admin apps use ProComponents (`@ant-design/pro-components`): ProTable, ProForm and ProLayout save a lot of code.

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
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/ant-design.md_
