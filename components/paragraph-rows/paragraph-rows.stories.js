/**
 * Paragraph/Rows
 * Collection of rows with alternating layout
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './paragraph-rows.twig'
import './paragraph-rows.library.js'

import { EntityRow } from '../entity-row/entity-row.stories.js'

export default {
  title: 'Paragraph/Rows',
  parameters: {
    paddings: { disable: true }
  }
}

// ParagraphRows
export const ParagraphRows = {
  name: 'Rows',
  render: Component,
  args: {
    heading: 'Optional Heading',
    rows: Array(3)
      .fill()
      .map(() =>
        EntityRow.render({
          ...EntityRow.args,
          heading: `<a href="LINK">${titleCase(faker.lorem.words(3))}</a>`,
          text: `<p>${faker.lorem.paragraphs(2)}</p>`,
          attributes: new DrupalAttribute()
        })
      ),
    attributes: new DrupalAttribute()
  }
}
