import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// NOTE: update `site` once the production domain is confirmed.
// This is used for canonical URLs and (later) sitemap generation.
export default defineConfig({
  site: "https://example.com",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind({
      // We ship our own base layer (Tailwind preflight) via src/styles/global.css,
      // applyBaseStyles stays default (true) — no per-template CSS resets needed.
      configFile: "./tailwind.config.mjs",
    }),
  ],
});
