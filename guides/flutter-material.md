---
writtenFor: "Flutter 3 (Material 3)"
platformSdk: true
written: 2026-11-05
verifiedAgainst: https://docs.flutter.dev/cookbook/design/themes
---
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
