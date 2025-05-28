import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aal/',  // имя репозитория на GitHub (важно с / в начале и конце)
  plugins: [react()],
})
