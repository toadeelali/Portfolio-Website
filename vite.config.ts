import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    tsconfigPaths: true
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'
  }
})
