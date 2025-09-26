// eslint.config.js
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = defineConfig([
  expoConfig,
  { ignores: ["dist/*"] },
  {
    // (optional) scope to certain files
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "react-hooks": reactHooks }, // ensure plugin is available in this item
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/display-name": "off",
      "import/no-cycle": "off",
    },
  },
]);
