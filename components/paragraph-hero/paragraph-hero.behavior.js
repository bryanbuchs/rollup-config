/**
 * Paragraph/Hero
 * Large hero image with overlay text
 */

// Externals:
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

Drupal.behaviors.ParagraphHero = {
  attach: function (context, settings) {
    const elements = once('ParagraphHero', '.paragraph-hero', context)

    // baseline time for all timeline events
    const duration = 1

    elements.forEach(paragraph => {
      const overlay = paragraph.querySelector('.overlay')
      const content = paragraph.querySelector('.content')
      const image = paragraph.querySelector('img')

      // half-second delay...
      var timeline = gsap.timeline({
        paused: true,
        delay: duration / 2
      })

      // ...then fade the overlay in...
      timeline.from(overlay, {
        autoAlpha: 0,
        scale: 0.9875,
        duration: duration / 3,
        ease: 'power2.in'
      })

      // ... then fade the content in.
      timeline.from(content, {
        autoAlpha: 0,
        duration: duration / 2,
        ease: 'power3.in'
      })

      // Two things need to happen before the timeline can play:
      // 1. the image needs to be loaded
      // 2. the block needs to be in view

      const onIntersection = entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timeline.play()
            observer.unobserve(overlay)
          }
        }
      }

      const observer = new IntersectionObserver(onIntersection)

      // wait for the image to load, then wait for it to be in view
      image.addEventListener('load', () => {
        observer.observe(overlay)
      })
    })
  }
}
