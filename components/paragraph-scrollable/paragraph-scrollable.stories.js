/**
 * ParagraphScrollable
 *
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './paragraph-scrollable.twig'
import './paragraph-scrollable.library.js'

import * as Challenge from '../entity-challenge/entity-challenge.stories.js'
import * as Impact from '../entity-impact/entity-impact.stories.js'

export default {
  title: 'Paragraph/Scrollable',
  parameters: {
    paddings: { disable: true }
  }
}

// export const ScrollableContainer = {
//   render: Component,
//   name: "Generic",
//   args: {
//     rows: Array(20).fill(`<pre class="fpo">block</pre>`)
//   }
// }

export const ParagraphChallenges = {
  render: Component,
  name: 'Challenges',
  args: {
    heading: 'Significant challenges require thoughtful solutions',
    rows: Array(9)
      .fill()
      .map((el, i) => {
        return Challenge.EntityChallenge.render({
          ...Challenge.EntityChallenge.args,
          icon: Challenge.default.argTypes.icon.options[
            i % Challenge.default.argTypes.icon.options.length
          ],
          theme:
          Challenge.default.argTypes.theme.options[
              i % Challenge.default.argTypes.theme.options.length
            ],
          heading: `<a href="LINK">${titleCase(faker.lorem.words(4))}</a>`,
          text: `<p>${faker.lorem.sentences(2)}</p>`,
          attributes: new DrupalAttribute()
        })
      }),
    attributes: new DrupalAttribute()
  }
}


export const ParagraphImpacts = {
  render: Component,
  name: 'Impacts',
  args: {
    heading: 'Making an Impact Across the Globe',
    rows: Array(5)
      .fill()
      .map((el, i) => {
        return Impact.EntityImpact.render({
          ...Impact.EntityImpact.args,
          theme:
            Impact.default.argTypes.theme.options[
              i % Impact.default.argTypes.theme.options.length
            ],
          heading: titleCase(faker.lorem.words(4)),
          text: `<p>${faker.lorem.sentences(3)}</p>`,
          attributes: new DrupalAttribute()
        })
      }),
    attributes: new DrupalAttribute()
  }
}
