/**
 * Entity/Col
 * A simple text column with optional action button
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './entity-col.twig'
import './entity-col.library.js'

// storybook can't process attach_library from included/embedded templates
import '../action/action.library.js'

export default {
  title: 'Entity/Text Column',
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  }
}

// EntityCol
export const EntityCol = {
  name: 'Text Column',
  render: Component,
  args: {
    text: '<p>Voluptate commodo occaecat nostrud in esse et et sint ullamco magna exercitation ea voluptate sunt. Voluptate eu cupidatat anim minim incididunt anim ut aliqua. Ea non excepteur anim sit sit. Voluptate aliquip consectetur non voluptate sit consequat officia eiusmod. Officia duis excepteur consequat laboris voluptate.</p>',
    label: 'Call to Action',
    url: 'LINK',
    theme: 'olive',
    attributes: new DrupalAttribute()
  }
}
