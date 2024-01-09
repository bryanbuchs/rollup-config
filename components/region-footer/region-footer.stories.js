/**
 * BlockFooter
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './region-footer.twig'
import './region-footer.library.js'

import { Branding } from '../branding/branding.stories.js'
import { NavFooter } from '../nav-footer/nav-footer.stories.js'
import { NavSocial } from '../nav-social/nav-social.stories.js'

export default {
  title: 'Region/Footer',
  parameters: {
    paddings: { disable: true },
    backgrounds: {
      default: 'fog-75'
    }
  },
  argTypes: {
    branding: {
      table: { disable: true }
    },
    footer: {
      table: { disable: true }
    },
    social: {
      table: { disable: true }
    }
  },
  decorators: [(story) => `<div class="layout-grid">${story()}</div>`]
}

export const RegionFooter = {
  render: Component,
  name: 'Footer',
  args: {
    branding: Branding.render(Branding.args),
    footer: NavFooter.render(NavFooter.args),
    social: NavSocial.render(NavSocial.args),
    attributes: new DrupalAttribute()
  }
}
