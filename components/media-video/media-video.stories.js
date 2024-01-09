/**
 * MediaVideo
 *
 */

import DrupalAttribute from 'drupal-attribute'

import Default from './media-video.twig'
import Hero from './media-video--hero.twig'
import './media-video.library.js'

export default {
  title: 'Media/Video'
}

// Default: preview as button with popup player
export const VideoDefault = {
  render: Default,
  name: "Default",
  args: {
    id: 1234,
    img: '<img src="https://placehold.co/800x450" width="800" height="450" alt="">',
    // important! the iframe URL must include key/value param "enablejsapi=1"
    video:
      '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/S7TUe5w6RHo?si=MQ6hwTvrlnJfai4X&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    title: 'Title from Media:Video',
    attributes: new DrupalAttribute()
  }
}

// Hero: inline player for custom
export const VideoHero = {
  render: Hero,
  name: "Hero",
  args: {
    ...VideoDefault.args,
    attributes: new DrupalAttribute()
  }
}