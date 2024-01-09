/**
 * GlobalButton
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './button.twig'
import './button.library.js'

export default {
  title: 'Element/Button'
}

// Download
export const Button = {
  render: Component,
  args: {
    label: 'Lorem Et Deserunt Do Aliquip',
    link: 'LINK',
    icon: 'arrow',
    attributes: new DrupalAttribute()
  },
  argTypes: {
    icon: {
      options: ['arrow', 'document', null],
      control: { type: 'radio' }
    }
  }
}
