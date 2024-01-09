/**
 * Paragraph/Accordions
 * Group of details summary ish elements
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './paragraph-accordions.twig'
import './paragraph-accordions.library.js'

import * as Accordion from "../entity-accordion/entity-accordion.stories.js"

export default {
  title: 'Paragraph/Accordions',
  decorators: [(story) => `<div class="layout-grid">${story()}</div>`]
}

// ParagraphAccordions
export const ParagraphAccordions = {
  name: 'Accordions',
  render: Component,
  args: {
    heading: `Why the Refocus?`,
    rows: Array(5)
      .fill()
      .map((el, i) => {
        return Accordion.EntityAccordion.render({
          ...Accordion.EntityAccordion.args,
          id: i,
          heading: `${titleCase(faker.lorem.sentences(1))}`,
          attributes: new DrupalAttribute()
        })
      }),
    attributes: new DrupalAttribute()
  }
}
