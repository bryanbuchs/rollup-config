import * as esbuild from 'esbuild'
import lessPluginGlob from 'less-plugin-glob'
import stylePlugin from 'esbuild-style-plugin'
import clean from "@akrc/esbuild-plugin-clean";

import { glob } from 'glob'

const variables = await glob('./less/**/*.less')

await esbuild.build({
  entryPoints: ['./components/**/*.library.js'],
  bundle: true,
  outdir: 'build',
  sourcemap: true,
  plugins: [
    clean(),
    stylePlugin({
      renderOptions: {
        lessOptions: {
          plugins: [lessPluginGlob]
        },
        additionalData: variables.map(file => `@import '${file}';`).join(' ')
      },
      postcssConfigFile: true
    })
  ]
})
