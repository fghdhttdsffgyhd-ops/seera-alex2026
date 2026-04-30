import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // المسار الصحيح للنشر على GitHub Pages
  base: '/seera-alex2026/',
  
  plugins: [react()],
  
  // هذا الجزء يعرّف رمز @ لكي لا تفشل ملفات React (مثل Hero.tsx) في العثور على الأزرار والمكونات
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
