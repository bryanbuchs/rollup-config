import * as esbuild from 'esbuild'
import lessPluginGlob from 'less-plugin-glob'
import stylePlugin from 'esbuild-style-plugin'
import clean from "@akrc/esbuild-plugin-clean";

await esbuild.build({
  entryPoints: ['./src/**/*.library.js'],
  bundle: true,
  outdir: 'build',
  sourcemap: true,
  plugins: [
    clean(),
    stylePlugin({
      renderOptions: {
        lessOptions: {
          plugins: [lessPluginGlob]
        }
      },
      postcssConfigFile: true
    })
  ]
})
