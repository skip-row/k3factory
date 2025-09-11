import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname,'src'),
      'assets' : path.resolve(__dirname,'src/assets'),
      'components' : path.resolve(__dirname,'src/components'),
      'data' : path.resolve(__dirname,'src/data'),
      'font' : path.resolve(__dirname,'src/font'),
      'hook' : path.resolve(__dirname,'src/hook'),
      'layout' : path.resolve(__dirname,'src/layout'),
      'page' : path.resolve(__dirname,'src/page'),
      'service' : path.resolve(__dirname,'src/service'),
      'stores' : path.resolve(__dirname,'src/stores'),
      'styles' : path.resolve(__dirname,'src/styles')
    }
  }
})
