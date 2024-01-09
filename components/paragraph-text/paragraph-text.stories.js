/**
 * ParagraphText
 * Text
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './paragraph-text.twig'
import './paragraph-text.library.js'

import { MediaImage } from '../media-image/media-image.stories.js'

export default {
  title: 'Paragraph/Text',
  decorators: [
    (story) =>
      `<div style="max-width:1200px; margin-inline: auto;">${story()}</div>`
  ]
}

// Default
export const ParagraphText = {
  name: 'Text',
  render: Component,
  args: {
    image: {
      left: MediaImage.render({
        ...MediaImage.args,
        attributes: new DrupalAttribute().addClass('align-left')
      }),
      right: MediaImage.render({
        ...MediaImage.args,
        attributes: new DrupalAttribute().addClass('align-right')
      })
    },
    attributes: new DrupalAttribute()
  }
}
