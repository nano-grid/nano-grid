import { defineConfig } from 'vite'
import { resolve } from 'path'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  build: {
    minify: false,

    rollupOptions: {
      treeshake: false,
      plugins: [
        terser({
          mangle: true,
          compress: false,
          keep_classnames: true,
          keep_fnames: true,
        })
      ],

      input: {
        nanogrid: resolve(__dirname, 'src/nanogrid.js'),
        gcolors: resolve(__dirname, 'src/gcolors.js'),
        nanogrid_styles: resolve(__dirname, 'src/nanogrid_styles.css'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].css',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})
