---
writtenFor: "Compose Material 3"
platformSdk: true
written: 2026-11-05
verifiedAgainst: https://developer.android.com/develop/ui/compose/designsystems/material3
---
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
