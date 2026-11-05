# Fluent UI for Flutter

> Windows 11 Fluent look for Flutter desktop apps.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **20/100** |
| Maintainer | Community |
| Platforms | windows, desktop |
| Frameworks | flutter |
| Styling | native |
| Install | Flutter package (pub.dev) (requires: native-toolchain) |
| Good for | desktop, productivity |
| Dark mode / RTL | yes / not detected |
| License | BSD-3-Clause |
| Last activity | 2026-11-04 |
| Docs | https://bdlukaa.github.io/fluent_ui/ |
| Source | https://github.com/bdlukaa/fluent_ui |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 3.5k | GitHub API (bdlukaa/fluent_ui) |
| GitHub forks | 512 | GitHub API |
| Contributors (incl. anonymous) | 124 | GitHub API |
| Issues closed / open | 815 / 22 (97% closed) | GitHub API |
| pub.dev likes | 3.2k | pub.dev (`fluent_ui`) |
| pub.dev downloads (30 days) | 3.6k | pub.dev |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/bdlukaa/fluent_ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- you rely on agent tooling. This system has few machine-readable resources.

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
```bash
flutter pub add fluent_ui
```

## Agent tips
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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, pub. Notes: AI-readiness 20 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/fluent-ui-flutter.md_
