---
writtenFor: "9"
written: 2026-11-05
verifiedAgainst: https://ionicframework.com/docs/react/quickstart.md
---
## Install
```bash
npm install -g @ionic/cli
ionic start myApp tabs --type=react     # or --type=angular / --type=vue
cd myApp && ionic serve
```
Native shells via Capacitor (Ionic 9 supports Capacitor 7+): `npx cap add ios` and `npx cap add android`.

## Theme it to a brand
Set the colour variables (`--ion-color-primary`, its `-rgb`, `-contrast`, `-shade` and `-tint` variants) in your theme CSS file; the colour generator in the docs produces the full set from one hex. Dark mode: import one of `@ionic/<framework>/css/palettes/dark.system.css` (follows the OS), `dark.class.css` (toggle with a class) or `dark.always.css`.

## Agent tips
- Components adapt to iOS and Material styling automatically per platform.
- Keep the `IonPage` / `IonHeader` / `IonContent` structure on every page, or navigation transitions break.
- Upgrading an older app: `npx @ionic/migrate` applies Ionic 9's breaking changes and lists what is left. Angular 18–22 are supported.
- Docs index for LLMs: `https://ionicframework.com/docs/llms.txt`; pages have `.md` versions.
