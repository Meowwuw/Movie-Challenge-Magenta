import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.jsx', // Reemplaza '/path/to/your/main.jsx' con la ruta real a tu archivo 'main.jsx'
    },
  },
})
