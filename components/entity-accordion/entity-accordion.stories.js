/**
 * Entity/Accordion
 * Single element for accordions paragraph
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-accordion.twig'
import './entity-accordion.library.js'

import { MediaImage } from '../media-image/media-image.stories.js'

export default {
  title: 'Entity/Accordion',
  decorators: [
    (story) =>
      `<div style="max-width:1200px; margin-inline: auto;">${story()}</div>`
  ]
}

// EntityAccordion
export const EntityAccordion = {
  name: 'Accordion',
  render: Component,
  args: {
    id: 123,
    heading:
      'Pariatur aliquip duis adipisicing nisi Lorem reprehenderit eiusmod aute do.',
    // these are just content mocking attributes, not required for live component
    mock: {
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
