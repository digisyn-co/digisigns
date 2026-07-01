import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Production domain confirmed 2026-07-02. Used for canonical URLs and
// (later) sitemap generation.
export default defineConfig({
  site: "https://designs.digisyn.co",
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
