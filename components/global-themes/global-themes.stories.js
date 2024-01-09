/**
 * GlobalThemes
 * Theme colors for components
 */

import Component from './global-themes.twig'
import './global-themes.library.js'

import './preview.less'

export default {
  title: 'Global/Themes',
  parameters: {}
}

export const GlobalThemes = {
  render: Component,
  name: 'Themes',
  args: {
    themes: ['olive', 'plum', 'lagunita']
  }
}
