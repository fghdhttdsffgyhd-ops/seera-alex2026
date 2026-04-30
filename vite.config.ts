import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // المسار الصحيح لضمان عمل الروابط والملفات بشكل صحيح على مسار GitHub Pages
  base: '/seera-alex2026/',
  
  plugins: [react()],
  
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: {
      clientPort: 443,
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
