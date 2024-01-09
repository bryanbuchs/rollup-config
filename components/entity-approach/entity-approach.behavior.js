/**
 * EntityApproach
 * Fade the Quote in when scrolled into the viewport
 */

// Externals:
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

Drupal.behaviors.EntityApproach = {
  attach: function (context) {
    const elements = once('EntityApproach', '.entity-approach', context)

    elements.forEach((entity) => {
      const quote = entity.querySelector('figcaption')
      gsap.from(quote, {
        scrollTrigger: {
          trigger: quote,
          // ⬎ "when the bottom of the trigger hits 100px above the bottom of the viewport"
          start: 'bottom bottom+=100px'
        },
        autoAlpha: 0,
        scale: 0.95,
        ease: 'sine.inOut',
        duration: 0.25
      })
    })
  }
}
