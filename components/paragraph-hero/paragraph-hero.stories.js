/**
 * Paragraph/Hero
 * Large hero image with overlay text
 */

import DrupalAttribute from 'drupal-attribute'

import Component from './paragraph-hero.twig'
import './paragraph-hero.library.js'

// storybook can't process attach_library from included/embedded templates
import '../action/action.library.js'

export default {
  title: 'Paragraph/Hero',
  argTypes: {
    theme: {
      options: ['olive', 'plum', 'lagunita'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    paddings: { disable: true }
  }
}

// ParagraphHero
export const ParagraphHero = {
  name: 'Hero',
  render: Component,
  args: {
    media: `<img
              sizes="100vw, 1600px"
              srcset="
                https://placehold.co/480x230 480w,
                https://placehold.co/820x390 820w,
                https://placehold.co/1200x570 1200w,
                https://placehold.co/1600x760 1600w"
              src="https://placehold.co/1600x1200"
              alt="FPO">`,
    heading: 'Transformation is Inclusive',
    subheading: 'Educate your enterprise: Everyone needs a SEET at the table',
    text: `<p>Tortor fringilla imperdiet nec bibendum porttitor massa. Sit diam ipsum dignissim fermentum id risus nunc ornare. Volutpat dignissim ut ipsum varius purus in ut aliquam. Fermentum non etiam vitae tempor mauris sed. Scelerisque aliquam vel dui sed. </p>`,
    button: {
      url: 'LINK',
      label: 'Call to Action'
    },
    theme: 'olive',
    attributes: new DrupalAttribute()
  }
}
