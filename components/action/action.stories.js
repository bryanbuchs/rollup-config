/**
 * Action
 * Call to action button
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './action.twig'
import './action.library.js'

export default {
  title: 'Element/Call to Action'
}

// Self
export const ActionDefault = {
  name: 'Default',
  render: Component,
  args: {
    label: 'Lorem Et Deserunt Do Aliquip',
    link: 'LINK',
    theme: 'olive'
  },
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  }
}

// Parent
export const ActionParent = {
  name: 'Theme from Parent',
  render: Component,
  args: {
    label: 'Lorem Et Deserunt Do Aliquip',
    link: 'LINK',
    parentTheme: 'olive'
  },
  argTypes: {
    parentTheme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    paddings: { disable: true }
  },
  // theme for CTA buttons comes from the wrapper
  decorators: [
    (story, context) =>
      `<div style="padding: 2rem; height: 100vh" class="theme-${
        context.args.parentTheme
      }">${story()}</div>`
  ]
}
