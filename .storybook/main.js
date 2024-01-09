import path from 'path'

const config = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    'storybook-addon-paddings'
  ],
  staticDirs: ['../images'],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src')
    }
  }
}
export default config
