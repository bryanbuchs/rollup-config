/**
* StatusMessages
*
*/
import DrupalAttribute from 'drupal-attribute'

import Component from './status-messages.twig'
import './status-messages.library.js'

export default {
  title: 'Drupal/Status Messages',
  parameters: {
  },
  argTypes: {
    state: {
      options: ['status', 'warning', 'error'],
      control: { type: 'radio' }
    },
  }
}


export const StatusMessages = {
  render: Component,
  args: {
    state: 'status',
    attributes: new DrupalAttribute()
  }
}
