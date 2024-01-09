/**
 * Entity/Row
 * Block with 2 columns for text, image
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-row.twig'
import './entity-row.library.js'

export default {
  title: 'Entity/Row',
  parameters: {
    paddings: { disable: true }
  }
}

// EntityRow
export const EntityRow = {
  name: 'Row',
  render: Component,
  args: {
    // @TODO: srcset - 700x525 for desktop, 780x585 for tablet, 480x360 for tiny
    image:
      '<img src="https://placehold.co/780x585" width="780" height="585" alt="">',
    heading: '<a href="LINK">Lorem Ipsum Dolor sit Amet</a>',
    text: '<p>Lorem adipisicing anim amet id tempor consectetur minim nulla nisi consequat est. In nisi sit dolor aute. Nulla non est minim magna Lorem irure. Ad amet laborum nostrud ea excepteur ea elit pariatur commodo dolore.</p>',
    attributes: new DrupalAttribute()
  }
}
