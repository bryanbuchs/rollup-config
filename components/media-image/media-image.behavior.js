/**
 * MediaImage
 *
 */

// straight import doesn't work; use relative path to node_modules
import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.js'
import PhotoSwipe from '../../node_modules/photoswipe/dist/photoswipe.esm.js'
import '../../node_modules/photoswipe/dist/photoswipe.css'

import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

Drupal.behaviors.MediaImage = {
  attach: function (context) {
    const elements = once('MediaImage', '.media-image', context)

    elements.forEach(figure => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: figure.querySelector('a[data-pswp-width]'),
        pswpModule: PhotoSwipe,
        bgOpacity: 0.9,
        zoom: false,
        padding: { top: 60, bottom: 60, left: 60, right: 60 }
      })

      new PhotoSwipeDynamicCaption(lightbox, {
        type: 'below',
        verticallyCenterImage: true,
        mobileLayoutBreakpoint: 819,
        captionContent: el => {
          let figcaption = el.data.element.nextElementSibling
          return figcaption ? figcaption.innerHTML : null
        }
      })

      lightbox.init()
    })
  }
}
