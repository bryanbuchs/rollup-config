/**
 * EntityImpact
 * cards for Impact scroller block
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-impact.twig'
import './entity-impact.library.js'

export default {
  title: 'Entity/Impact',
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    // paddings: { disable: true }
  }
  // decorators: [(story) => `<div style="max-width:440px">${story()}</div>`]
}

// Olive
export const EntityImpact = {
  name: 'Impact',
  render: Component,
  args: {
    theme: 'olive',
    image:
      '<img src="https://placehold.co/440x440" width="440" height="440" alt="">',
    heading: '<a href="LINK">Lorem Ipsum Dolor sit Amet</a>',
    link: '<a href="LINK">More Information</a>',
    text: '<p>Lorem adipisicing anim amet id tempor consectetur minim nulla nisi consequat est. In nisi sit dolor aute. Nulla non est minim magna Lorem irure. Ad amet laborum nostrud ea excepteur ea elit pariatur commodo dolore.</p>',
    attributes: new DrupalAttribute()
  }
}
