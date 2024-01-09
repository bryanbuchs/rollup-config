/**
 * RegionHeader
 * Site header: branding/tagline + menu
 */

import 'mmenu-js'
import 'mmenu-js/dist/mmenu.css'
import 'mburger-webcomponent'

Drupal.behaviors.RegionHeader = {
  attach: function (context, settings) {
    const [toggle] = once('MobileMenuToggle', 'mm-burger', context)
    const [nav] = once('MobileMenu', '.nav-footer', context)

    if (nav && toggle) {
      const menu = new Mmenu(
        nav,
        // options
        {
          navbar: false,
          navbars: [
            {
              position: 'top',
              content: `<a href="${settings.baseUrl}">${settings.site.name}</a>`
            }
          ],
          offCanvas: {
            position: 'right'
          },
          slidingSubmenus: false,
          theme: 'dark'
        },
        // configuration
        // layout-container
        {
          classNames: {
            selected: 'menu-item--active'
          },
          offCanvas: {
            clone: true,
            menu: {
              insertMethod: 'append',
              insertSelector: settings.insertSelector || 'body'
            },
            page: {
              selector: '.page-wrapper'
            }
          }
        }
      )

      // remove class so menu doesn't pick up styling
      menu.node.menu.classList.remove('nav-footer')

      // connect the mm-burger to the mmenu
      toggle.setAttribute('role', 'button')
      toggle.setAttribute('aria-label', 'mobile menu')
      toggle.setAttribute('tabindex', 0)
      toggle.setAttribute('menu', menu.node.menu.id)
    }
  }
}
