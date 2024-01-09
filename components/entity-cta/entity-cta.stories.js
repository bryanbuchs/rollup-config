/**
 * Entity/CTA
 * Call to action cards
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-cta.twig'
import './entity-cta.library.js'

// storybook can't process attach_library from included/embedded templates
import '../action/action.library.js'

export default {
  title: 'Entity/Call To Action',
  parameters: {
    // paddings: { disable: true }
  },
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  }
  // decorators: [(story) => `<div style="max-width:1200px">${story()}</div>`]
}

// EntityCta
export const EntityCta = {
  name: 'Call To Action',
  render: Component,
  args: {
    heading: 'Customized',
    text: '<p>A full-service education program designed with your enterprise challenge in mind</p>',
    url: 'LINK',
    label: 'Call to Action',
    theme: 'olive',
    image:
      '<img src="https://placehold.co/460x460" width="460" height="460" alt="">',
    attributes: new DrupalAttribute()
  }
}
