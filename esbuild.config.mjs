import * as esbuild from 'esbuild'
import lessPluginGlob from 'less-plugin-glob'
import stylePlugin from 'esbuild-style-plugin'

await esbuild.build({
  entryPoints: ['./src/media-video.library.js'],
  bundle: true,
  outfile: 'build/main.js',
  sourcemap: true,
  plugins: [
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
