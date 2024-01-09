/**
 * ParagraphScrollable
 * Animate the paragraph header when scrolled into view
 * Add a scrollable container with custom scrollbars
 */

// Externals:
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

// You will need a ResizeObserver polyfill for browsers that don't
// support it! (iOS Safari, Edge, ...)
// import ResizeObserver from 'resize-observer-polyfill'
// window.ResizeObserver = ResizeObserver

Drupal.behaviors.ScrollableContainer = {
  attach: function (context) {
    const elements = once(
      'ParagraphScrollable',
      '.paragraph-scrollable',
      context
    )
    elements.forEach((paragraph) => {
      // const header = paragraph.querySelector('h2')
      const cards = paragraph.querySelectorAll('.rows > li')
      // const container = paragraph.querySelector('.sticky')

      // https://gsap.com/docs/v3/Plugins/ScrollTrigger/
      gsap.from(cards, {
        scrollTrigger: {
          trigger: paragraph,
          // ⬎ start the animation when the top of the trigger hits the center of the viewport
          start: 'top center'
        },
        autoAlpha: 0,
        // scale: 0.95,
        ease: 'sine.inOut',
        duration: 0.25,
        stagger: {
          each: 0.2
          // ease: "power1.in",
        }
      })

      // https://github.com/Grsmto/simplebar
      new SimpleBar(paragraph.querySelector('.scrollable-container'), {
        autoHide: false,
        scrollbarMinSize: 100,
        scrollbarMaxSize: 150
        // forceVisible: 'x'
      })
    })
  }
}
