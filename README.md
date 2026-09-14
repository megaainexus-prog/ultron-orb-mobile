# ULTRON Orb UI - Native Android APK

Iron Man-inspired holographic orb built with Expo, React Native, and Three.js.

## Quick Start

```bash
npm install
eas login
npm run build:android
```

## Build APK

```bash
npm run build:android
```

Wait 10-15 minutes for the build to complete. Download link will appear in terminal.

## Install on Phone

1. Download APK from build link
2. Transfer to Android phone
3. Open file manager and tap APK
4. Tap Install
5. Launch ULTRON

## Features

- 3D wireframe orb with Three.js
- Real-time WebGL rendering
- Camera-ready for hand gesture tracking
- Native Android performance

## Requirements

- Node.js 18+
- Expo Account (free at https://expo.dev)
- EAS CLI: `npm install -g eas-cli`

## Development

```bash
npm start
npm run android
```

## Customization

Edit `App.tsx` to:
- Change orb color (0xffb81c)
- Adjust particle effects
- Modify animation speed
- Add hand tracking

## Troubleshooting

**Build fails?**
```bash
eas build --platform android --clean
```

**More info:**
- Expo: https://docs.expo.dev
- React Native: https://reactnative.dev
- Three.js: https://threejs.org

---

Build your ULTRON today! 🚀
