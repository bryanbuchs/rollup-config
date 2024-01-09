/**
 * BlockStrategy
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './block-strategy.twig'
import './block-strategy.library.js'

import { VideoDefault } from '../media-video/media-video.stories.js'
import { Document } from '../media-document/media-document.stories.js'

export default {
  title: 'Block/Strategy',
  parameters: {
    paddings: { disable: true }
  },
  argTypes: {
    button: {
      table: {
        disable: true
      }
    }
  },
  decorators: [story => `<div class="layout-grid">${story()}</div>`]
}

export const BlockStrategy = {
  render: Component,
  name: 'Strategy',
  args: {
    heading: 'Business strategy is no longer enough.',
    media: VideoDefault.render(VideoDefault.args), // << rendered Media:Video entity
    text: '<p>Ad laborum amet exercitation est. Deserunt reprehenderit et quis eiusmod tempor incididunt sunt qui sunt. Veniam excepteur adipisicing do amet ea dolore ad amet non esse irure veniam fugiat. Cupidatat veniam nisi dolor proident elit labore non duis in velit.</p>',
    // in Drupal, the button field returns the rendered Media:Document entity
    button: Document.render({
      label: 'Download Brochure',
      link: 'LINK',
      attributes: new DrupalAttribute()
    }),
    attributes: new DrupalAttribute()
  }
}
