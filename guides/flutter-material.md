---
writtenFor: "Flutter 3 (Material 3)"
platformSdk: true
written: 2026-11-05
---
## Install
Ships with the Flutter SDK — no package needed. `flutter create my_app`.

## Setup
```dart
MaterialApp(
  theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF4F46E5)), useMaterial3: true),
  darkTheme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF4F46E5), brightness: Brightness.dark)),
  home: const HomePage(),
);
```

## Agent tips
- One seed colour generates the full M3 palette; customise `textTheme` with `google_fonts`.
- Use `Cupertino*` widgets or `.adaptive` constructors where iOS fidelity matters.
- The Dart & Flutter MCP server (`dart mcp-server`, Dart SDK 3.9+) lets agents analyse, run and hot-reload the app.
