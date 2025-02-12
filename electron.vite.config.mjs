import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      // Add your app icons here
      appIcon: resolve(__dirname, 'assests/icons/mono.ico'), // Windows icon
      mac: {
        icon: resolve(__dirname, 'assets/icons/icon.icns')  // macOS icon
      },
      linux: {
        icon: resolve(__dirname, 'assets/icons/icon.png')  // Linux icon
      },
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      react(),
      tailwindcss()   // TailwindCSS plugin for the renderer process
    ]
  }
})
