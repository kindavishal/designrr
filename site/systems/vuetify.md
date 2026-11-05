# Vuetify

> Material-style Vue apps with a very complete component set.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **40/100** |
| Maintainer | Vuetify |
| Platforms | web |
| Frameworks | vue |
| Styling | css |
| Good for | admin, saas, dashboard |
| License | NOASSERTION |
| GitHub stars | 41.0k |
| npm weekly downloads | 1.3M (`vuetify`) |
| Last activity | 2026-11-03 |
| Docs | https://vuetifyjs.com |
| Source | https://github.com/vuetifyjs/vuetify |

## AI resources (use these first)
- **llms.txt:** https://vuetifyjs.com/llms.txt
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/vuetifyjs/vuetify/blob/HEAD/.claude/skills/playground/SKILL.md


## Install
```bash
npm create vuetify@latest        # scaffold
# existing: npm install vuetify @mdi/font  (+ vite-plugin-vuetify)
```

## Setup
```ts
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
export default createVuetify({ theme: { defaultTheme: 'light', themes: { light: { colors: { primary: '#4F46E5' } } } } });
```

## Agent tips
- `https://vuetifyjs.com/llms.txt` lists every component page.
- Use `v-data-table` (server variant for large data) instead of custom tables.

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
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent instructions in the repo (AGENTS.md, CLAUDE.md, cursor rules, skills) | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm. Notes: AI-readiness 40 < 45.

_Data refreshed 2026-11-05. Source: https://kindavishal.github.io/ai-ready-design-systems/systems/vuetify.md_
