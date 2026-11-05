# Material Design 3 for Android (Compose)

> Native Android apps: Compose Material 3 is the platform default.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **20/100** |
| Maintainer | Google (org-backed) |
| Platforms | android |
| Frameworks | jetpack-compose, android-views |
| Styling | native |
| Install | Ships with the platform SDK (requires: native-toolchain) |
| Good for | mobile, consumer; shapes: mobile-app |
| Dark mode / RTL | yes / not detected |
| License | Apache-2.0 |
| Last activity | 2026-10-16 |
| Docs | https://m3.material.io |
| Source | https://github.com/material-components/material-components-android |
| Same family | [Flutter Material 3](flutter-material.md), [Angular Material](angular-material.md), [Material Web](material-web.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 17.4k | GitHub API (material-components/material-components-android) |
| GitHub forks | 3.2k | GitHub API |
| Contributors (incl. anonymous) | 244 | GitHub API |
| Issues closed / open | 2.9k / 683 (81% closed) | GitHub API |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- you rely on agent tooling. This system has few machine-readable resources.

_Hand-written guide for Compose Material 3, checked against https://developer.android.com/develop/ui/compose/designsystems/material3 on 2026-11-05._

## Install
```kotlin
// app/build.gradle.kts
val composeBom = platform("androidx.compose:compose-bom:<latest>")
implementation(composeBom)
implementation("androidx.compose.material3:material3")
```
The BOM keeps all Compose library versions aligned; check the Compose BOM page for the latest version.

## Setup
```kotlin
MaterialTheme(
  colorScheme = when {
    dynamicColor && darkTheme -> dynamicDarkColorScheme(LocalContext.current)
    dynamicColor && !darkTheme -> dynamicLightColorScheme(LocalContext.current)
    darkTheme -> DarkColorScheme
    else -> LightColorScheme
  },
  typography = AppTypography,
) { App() }
```
Dynamic colour is available on Android 12+.

## Theme it to a brand
Generate `LightColorScheme`, `DarkColorScheme` and typography from brand colours with Material Theme Builder, which exports Compose theme code (`Color.kt`, `Theme.kt`, `Type.kt`).

## Agent tips
- Use `Scaffold`, `TopAppBar` and the navigation components (`NavigationBar`, `NavigationSuiteScaffold`) for adaptive layouts.

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
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, orgBacked. Notes: Platform-native system (ships with the SDK).

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/material-android.md_
