## Install
```kotlin
// build.gradle.kts
implementation(platform("androidx.compose:compose-bom:<latest>"))
implementation("androidx.compose.material3:material3")
```

## Setup
```kotlin
MaterialTheme(colorScheme = if (isSystemInDarkTheme()) darkScheme else lightScheme, typography = AppTypography) { App() }
```
Generate `lightScheme`/`darkScheme` and typography from a brand colour with Material Theme Builder (exports Compose code). Support dynamic colour on Android 12+ with `dynamicLightColorScheme(context)`.

## Agent tips
- Use `Scaffold`, `TopAppBar`, `NavigationBar`/`NavigationSuiteScaffold` for adaptive layouts.
