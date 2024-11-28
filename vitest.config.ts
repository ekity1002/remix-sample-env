import dotenv from "dotenv";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: "vprisma",
    setupFiles: ["vitest-environment-vprisma/setup", "./vitest.setup.ts"],
    environmentOptions: {
      vprisma: {
        baseEnv: "jsdom",
        databaseUrl: process.env.DATABASE_URL,
      },
    },
    env: dotenv.config({ path: ".env.test" }).parsed,
  },
});
