/**
 * Paragraph/Comparison
 * Where to start table
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './paragraph-comparison.twig'
import './paragraph-comparison.library.js'

export default {
  title: 'Paragraph/Comparison',
  parameters: {
    paddings: { disable: true }
  },
  // decorators: [(story) => `<div style="max-width:1200px">${story()}</div>`]
}


// ParagraphComparison
export const ParagraphComparison = {
  name: 'Comparison',
  render: Component,
  args: {
    heading: 'Where to Start',
    text: '<p>Stanford guidance every step of the way</p>',
    table: '<pre>TABLE</pre>',
    attributes: new DrupalAttribute()
  }
}
