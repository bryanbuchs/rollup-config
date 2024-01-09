/**
* PageTitle
*
*/

import DrupalAttribute from 'drupal-attribute'

import Component from './page-title.twig'
import './page-title.library.js'

export default {
  title: 'Element/Page Title',
  parameters: {
  },
}


export const PageTitle = {
  render: Component,
  args: {
    title: 'Page Title',
    attributes: new DrupalAttribute()
  }
}
