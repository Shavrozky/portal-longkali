import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Tailwind ditangani lewat pipeline PostCSS (tailwindcss.config.js + postcss.config.js).
export default defineConfig({
  plugins: [react()],
});
