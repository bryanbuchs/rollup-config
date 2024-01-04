// 'media-video/media-video.library.js'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import styles from 'rollup-styles'
import lessPluginGlob from 'less-plugin-glob'
import clear from 'rollup-plugin-clear'

// rollup.config.mjs
export default {
  input: './src/media-video.library.js',
  output: {
    dir: './build',
    format: 'iife',
    name: 'build',
    assetFileNames: '[name][extname]'
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
