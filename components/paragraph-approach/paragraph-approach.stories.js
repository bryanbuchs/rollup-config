/**
 * BlockApproach
 *
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './paragraph-approach.twig'
import './paragraph-approach.library.js'

import { EntityApproach } from '../entity-approach/entity-approach.stories.js'

import { Button } from '../button/button.stories.js'

export default {
  title: 'Paragraph/Approach',
  argTypes: {
    button: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    paddings: { disable: true },
    backgrounds: {
      default: 'fog-50'
    }
  },
  decorators: [(story) => `<div class="layout-grid">${story()}</div>`]
  // decorators: [
  //   (story) => `<div style="max-width:1600px; margin:auto;">${story()}</div>`
  // ]
}

export const ParagraphApproach = {
  render: Component,
  name: 'Approach',
  args: {
    heading: 'Our Approach to Transformation: B. E. S. T.',
    rows: Array(3)
      .fill()
      .map((el, i) => {
        return EntityApproach.render({
          ...EntityApproach.args,
          step: i + 1,
          primary: titleCase(faker.lorem.words(2)),
          secondary: titleCase(faker.lorem.words(3)),
          text: `<p>${faker.lorem.paragraph(6)}</p>
             <p>${faker.lorem.paragraph(4)}</p>`,
          attributes: new DrupalAttribute()
        })
      }),
    button: Button.render({
      ...Button.args,
      label: 'See our transformation learning programs',
      icon: 'arrow'
    }),
    attributes: new DrupalAttribute()
  }
}
