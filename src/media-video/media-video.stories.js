/**
 * MediaVideo
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './media-video.twig'
import './media-video.library.js'

export default {
  title: 'Media/Video',
  parameters: {
    // paddings: { disable: true }
  }
  // decorators: [story => `<div style="max-width:1200px">${story()}</div>`]
}

export const VideoDefault = {
  render: Component,
  name: "Default",
  args: {
    id: 1234,
    img: '<img src="https://placehold.co/800x450" width="800" height="450" alt="">',
    // important! the iframe URL must include key/value param "enablejsapi=1"
    video:
      '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/S7TUe5w6RHo?si=MQ6hwTvrlnJfai4X&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    title: 'Exercitation adipisicing exercitation',
    attributes: new DrupalAttribute()
  }
}

export const VideoEmbedded = {
  render: Component,
  name: "Embedded",
  args: {
    ...VideoDefault.args,
    attributes: new DrupalAttribute().addClass("view-mode--embedded")
  }
}