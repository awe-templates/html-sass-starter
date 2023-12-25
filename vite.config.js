import { defineConfig } from "vite";

export default defineConfig({
  // Base public path (default is '/')
  base: "/",

  // Development server configurations
  server: {
    port: 3000,
  },

  // Build configurations
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild",
  },
});
