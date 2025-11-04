import expoConfig from "eslint-config-expo/flat";
import linguiConfig from "eslint-plugin-lingui/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactCompiler from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist/*",
    "node_modules",
    "__tests__/",
    "coverage",
    ".expo",
    ".expo-shared",
    "android",
    "ios",
    ".vscode",
    "docs/",
    "cli/",
    "expo-env.d.ts",
  ]),
  expoConfig,
  linguiConfig,
  eslintPluginPrettierRecommended,
  ...tailwind.configs["flat/recommended"],
  reactCompiler.configs.recommended,
]);
