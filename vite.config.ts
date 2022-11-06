import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    https: false,
    open: true,
    port: 5173,
    hmr: true
  },
  plugins: [react()]
})
