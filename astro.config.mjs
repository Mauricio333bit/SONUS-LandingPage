import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static", // Cambia esto de "server" a "static"
  // Elimina la línea del adaptador de netlify
});
