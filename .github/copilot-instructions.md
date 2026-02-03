# Copilot Instructions for AI Agents

## Project Overview
- **Type:** Expo React Native app using TypeScript, [expo-router](https://docs.expo.dev/router/introduction/) for file-based routing, and modular components.
- **Key Directories:**
  - `app/`: All screens and routes. Uses nested folders for route groups (e.g., `(auth)`, `(tabs)`).
  - `components/`: Reusable UI components (e.g., `button.tsx`, `Signupform.tsx`, `ImageViewer.tsx`).
  - `assets/images/`: App images and icons.
  - `scripts/`: Utility scripts (e.g., `reset-project.js`).
  - `constants/`, `hooks/`: Reserved for shared logic and values.

## Architecture & Patterns
- **Routing:**
  - File-based, powered by `expo-router`. Folders in `app/` with parentheses (e.g., `(auth)`) are route groups, not part of the URL.
  - Special files: `_layout.tsx` (layout for a group), `+not-found.tsx` (custom 404), `index.tsx` (default route).
- **Component Usage:**
  - Components are imported using `@/components/...` (see `tsconfig.json` paths).
  - UI is built with React Native primitives and Expo libraries.
- **Forms:**
  - Uses `formik` and `yup` for validation (see `Signupform.tsx`).
- **Styling:**
  - Inline styles via `StyleSheet.create`.
  - Dark backgrounds (`#25292e`) are common for main screens.

## Developer Workflows
- **Install dependencies:**
  - `npm install`
- **Start development server:**
  - `npx expo start` (see `README.md`)
  - Use `npm run android`, `npm run ios`, or `npm run web` for platform-specific launch.
- **Linting:**
  - `npm run lint` (uses `eslint-config-expo`)
- **Reset project to blank state:**
  - `npm run reset-project` (moves current code to `app-example/` and creates a fresh `app/`)

## Conventions & Tips
- **TypeScript strict mode** is enabled.
- **Path aliases:** Use `@/` for root imports (see `tsconfig.json`).
- **Expo plugins:** See `app.json` for enabled plugins (e.g., splash screen, router).
- **No backend/API integration** is present by default; all data is local.
- **Do not edit files in `app-example/`** (if present)—this is a backup from the reset script.
- **VS Code:** `.vscode/extensions.json` recommends the Expo extension; `.vscode/settings.json` enforces code actions on save.

## Examples
- **Add a new screen:** Create a new file in `app/(tabs)/newScreen.tsx` and it will be routed automatically.
- **Use a component:** `import Button from '@/components/button'`
- **Custom 404:** Edit `app/+not-found.tsx` for not-found handling.

## References
- [Expo Docs](https://docs.expo.dev/)
- [expo-router Docs](https://docs.expo.dev/router/introduction/)

---

If you update project structure or conventions, update this file to keep AI agents productive.
