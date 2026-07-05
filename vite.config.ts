/// <reference types="vitest" />
import {cloudflare} from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from 'node:url'
import path from 'node:path'
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [cloudflare(), react(), svgr({include: '**/*.svg'}), tailwindcss()],
  resolve: {
    alias: {
      'redux/store': path.resolve(srcDir, 'redux/store'),
      pages: path.resolve(srcDir, 'pages'),
      containers: path.resolve(srcDir, 'containers'),
      shared: path.resolve(srcDir, 'shared'),
      locales: path.resolve(srcDir, 'locales'),
      assets: path.resolve(srcDir, 'assets')
    }
  },
  build: {
    outDir: './build',
    sourcemap: false
  }
})
