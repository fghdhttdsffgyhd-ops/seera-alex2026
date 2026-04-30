import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // استخدام مسار أساسي فارغ أو نسبي لضمان عمل الروابط والملفات بشكل صحيح في أي مسار استضافة (مثل GitHub Pages)
  base: './',
  plugins: [inspectAttr(), react()],
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
