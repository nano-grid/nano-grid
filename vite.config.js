import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        js: 'src/nano-grid.js',
        css: 'src/nano-grid.css',
      },
      output: {
        entryFileNames: 'nano-grid.js',
        assetFileNames: 'nano-grid.css',
      },
      treeshake: false,
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})
