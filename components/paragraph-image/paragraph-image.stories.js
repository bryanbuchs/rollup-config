/**
 * ParagraphImage
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './paragraph-image.twig'
import './paragraph-image.library.js'

import { MediaImageHero } from '../media-image/media-image.stories.js'

export default {
  title: 'Paragraph/Image',
  parameters: {}
}

export const ParagraphImage = {
  render: Component,
  name: 'Image',
  args: {
    media: MediaImageHero.render({
      ...MediaImageHero.args,
      image: `<img
        sizes="100vw, 1600px"
        srcset="
          https://placehold.co/480x230 480w,
          https://placehold.co/820x390 820w,
          https://placehold.co/1200x570 1200w,
          https://placehold.co/1600x760 1600w"
        src="https://placehold.co/1600x1200"
        alt="FPO">`,
      attributes: new DrupalAttribute()
    }),
    attributes: new DrupalAttribute()
  }
}
