/**
 * GlobalLayout
 *
 */

// import DrupalAttribute from 'drupal-attribute'

import GridPreview from './layout-grid.twig'
// import './page-wrapper.library.js' // << already included by .storybook/preview.js

import './preview.less'

export default {
  title: 'Global/Layout',
  parameters: {
    paddings: { disable: true }
  }
}

export const Layout = {
  render: GridPreview
}
