/**
 * MenuSocial
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './nav-social.twig'
import './nav-social.library.js'

export default {
  title: 'Menu/Social',
  parameters: {
    // paddings: { disable: true }
  }
  // decorators: [story => `<div style="max-width:1200px">${story()}</div>`]
}

export const NavSocial = {
  render: Component,
  name: 'Social',
  args: {
    heading: 'Find Us On Social Media',
    menu: ['Facebook', 'Twitter', 'YouTube', 'LinkedIn'].map(str => ({
      url: 'LINK',
      class: str.toLowerCase(),
      text: str
    })),
    attributes: new DrupalAttribute()
  }
}
