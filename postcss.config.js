module.exports = {
  plugins: [
    require('postcss-inline-svg')({
      paths: ['node_modules', 'images']
    }),
    require('autoprefixer')
  ]
}
