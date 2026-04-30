import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // المسار الصحيح للنشر على GitHub Pages
  base: '/seera-alex2026/',
  
  plugins: [react()],
});
