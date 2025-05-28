import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/оо/', // должно быть точно так же, как название репозитория на GitHub
  plugins: [react()]
})
