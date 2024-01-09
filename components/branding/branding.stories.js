/**
 * BlockBranding
 * Site name + tagline
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './branding.twig'
import './branding.library.js'

export default {
  title: 'Element/Branding',
  parameters: {
    //   paddings: { disable: true }
  }
  // decorators: [story => `<div style="max-width:1200px">${story()}</div>`]
}

// Header
export const Branding = {
  name: 'Branding',
  render: Component,
  parameters: {
    // paddings: { disable: true },
    backgrounds: {
      default: 'fog-50'
    }
  },
  args: {
    url: 'LINK',
    site_name: '<strong>Stanford</strong> Enterprise Education for Transformation',
    site_slogan: 'Powered by Stanford Center for Professional Development',
    attributes: new DrupalAttribute()
  }
}
