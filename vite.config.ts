import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // تم تعديل المسار الأساسي ليتوافق مع اسم المستودع على GitHub لضمان تحميل الملفات بشكل صحيح
  base: '/seera-alex2026/',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
