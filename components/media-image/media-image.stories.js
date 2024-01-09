/**
 * MediaImage
 *
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'

import Component from './media-image.twig'
import './media-image.library.js'

export default {
  title: 'Media/Image',
  parameters: {
    // paddings: { disable: true }
  }
  // decorators: [story => `<div style="max-width:1200px">${story()}</div>`]
}

// Default
export const MediaImage = {
  name: 'Default',
  render: Component,
  args: {
    // this is the output of drupal/image_formatter_link_to_image_style_formatter
    image: `<a href="https://placehold.co/1600x1200"
              data-pswp-width="1600"
              data-pswp-height="1200"
              class="photoswipe"
              target="_blank"
              aria-label="view larger image"><img src="https://placehold.co/800x600" width="800" height="600" alt=""></a>`,
    caption: `<p>${faker.lorem.sentence(10)}</p>`,
    view_mode: 'default',
    attributes: new DrupalAttribute()
  }
}

// Hero
export const MediaImageHero = {
  name: 'Hero',
  render: Component,
  args: {
    ...MediaImage.args,
    image:
      '<img src="https://placehold.co/1600x760" width="1600" height="760" alt="">',
    view_mode: 'hero',
    attributes: new DrupalAttribute()
  }
}
