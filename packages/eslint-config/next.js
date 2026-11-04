import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";

import { typescriptRules } from "./base.js";

export function createNextConfig(rootDir) {
  return [
    ...nextVitals,
    ...nextTs,
    {
      settings: {
        next: {
          rootDir,
        },
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      rules: typescriptRules,
    },
    {
      ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    },
    eslintConfigPrettier,
  ];
}
