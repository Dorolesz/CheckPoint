import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // ugyanaz, mint '0.0.0.0'
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
