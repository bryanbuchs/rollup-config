/**
 * Paragraph/Marketo
 * Launch a marketo form in a modal
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './paragraph-marketo.twig'
import './paragraph-marketo.library.js'

export default {
  title: 'Paragraph/Marketo',
  parameters: {
    paddings: { disable: true }
  },
  // decorators: [(story) => `<div style="max-width:1200px">${story()}</div>`]
}


// ParagraphMarketo
export const ParagraphMarketo = {
  name: 'Marketo',
  render: Component,
  args: {
    id: 123,
    heading: 'Face Any Challenge',
    text: "<p>We're ready when you are.</p>",
    label: 'Contact Us',
    formid: 2966,
    attributes: new DrupalAttribute()
  }
}
