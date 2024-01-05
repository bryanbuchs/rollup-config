/**
 * MediaVideo
 * The preview image is a button that triggers a modal
 * with the player/iframe. Closing the modal should stop
 * the video if it is playing.
 */

import MicroModal from 'micromodal'
import { hideOthers } from 'aria-hidden'
import YouTubePlayer from 'youtube-player'

Drupal.behaviors.MediaVideo = {
  attach: function (context) {
    // store all YT players
    const players = []

    // placeholder for function call to restore focus-ability
    let restore = null

    // loop all videos on the page and save a reference to the YouTubePlayer
    const elements = once('MediaVideo', '.media-video', context)
    elements.forEach((el, i) => {
      el.querySelector('.video-modal').dataset.player = i
      players[i] = YouTubePlayer(el.querySelector('iframe'))
    })

    // common options for all video modals
    const options = {
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
      openTrigger: 'data-video-modal',
      disableScroll: false,
      onShow: (modal) => {
        restore = hideOthers(modal.querySelector('[role="dialog"]'))
        players[modal.dataset.player].playVideo()
      },
      onClose: (modal) => {
        restore()
        players[modal.dataset.player].pauseVideo() // or pauseVideo() ?
      }
    }

    MicroModal.init(options)
  }
}
