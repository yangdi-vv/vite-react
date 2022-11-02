import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['./*.{js,jsx,ts,tsx,cjs}', 'src/**/*.{js,jsx,ts,tsx,cjs}', 'src/*.{js,jsx,ts,tsx}']
    })]
})
