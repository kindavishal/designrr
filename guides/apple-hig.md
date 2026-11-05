---
writtenFor: "SwiftUI (iOS 26 SDK)"
platformSdk: true
written: 2026-11-05
verifiedAgainst: https://developer.apple.com/documentation/swiftui
---
## Install
Built into Xcode and SwiftUI; no dependency.

## Setup
Use system components and styles so the Human Interface Guidelines are followed automatically: `NavigationStack` / `NavigationSplitView`, `TabView`, `List`, `Form`, `.toolbar`, `.searchable`, `.buttonStyle(.borderedProminent)`, semantic colours (`Color.primary`, `Color(.systemBackground)`), Dynamic Type text styles (`.font(.headline)`) and SF Symbols.

## Theme it to a brand
Set `.tint(Color("Brand"))` at the root and define colours in the asset catalog with light and dark variants. Avoid fixed font sizes and custom navigation chrome.

## Agent tips
- Check the HIG page for a component before inventing a pattern.
- Test Dynamic Type, Dark Mode and VoiceOver in previews (`#Preview` with `.environment(\.dynamicTypeSize, .accessibility3)`).
