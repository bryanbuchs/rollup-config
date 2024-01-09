/**
 * BlockIntro
 *
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './block-intro.twig'
import './block-intro.library.js'

export default {
  title: 'Block/Intro',
  parameters: {
    paddings: { disable: true }
  },
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  },
  decorators: [(story) => `<div class="layout-grid">${story()}</div>`]
}

export const BlockIntro = {
  render: Component,
  name: 'Intro',
  args: {
    words: Array(5).fill().map(() => titleCase(faker.company.catchPhraseNoun())),
    image: `<img
              sizes="100vw, 1600px"
              srcset="
                https://placehold.co/480x230 480w,
                https://placehold.co/820x390 820w,
                https://placehold.co/1200x570 1200w,
                https://placehold.co/1600x760 1600w"
              src="https://placehold.co/1600x1200"
              alt="FPO">`,
    theme: 'plum',
    attributes: new DrupalAttribute()
  }
}
