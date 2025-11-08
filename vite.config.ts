import tailwindcss from "@tailwindcss/vite";
import path from "path";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    allowedHosts: ["bigger-designing-greg-binding.trycloudflare.com", "https://mobiles-dan-reproduction-murphy.trycloudflare.com"]
  },
  build: {
    target: "esnext",
    // assetsInlineLimit: 0, // Forces all assets to be separate files
  },
});
