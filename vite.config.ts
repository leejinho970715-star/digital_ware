import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep the same BASE_PATH contract as the existing application.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/",
  build: { outDir: "out" },
});
