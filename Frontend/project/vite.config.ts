import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000', // Replace with your backend server URL
      changeOrigin: true,
    }
  },
  host: true,   // 👈 Expose to LAN (your 192.168.x.x)
  port: 5173,   // 👈 Optional: keep a fixed port
  },
})
