import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '3679-200-12-169-184.ngrok-free.app',
    ],
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
