# shadcn_ui (Flutter)

> shadcn/ui look and component set for Flutter apps.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | Community |
| Platforms | ios, android, web, desktop |
| Frameworks | flutter |
| Styling | native |
| Install | Flutter package (pub.dev) (requires: native-toolchain) |
| Good for | saas, startup-mvp |
| Dark mode / RTL | not detected / not detected |
| License | MIT |
| GitHub stars | 2.8k |
| pub.dev likes | 971 (`shadcn_ui`) |
| Last activity | 2026-10-30 |
| Docs | https://flutter-shadcn-ui.mariuti.com |
| Source | https://github.com/nank1ro/flutter-shadcn-ui |
| Same family | [shadcn/ui](shadcn-ui.md), [shadcn-vue](shadcn-vue.md), [Zard UI (shadcn for Angular)](zardui.md), [shadcn-svelte](shadcn-svelte.md), [Spartan (shadcn for Angular)](spartan.md), [React Native Reusables](rn-reusables.md) |

## AI resources (use these first)
- **llms.txt:** https://flutter-shadcn-ui.mariuti.com/llms.txt
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/nank1ro/flutter-shadcn-ui/blob/HEAD/skills/shadcn-ui-flutter/SKILL.md


_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
flutter pub add shadcn_ui
```

## Agent tips
- Read https://flutter-shadcn-ui.mariuti.com/llms.txt first. It indexes the official docs in markdown.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, pub.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/shadcn-flutter-ui.md_
