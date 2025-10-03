import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Update the base path to your repository name
export default defineConfig({
  plugins: [react()],
  base: '/resume/',   // 👈 very important (matches your repo name)
})
