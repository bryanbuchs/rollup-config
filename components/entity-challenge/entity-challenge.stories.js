/**
 * EntityChallenge
 * cards for Challenges scroller block
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-challenge.twig'
import './entity-challenge.library.js'

export default {
  title: 'Entity/Challenge',
  argTypes: {
    icon: {
      options: [
        'bolt',
        'circle-question',
        'people-arrows',
        'sitemap',
        'user-group'
      ],
      control: { type: 'radio' }
    },
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    // paddings: { disable: true }
  }
  // decorators: [story => `<div style="max-width:1200px">${story()}</div>`]
}

export const EntityChallenge = {
  name: 'Challenge',
  render: Component,
  args: {
    icon: 'bolt',
    theme: 'lagunita',
    text: '<p>Quisque quis metus suscipit, molestie elit lobortis, blandit dolor.</p>',
    heading: '<a href="LINK">Ut Minim Commodo Ad Cupidatat Anim Enim</a>',
    attributes: new DrupalAttribute()
  }
}
