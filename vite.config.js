import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ecommerce2/",
  plugins: [tailwindcss()],
});
