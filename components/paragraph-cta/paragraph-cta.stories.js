/**
 * Paragraph/CTA
 * Call to action cards
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './paragraph-cta.twig'
import './paragraph-cta.library.js'

import * as CTA from '../entity-cta/entity-cta.stories.js'

export default {
  title: 'Paragraph/Call to Action'
}

// ParagraphCta
export const ParagraphCta = {
  name: 'Call to Action',
  render: Component,
  heading: "Call to Action",
  args: {
    rows: Array(3)
      .fill()
      .map((el, i) => {
        return CTA.EntityCta.render({
          ...CTA.EntityCta.args,
          theme:
            CTA.default.argTypes.theme.options[
              i % CTA.default.argTypes.theme.options.length
            ],
          heading: `${titleCase(faker.lorem.words(1))}`,
          text: `<p>${faker.lorem.sentences(1)}</p>`,
          attributes: new DrupalAttribute()
        })
      }),
    attributes: new DrupalAttribute()
  }
}
