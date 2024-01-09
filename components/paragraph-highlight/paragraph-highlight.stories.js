/**
 * ParagraphHighlight
 * 2-column text/image
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './paragraph-highlight.twig'
import './paragraph-highlight.library.js'

export default {
  title: 'Paragraph/Highlight',
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    },
    align: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    paddings: { disable: true }
  }
  // decorators: [(story) => `<div class="layout-grid">${story()}</div>`]
}

// ImageRight
export const ParagraphHighlight = {
  name: 'Highlight',
  render: Component,
  args: {
    heading: 'Transformational Education Solutions',
    subheading: 'Future-Proof your organization',
    align: 'right',
    theme: 'olive',
    image:
      '<img src="https://placehold.co/800x800" width="800" height="800" alt="">',
    attributes: new DrupalAttribute()
  }
}
