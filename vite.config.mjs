import { defineConfig } from 'vite'
import { join } from 'node:path'
import lessPluginGlob from 'less-plugin-glob'
import twig from 'vite-plugin-twig-drupal'
import { glob } from 'glob'

// const variables = await glob('less/**/*.less')

export default defineConfig({
  build: {
    rollupOptions: {
      input: glob.sync('components/**/*.library.js'),
      // output: {
      //   dir: 'output',
      //   entryFileNames: '[name]/[name].js'
      // }
      // input: './src/media-video.library.js',
      output: {
        dir: 'output',
        format: 'iife',
        name: 'build',
        assetFileNames: '[name]/[name][extname]'
      },
      plugins: [
        styles({
          mode: ['extract'],
          less: {
            plugins: [lessPluginGlob]
          }
        }),
        nodeResolve(),
        commonjs(),
        nodePolyfills(),
        clear({
          targets: ['build']
        })
      ]
    }
  },
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, '/components')
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          plugins: [lessPluginGlob]
        },
        additionalData: glob
          .sync('less/**/*.less')
          .map(file => `@import '${file}';`)
          .join(' ')
      }
    }
  }
})
