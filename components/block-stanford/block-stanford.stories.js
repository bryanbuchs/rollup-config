/**
 * BlockStanford
 *
 */

// import DrupalAttribute from 'drupal-attribute'

import Component from './block-stanford.twig'
import './block-stanford.library.js'

export default {
  title: 'Block/Stanford',
  parameters: {
    paddings: { disable: true },
    backgrounds: {
      default: 'cardinalred'
    }
  }
  // decorators: [
  //   (story) => `<div style="background-color:#8c1515">${story()}</div>`
  // ]
}

export const BlockStanford = {
  render: Component,
  name: 'Stanford'
}
