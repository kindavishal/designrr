# Flutter Material 3

> Default choice for Flutter apps: Material 3 widgets ship with the SDK.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Google (org-backed) |
| Platforms | ios, android, web, desktop |
| Frameworks | flutter |
| Styling | native |
| Install | Ships with the platform SDK (requires: native-toolchain) |
| Good for | mobile, cross-platform, consumer; shapes: mobile-app |
| Dark mode / RTL | yes / yes |
| License | BSD-3-Clause |
| Last activity | 2026-11-05 |
| Docs | https://docs.flutter.dev/ui/design/material |
| Source | https://github.com/flutter/flutter |
| Same family | [Material Design 3 for Android (Compose)](material-android.md), [Angular Material](angular-material.md), [Material Web](material-web.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 181.1k | GitHub API (flutter/flutter) |
| GitHub forks | 32.8k | GitHub API |
| Contributors (incl. anonymous) | 2.5k | GitHub API |
| Issues closed / open | 104.0k / 12.8k (89% closed) | GitHub API |

## AI resources (use these first)
- **llms.txt:** https://docs.flutter.dev/llms.txt
- **MCP server:**
  - `dart mcp-server`
    ```json
    {"mcpServers":{"flutter-material":{"command":"dart","args":["mcp-server"]}}}
    ```
- **Agent/contributor docs in repo:** https://github.com/flutter/flutter/blob/HEAD/.agents/agents/reidbaker-agent/skills/code-review/SKILL.md


_Hand-written guide for Flutter 3 (Material 3), checked against https://docs.flutter.dev/cookbook/design/themes on 2026-11-05._

## Install
Material widgets ship with the Flutter SDK: `flutter create my_app`.

## Setup
```dart
MaterialApp(
  theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo)),
  darkTheme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo, brightness: Brightness.dark)),
  home: const HomePage(),
);
```
Material 3 is the default in current Flutter, so no flag is needed.

## Theme it to a brand
One seed colour generates the full Material 3 scheme; customise `textTheme` and component themes in `ThemeData`. Use `Cupertino*` widgets or `.adaptive` constructors where iOS fidelity matters.

## Agent tips
- Dart and Flutter MCP server (ships with the Dart SDK): `{"mcpServers": {"dart": {"command": "dart", "args": ["mcp-server"]}}}`. It lets agents analyse, run and hot-reload the app.
- Official agent skills: `npx skills add flutter/agent-plugins --skill '*'` and `npx skills add dart-lang/skills --skill '*'`.
- Docs index: `https://docs.flutter.dev/llms.txt`.

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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked. Notes: Platform-native system (ships with the SDK).

_Data refreshed 2026-11-05. Agent-readable source: https://designrr.vercel.app/systems/flutter-material.md_
