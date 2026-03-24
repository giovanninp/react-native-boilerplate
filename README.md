# 🚀 Expo & React Native Boilerplate

This is our base repository for React Native projects using **Expo**. It comes pre-configured with the best practices for linting, formatting, git hooks, and a scalable folder structure so you don't have to reinvent the wheel every time.

## 🛠 Tech Stack

* **Framework:** React Native 0.83 + Expo 55
* **Language:** TypeScript
* **Routing:** Expo Router (File-based routing with protected and public routes)
* **Animations:** React Native Reanimated
* **Standardization:** ESLint, Prettier + `eslint-plugin-simple-import-sort` (for auto-sorting imports)
* **Git Hooks:** Lefthook (Pre-commit with staged linting, Pre-push with package audit)
* **CI/CD:** GitHub Actions pre-configured for Node build tests.

## 📂 Folder Structure

The project architecture was designed to isolate routing logic from dumb/reusable UI components.

```text
├── .github/workflows/  # CI/CD pipelines
├── code/
│   ├── app/            # Application routes (Expo Router)
│   │   ├── (protected) # Routes requiring authentication (e.g., Home)
│   │   └── (public)    # Unrestricted routes (e.g., Login)
│   ├── src/
│   │   └── shared/     # Shared code across screens
│   │       ├── components/ # Reusable UI components
│   │       ├── constants/  # Global constants, themes, and colors
│   │       └── hooks/      # Global custom hooks
│   ├── .nvmrc          # Project's default Node version
│   ├── app.json        # Expo config (Bundle ID, icons, splash screen)
│   └── package.json
```

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you are using the required Node version for this project (we recommend using NVM):
```bash
nvm use
```

### 2. Installation
Navigate to the source folder and install dependencies using **Yarn**:
```bash
cd code
yarn install
```

The `prepare` script in `package.json` will automatically install **Lefthook** in the repository root to ensure your commits are verified.

### 3. Running the Project
To start the Expo bundler:
```bash
yarn start
```
From there, you can press `i` to open the iOS simulator, `a` for the Android emulator, or use the Expo Go app on your phone by scanning the QR Code.

## 📜 Useful Scripts

* `yarn lint`: Runs ESLint across the entire project to catch issues.
* `yarn doctor`: Runs `expo-doctor` to ensure there are no version conflicts within Expo dependencies.
* `yarn audit:prod`: Checks for high-level vulnerabilities only in production dependencies (runs automatically on `pre-push`).

## ⚠️ Attention when starting a new project
1. Change the `bundleIdentifier` (iOS) and `package` (Android) in the `app.json` file from `com.anonymous.app` to your app's actual ID.
2. Update the project name in both `app.json` and `package.json`.
