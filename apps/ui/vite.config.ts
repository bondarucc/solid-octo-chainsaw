import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@labels': path.resolve(import.meta.dirname, './src/LABELS'),
      '@types': path.resolve(import.meta.dirname, '../api/src/browserTypes'),
    },
  },
  // build: {
  //   outDir: "../api/dist/ui"
  // },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3535',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
