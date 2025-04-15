import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
      // Force generation of the legacy bundle even if no real usage
      renderLegacyChunks: true,
    }),
  ],
  // If you want to explicitly list which core-js modules:
  // polyfills: [
  //   'es.promise',
  //   'es.array.iterator',
  //   'es.promise.finally',
  // ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // If the module is in node_modules, put it into a vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
