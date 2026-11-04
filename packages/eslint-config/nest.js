import tseslint from "typescript-eslint";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

import { typescriptRules } from "./base.js";

export function createNestConfig(tsconfigRootDir) {
  return [
    {
      ignores: ["dist/**", "coverage/**"],
    },
    {
      files: ["**/*.ts"],
      extends: [tseslint.configs.recommendedTypeChecked],
      languageOptions: {
        globals: globals.node,
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
      rules: {
        ...typescriptRules,
        "@typescript-eslint/no-floating-promises": "error",
      },
    },
    eslintConfigPrettier,
  ];
}
