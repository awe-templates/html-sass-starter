import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import Checker from "vite-plugin-checker";

const { resolve } = require('path')

export default defineConfig({
  // Plugins
  plugins: [
    Checker({ typescript: true }),
  ],

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

  // CSS configurations
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },

  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      nested: resolve(__dirname, '/src/pages/home.html')
    }
  }
});
