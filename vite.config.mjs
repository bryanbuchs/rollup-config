import { defineConfig } from 'vite'
import { join } from 'node:path'
import lessPluginGlob from 'less-plugin-glob'
import twig from 'vite-plugin-twig-drupal'

import { glob } from 'glob'

const variables = await glob('./less/**/*.less')

export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     input: './components/**/*.library.js',
  //   },
  // },
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
        additionalData: variables.map(file => `@import '${file}';`).join(' ')
      }
    }
  }
})
