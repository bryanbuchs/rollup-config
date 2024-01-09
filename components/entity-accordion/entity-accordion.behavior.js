/**
 * Entity/Accordion
 * Single element for accordions paragraph
 */

// Externals:
// import { gsap } from 'gsap'

Drupal.behaviors.EntityAccordion = {
  attach: function (context) {
    const elements = once('EntityAccordion', '.entity-accordion', context)
    elements.forEach(entity => {
      const trigger = entity.querySelector('.trigger')
      const content = entity.querySelector('.content')

      const zero = {
        duration: 0.25,
        height: 0,
        autoAlpha: 0,
        onComplete: () => {
          // content.hidden = true
        }
      }

      const auto = {
        duration: 0.25,
        height: 'auto',
        autoAlpha: 1,
        onStart: () => {
          // content.hidden = false
        }
      }

      gsap.set(content, { height: 0, autoAlpha: 0 })

      trigger.addEventListener('click', () => {
        const isExpanded =
          trigger.getAttribute('aria-expanded') === 'true' || false

        trigger.setAttribute('aria-expanded', !isExpanded)

        // animate the height of the div from 0 to auto using GSAP
        const animation = isExpanded ? zero : auto
        gsap.to(content, animation)
      })
    })
  }
}
