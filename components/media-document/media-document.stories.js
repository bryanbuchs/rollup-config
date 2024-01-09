/**
 * Document
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './media-document.twig'

// storybook can't process attach_library from included/embedded templates
import '../button/button.library.js'

export default {
  title: 'Media/Document'
}

export const Document = {
  render: Component,
  args: {
    label: 'Download File',
    link: 'LINK',
    attributes: new DrupalAttribute()
  }
}
