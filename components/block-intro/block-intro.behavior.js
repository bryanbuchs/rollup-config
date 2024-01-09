/**
 * BlockIntro
 * Slide/Fade the overlay into place when the image is loaded
 * transition between a set of keywords
 */

// Externals:
// import { gsap } from 'gsap'

Drupal.behaviors.BlockIntro = {
  attach: function (context) {
    const [block] = once('BlockIntro', '#block-intro', context)

    // get list of words to transition through
    const words = block.dataset.words.split(',')
    const content = block.querySelector('.content')
    const wrapper = block.querySelector('.wrapper')

    // empty the "words" element before starting
    while (wrapper.firstElementChild) {
      wrapper.firstElementChild.remove()
    }

    // set the width of the container to the length of the longest word
    // words are positioned absolutely inside the container, so they
    // will otherwise run offscreen as the text wraps
    const ch = words.map(txt => txt.length + 1)
    wrapper.style.width = `${Math.max(...ch)}ch`

    const tags = words.map(word => {
      // append each word to the wrapper, initially hidden
      let tag = document.createElement('strong')
      tag.setAttribute('aria-hidden', true)
      tag.innerText = word
      gsap.set(tag, { autoAlpha: 0 })
      wrapper.appendChild(tag)
      return tag
    })

    // baseline time for all timeline events
    const duration = 1

    const animateBlock = () => {
      var timeline = gsap.timeline()

      // slide the content block in
      timeline.fromTo(
        content,
        { autoAlpha: 0, xPercent: -100 },
        {
          autoAlpha: 1,
          xPercent: 0,
          duration: duration / 2,
          ease: 'power1.inOut'
        }
      )

      // ...then fade in all the text
      timeline.fromTo(
        content.firstElementChild,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: duration,
          ease: 'power2.inOut'
        },
        `-=${duration / 5}` // slight overlap before slide is completed
      )

      return timeline
    }

    const animateWords = () => {
      const timeline = gsap.timeline({
        repeat: -1 // repeat words forever
      })

      tags.forEach((tag, i) => {
        // start fade in
        timeline.fromTo(
          tag,
          {
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            duration: duration * 1.5,
            ease: 'power3.inOut',
            onStart: () => {
              tag.setAttribute('aria-hidden', false)
            }
          },
          '<'
        )
        // add a bookmark so we can start with the first word visible
        timeline.addLabel(`visible-${i}`, '>')

        // start fade out
        timeline.to(
          tag,
          duration * 1,
          {
            autoAlpha: 0,
            ease: 'power4.inOut',
            onComplete: () => {
              tag.setAttribute('aria-hidden', true)
            }
          },
          `+=${duration * 5}` // word stays visible for X before fading out
        )
      })

      // start the animation with the first word visible
      timeline.seek('visible-0')

      return timeline
    }

    // stitch them together in a master timeline...
    var master = gsap
      .timeline({
        paused: true,
        delay: duration,
        onStart: () => block.classList.add('is-loaded')
      })
      .add(animateBlock())
      .add(animateWords(), '+=${duration * 2}') // wait between

    const background = block.querySelector('img')
    let loaded = false

    if (background.complete) {
      // console.log('image was already loaded')
      loaded = true
      master.play()
    } else {
      background.addEventListener('load', () => {
        // console.log('image is now loaded')
        loaded = true
        master.play()
      })
    }

    // // pause all animations while block is offscreen
    // const onIntersection = (entries) => {
    //   for (const entry of entries) {
    //     if (entry.isIntersecting && loaded == true) {
    //       master.play()
    //     } else if (!entry.isIntersecting) {
    //       master.pause()
    //     }
    //   }
    // }
    // const observer = new IntersectionObserver(onIntersection)
    // observer.observe(block)
  }
}
