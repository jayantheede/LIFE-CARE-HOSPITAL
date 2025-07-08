import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LIFE-CARE-HOSPITAL/', // <== THIS is required for GitHub Pages
})
