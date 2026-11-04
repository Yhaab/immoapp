import { defineConfig } from "eslint/config";
import { createNextConfig } from "@repo/eslint-config/next";

export default defineConfig(createNextConfig(import.meta.dirname));
