import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Movie-Challenge-Magenta/',
  plugins: [react()],
})
