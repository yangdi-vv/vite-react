import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }]
        ]
      }
    }),
    eslintPlugin({
      include: ['./*.{js,jsx,ts,tsx,cjs}', 'src/**/*.{js,jsx,ts,tsx,cjs}', 'src/*.{js,jsx,ts,tsx}']
    })]
})
