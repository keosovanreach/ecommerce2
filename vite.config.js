import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ecommerce2/", // MUST be your repo name
  plugins: [react()],
});
