# Ant Design

> Data-dense enterprise and back-office apps (tables, forms, workflows) in React.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | Ant Group (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | css-in-js |
| Good for | enterprise, admin, dashboard, data-dense, b2b |
| License | MIT |
| GitHub stars | 100.1k |
| npm weekly downloads | 5.0M (`antd`) |
| Last activity | 2026-11-05 |
| Docs | https://ant.design |
| Source | https://github.com/ant-design/ant-design |

## AI resources (use these first)
- **llms.txt:** https://ant.design/llms.txt
- **llms-full.txt:** https://ant.design/llms-full.txt
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/ant-design/ant-design/blob/HEAD/.agents/skills/changelog-collect/SKILL.md

## Consider an alternative if
- you need zero-runtime styling or heavy React Server Components use — check the docs for RSC support.

## Install
```bash
npm install antd @ant-design/icons
# Next.js App Router: npm install @ant-design/nextjs-registry
```

## Setup
```tsx
import { ConfigProvider, App as AntApp, theme } from 'antd';
<ConfigProvider theme={{ token: { colorPrimary: '#1677ff', borderRadius: 8, fontFamily: 'Inter' },
  algorithm: theme.defaultAlgorithm /* or theme.darkAlgorithm / compactAlgorithm */ }}>
  <AntApp>{/* app */}</AntApp>
</ConfigProvider>
```

## Theme it to a brand
Design tokens (`token`) for globals, `components: { Button: { … } }` for per-component tokens. `compactAlgorithm` for dense back-office screens.

## Agent tips
- Read `https://ant.design/llms.txt` (and `llms-full.txt`) — official, per-component markdown docs.
- For admin apps use ProComponents (`@ant-design/pro-components`): ProTable, ProForm, ProLayout save a lot of code.
- Use `Form` with `rules` for validation rather than custom state.

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
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/ant-design.md_
