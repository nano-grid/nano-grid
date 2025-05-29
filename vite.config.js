import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        js: 'src/nano-grid.js',
        css: 'src/nano-grid.css',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].css',
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})
