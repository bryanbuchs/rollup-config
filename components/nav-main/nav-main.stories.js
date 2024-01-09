/**
 * MenuMain
 *
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './nav-main.twig'
import './nav-main.library.js'

export default {
  title: 'Menu/Main',
  parameters: {
    paddings: { disable: true }
  }
  // decorators: [(story) => `<div style="max-width:1200px">${story()}</div>`]
}

export const NavMain = {
  render: Component,
  name: 'Main',
  args: {
    heading: 'Main Menu',
    menu: [
      ...['Our Clients', 'Our Programs', 'Our Story', 'Our Team'].map(str => ({
        url: 'LINK',
        text: str,
        children: Array(Math.floor(Math.random() * 4) + 1)
          .fill()
          .map(() => ({
            url: 'LINK',
            text: titleCase(faker.lorem.words({ min: 2, max: 4 })),
            children: Array(Math.floor(Math.random() * 3) + 1)
              .fill()
              .map(() => ({
                url: 'LINK',
                text: titleCase(faker.lorem.words({ min: 2, max: 4 })),
                children: Array(Math.floor(Math.random() * 2) + 1)
                  .fill()
                  .map(() => ({
                    url: 'LINK',
                    text: titleCase(faker.lorem.words({ min: 2, max: 4 }))
                  }))
              }))
          }))
      })),
      { url: 'LINK', text: 'Contact Us' }
    ],
    attributes: new DrupalAttribute()
  }
}
