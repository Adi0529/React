import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mpeg', '**/*.mp3'], // This tells Vite these are assets, not JS
})
