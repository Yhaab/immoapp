import { defineConfig } from "eslint/config";
import { createNestConfig } from "@repo/eslint-config/nest";

export default defineConfig(createNestConfig(import.meta.dirname));
