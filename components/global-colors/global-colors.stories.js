/**
 * GlobalColors
 *
 */

import Component from './global-colors.twig'
import './global-colors.less'

export default {
  title: 'Global/Colors',
  parameters: {}
}

export const Colors = {
  render: Component,
  args: {
    colors: [
      'archway',
      'bay',
      'black',
      'brick',
      'cardinal-red',
      'cardinal-dark',
      'dark-digital-blue',
      'digital-blue-link',
      'fog',
      'fog-dark',
      'fog-light',
      'illuminating',
      'illuminating-light',
      'lagunita',
      'olive',
      'olive-dark',
      'palo-alto',
      'palo-verde',
      'plum',
      'poppy',
      'sky',
      'spirited',
      'spirited-adjusted',
      'spirited-dark',
      'stone',
      'stone-dark',
      'stone-light'
    ]
  }
}
