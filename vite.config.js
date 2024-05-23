import { defineConfig } from "vite";

export default defineConfig({
  base: "/gamePortfolio/",
  build: {
    minify: "terser",
  },
});
