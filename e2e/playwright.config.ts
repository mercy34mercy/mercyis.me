import type { PlaywrightTestConfig } from "@playwright/test";

const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction ? "https://apple-yagi.me" : "http://127.0.0.1:8787";

// https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  webServer: isProduction
    ? undefined
    : {
        command: "cd .. && pnpm dev",
        port: 8787,
        reuseExistingServer: true,
      },
  use: {
    baseURL,
    video: "on",
  },
  retries: 1,
  reporter: process.env.CI ? "github" : "list",
};

export default config;
