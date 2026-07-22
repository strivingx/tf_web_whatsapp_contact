import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wa/manager/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/wa/manager/api": "http://127.0.0.1:8003"
    }
  },
  build: {
    outDir: "dist"
  }
});
