import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  integrations: [react()], // 👈 aquí activamos React
  vite: {
    plugins: [tailwindcss()],
  },
});
