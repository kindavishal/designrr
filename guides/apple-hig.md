---
writtenFor: "iOS 26 SDK / SwiftUI"
platformSdk: true
written: 2026-11-05
---
## Install
Built into Xcode / SwiftUI — no dependency.

## Setup
Use system components and styles so the HIG is followed automatically: `NavigationStack`, `TabView`, `List`, `Form`, `.toolbar`, `.searchable`, `Button(...).buttonStyle(.borderedProminent)`, semantic colours (`Color.primary`, `.secondary`, `Color(.systemBackground)`), Dynamic Type text styles (`.font(.headline)`), SF Symbols.

## Theme it to a brand
Set `.tint(Color("Brand"))` at the root and define colours in the asset catalog with light/dark variants. Avoid fixed font sizes and custom navigation chrome.

## Agent tips
- Check Apple's HIG page for the component before inventing a pattern.
- Test Dynamic Type, Dark Mode and VoiceOver in previews (`#Preview` with `.environment(\.dynamicTypeSize, .accessibility3)`).
