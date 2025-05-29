import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // js: 'src/nano-grid.js',
        css: 'src/nano-grid.css',
      },
      output: {
        // entryFileNames: 'nano-grid.js',
        assetFileNames: 'nano-grid.css',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})
