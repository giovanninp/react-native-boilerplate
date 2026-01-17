// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // `react` and packages starting with a character (or digit or underscore), or `@` followed by a character.
            ["^@?\\w"],
            // Packages starting with `@` (scoped packages).
            ["^@"],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            ["^"],
            // Relative imports (within the project).
            ["^\\./(?=.*\\/)(?!/?$)", "^\\.\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.s?css$"],
            // Side effect imports.
            ["^\\u0000"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
]);
