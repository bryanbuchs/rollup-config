/**
 * ParagraphVideo
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Default from './paragraph-video.twig'
import Hero from './paragraph-video--hero.twig'

import './paragraph-video.library.js'

import { VideoDefault, VideoHero } from '../media-video/media-video.stories.js'

export default {
  title: 'Paragraph/Video'
}

export const ParagraphVideo = {
  render: Default,
  name: 'Default',
  args: {
    media: VideoDefault.render(VideoDefault.args),
    text: '<p>Consectetur laboris nulla ad dolor elit et officia aute incididunt adipisicing sint. Sunt do et consectetur deserunt. Eu voluptate enim dolore.</p>',
    align: 'left',
    theme: 'lagunita',
    attributes: new DrupalAttribute()
  },
  argTypes: {
    align: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    theme: {
      table: {
        disable: true
      }
    }
  }
}

export const ParagraphVideoHero = {
  render: Hero,
  name: 'Hero',
  args: {
    media: VideoHero.render(VideoHero.args),
    attributes: new DrupalAttribute()
  },
  parameters: {
    paddings: { disable: true }
  },
  decorators: [(story) => `<div class="layout-grid">${story()}</div>`]
}
