## Install
```bash
npm install -g @ionic/cli
ionic start myApp tabs --type=react     # or angular / vue
npx cap add ios && npx cap add android  # native shells via Capacitor
```

## Theme it to a brand
CSS variables in `src/theme/variables.css` (`--ion-color-primary`, …). Components adapt to iOS vs Material mode automatically.

## Agent tips
- Use `IonPage`, `IonHeader`, `IonContent` structure on every page or navigation transitions break.
