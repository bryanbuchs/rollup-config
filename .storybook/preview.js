// Drupal libs
import 'jquery'
import 'Drupal/misc/drupal.js'
import 'Drupal/misc/drupal.init.js'
import 'Drupal/misc/drupalSettingsLoader.js'
// import 'Drupal/modules/system/css/components/hidden.module.css'
// import 'Drupal/modules/system/css/components/js.module.css'
import once from '@drupal/once'
global.once = once

// added as a library in b2b.libraries.yml, replicate for storybook preview
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
window.gsap = gsap

// global styles
import '../components/global/global.library.js'
import '../components/global-layout/global-layout.library.js'
import '../components/global-typography/global-typography.library.js'
import '../components/global-themes/global-themes.library.js'

// storybook preview
// import '../../../contrib/gin/dist/css/theme/variables.css'
// import '../../../contrib/gin/dist/css/theme/accent.css'
import './prevent-default.js'
import './preview.less'

// enable twig handler & filters
import Twig from 'twig'
import drupalizeTwig from 'twig-drupal-filters'
import DrupalAttribute from 'drupal-attribute'

drupalizeTwig(Twig)
Twig.extendFunction('create_attribute', () => { return new DrupalAttribute() })
Twig.extendFilter('typography', (input) => input)
Twig.extendFilter('clean_unique_id', (input) => input)

export const parameters = {
  options: {
    storySort: {
      order: [
        'README',
        'Global',
        'Element',
        ['Text', '*'],
        'Entity',
        'Media',
        'Paragraph',
        'Menu',
        ['Main', 'Footer', 'Social'],
        'Block',
        [
          'Header',
          'Intro',
          'Strategy',
          'Challenges',
          'BEST',
          'Impact',
          'Footer',
          'Stanford'
        ],
        'Region',
        ['Header', 'Content', 'Footer'],
        'Drupal'
      ]
    }
  },

  layout: 'fullscreen', // remove default Storybook padding

  paddings: {
    values: [{ name: 'preview', value: '2rem' }],
    default: 'preview'
  },

  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'fog-50', value: '#edebe5' },
      { name: 'fog-75', value: '#e3e1d8' },
      { name: 'cardinalred', value: '#8c1515' },
      { name: 'theme-olive', value: '#707c36' },
      { name: 'theme-plum', value: '#620059' },
      { name: 'theme-lagunita', value: '#007c92' }
    ]
  }
}

export const argTypes = {}
const hideControls = [
  'attributes',
  'media',
  'config',
  'rows',
  'menu',
  'image',
  'video'
]
hideControls.forEach(key => {
  argTypes[key] = {
    table: {
      disable: true
    }
  }
})
