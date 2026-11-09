# Apple Human Interface Guidelines + SwiftUI

> Native iOS / macOS apps: SwiftUI system components follow the HIG for free.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **15/100** |
| Maintainer | Apple (org-backed) |
| Platforms | ios, ipados, macos, watchos, visionos |
| Frameworks | swiftui, uikit |
| Styling | native |
| Install | Ships with the platform SDK (requires: native-toolchain) |
| Good for | mobile, consumer, apple-ecosystem; shapes: mobile-app |
| Dark mode / RTL | yes / not detected |
| License | — |
| Last activity | — |
| Docs | https://developer.apple.com/design/human-interface-guidelines |

## Public usage & feedback
No public usage numbers available (no public repo or package). Collected 2026-11-09.

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- you are not building inside the apple ecosystem.
- you rely on agent tooling. This system has few machine-readable resources.

_Hand-written guide for SwiftUI (iOS 26 SDK), checked against https://developer.apple.com/documentation/swiftui on 2026-11-05._

## Install
Built into Xcode and SwiftUI; no dependency.

## Setup
Use system components and styles so the Human Interface Guidelines are followed automatically: `NavigationStack` / `NavigationSplitView`, `TabView`, `List`, `Form`, `.toolbar`, `.searchable`, `.buttonStyle(.borderedProminent)`, semantic colours (`Color.primary`, `Color(.systemBackground)`), Dynamic Type text styles (`.font(.headline)`) and SF Symbols.

## Theme it to a brand
Set `.tint(Color("Brand"))` at the root and define colours in the asset catalog with light and dark variants. Avoid fixed font sizes and custom navigation chrome.

## Agent tips
- Check the HIG page for a component before inventing a pattern.
- Test Dynamic Type, Dark Mode and VoiceOver in previews (`#Preview` with `.environment(\.dynamicTypeSize, .accessibility3)`).

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
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via orgBacked. Notes: Platform-native system (ships with the SDK).

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/apple-hig.md_
