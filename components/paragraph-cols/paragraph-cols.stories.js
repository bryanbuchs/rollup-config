/**
 * Paragraph/Cols
 * A collection of col entities 3x
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'

import Component from './paragraph-cols.twig'
import './paragraph-cols.library.js'

import { EntityCol } from '../entity-col/entity-col.stories.js'

export default {
  title: 'Paragraph/Text Columns',
  parameters: {
    paddings: { disable: true }
  },
  decorators: [story => `<div class="layout-grid">${story()}</div>`]
}

let themes = ['olive', 'plum', 'lagunita']

// ParagraphCols
export const ParagraphCols = {
  name: 'Text Columns',
  render: Component,
  args: {
    heading: 'How to Decide',
    rows: Array(3)
      .fill()
      .map((el, i) =>
        EntityCol.render({
          ...EntityCol.args,
          text: `<p>${faker.lorem.paragraphs(2)}</p>`,
          theme: themes[i % themes.length],
          attributes: new DrupalAttribute()
        })
      ),
    attributes: new DrupalAttribute()
  }
}
