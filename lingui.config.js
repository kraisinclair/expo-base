import { defineConfig } from "@lingui/cli";
import { formatter } from "@lingui/format-po";

export default defineConfig({
  sourceLocale: "en",
  locales: ["en", "es"],
  fallbackLocales: {
    default: "en",
  },
  format: formatter({ lineNumbers: false }),
  formatOptions: {
    origins: false,
    lineNumbers: false,
  },
  compileNamespace: "es",
  catalogs: [
    {
      path: "<rootDir>/src/lib/translations/{locale}",
      include: ["src/app/**", "src/components/**"],
    },
  ],
});
