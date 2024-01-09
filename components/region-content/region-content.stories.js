/**
 * RegionContent
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './region-content.twig'
import './region-content.library.js'

import './preview.less'

export default {
  title: 'Region/Content',
  parameters: {
    paddings: { disable: true },
    backgrounds: {
      default: 'white'
      //grid: true // this doesn't work yet! https://github.com/storybookjs/storybook/issues/7367
    }
  }
}

export const RegionContent = {
  render: Component,
  name: 'Content',
  args: {
    attributes: new DrupalAttribute()
  }
}
