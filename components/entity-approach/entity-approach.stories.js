/**
 * EntityApproach
 * individual step for the Approach paragraph/block
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-approach.twig'
import './entity-approach.library.js'

export default {
  title: 'Entity/Approach',
  parameters: {
    // paddings: { disable: true }
    backgrounds: {
      default: 'fog-50'
    }
  },
  argTypes: {
    step: {
      control: { type: 'inline-radio' },
      options: [1, 2, 3]
    }
  },
  decorators: [
    (story) =>
      `<div style="max-width:1592px;margin-inline:auto;">${story()}</div>`
  ]
}

// EntityApproach
export const EntityApproach = {
  name: 'Approach',
  render: Component,
  args: {
    step: 1,
    primary: 'Lorem Ipsum',
    secondary: 'Dolor Sit Amet',
    text: '<p>Qui exercitation tempor laborum deserunt amet duis sint. Adipisicing velit id fugiat consequat. Adipisicing sint do aute ipsum. Aliqua adipisicing dolor laboris proident dolor aute. Eu occaecat excepteur irure deserunt labore do do exercitation in velit velit laboris minim labore. Consectetur laboris exercitation aliquip dolor nulla est occaecat do nisi aliquip minim cillum ipsum est.</p><p>Aute labore consequat incididunt et minim adipisicing Lorem adipisicing duis proident dolor. Sint id exercitation adipisicing ex non nisi ad nisi officia aliqua culpa aliqua. Officia commodo tempor adipisicing sunt ullamco duis id quis commodo.</p>',
    image: '<img src="https://placehold.co/800x600" width="800" height="600" alt="">',
    quote: '<p>Quote! Aliquip adipisicing enim esse aute occaecat sit deserunt fugiat dolore duis.</p>',
    attributes: new DrupalAttribute()
  }
}
