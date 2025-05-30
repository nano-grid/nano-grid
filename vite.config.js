import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    build: {
      sourcemap: true,
      target: 'esnext',
      assetsInlineLimit: 0,
      cssCodeSplit: true,
      minify: true,
      lib: {
        entry: ['src/index.js'],
        formats: ['es'],
        fileName: (format, entryName) => `${entryName}.js`,
      },
      rollupOptions: {
        input: {
          nanogrid: resolve(__dirname, 'src/nanogrid.js'),
          gcolors: resolve(__dirname, 'src/gcolors.js'),
          nanogrid_styles: resolve(__dirname, 'src/nanogrid_styles.css'),
        },
        output: {
          exports: 'named',
        },
      },
      emptyOutDir: true,
    },
  }
})
