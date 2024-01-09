/**
 * BlockHeader
 * Site header (branding/tagline)
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './region-header.twig'
import './region-header.library.js'

import { Branding } from '../branding/branding.stories.js'
import { NavMain } from '../nav-main/nav-main.stories.js'

import { RegionFooter } from '../region-footer/region-footer.stories.js'
import '../page-wrapper/page-wrapper.library.js'

export default {
  title: 'Region/Header',
  parameters: {
    paddings: { disable: true },
    backgrounds: {
      default: 'white'
      //grid: true // this doesn't work yet! https://github.com/storybookjs/storybook/issues/7367
    }
  },
  argTypes: {
    branding: {
      table: {
        disable: true
      }
    }
  }
}

// Default
export const HeaderDefault = {
  name: 'Default',
  render: Component,
  args: {
    branding: Branding.render(Branding.args),
    menu: NavMain.render(NavMain.args),
    attributes: new DrupalAttribute()
  },
  decorators: [
    (story) =>
      `<div class="page-wrapper">${story()}</div><div style="display:none">${RegionFooter.render(
        RegionFooter.args
      )}</div>`
  ]
}

// Front
export const HeaderFront = {
  name: 'Front',
  render: Component,
  args: {
    ...HeaderDefault.args,
    attributes: new DrupalAttribute()
  },
  decorators: [
    (story) =>
      `<div class="path-frontpage"><div class="page-wrapper">${story()}</div><div style="display:none">${RegionFooter.render(
        RegionFooter.args
      )}</div></div>`
  ]
}
