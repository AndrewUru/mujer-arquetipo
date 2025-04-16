import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless"; // 👈 esto es lo importante
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  integrations: [react()],
  adapter: vercel(), // 👈 aquí se activa el adaptador
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
