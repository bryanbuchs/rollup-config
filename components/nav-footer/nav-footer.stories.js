/**
 * MenuFooter
 *
 */

import DrupalAttribute from 'drupal-attribute'
import { faker } from '@faker-js/faker'
import { titleCase } from 'title-case'

import Component from './nav-footer.twig'
import './nav-footer.library.js'

import { NavMain } from '../nav-main/nav-main.stories.js'

export default {
  title: 'Menu/Footer',
  parameters: {
    // paddings: { disable: true }
  }
  // decorators: [(story) => `<div style="max-width:1200px">${story()}</div>`]
}

export const NavFooter = {
  render: Component,
  name: 'Footer',
  args: {
    heading: 'Footer Menu',
    menu: NavMain.args.menu,
    attributes: new DrupalAttribute()
  }
}
