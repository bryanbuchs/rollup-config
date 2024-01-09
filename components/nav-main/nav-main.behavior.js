/**
 * NavMain
 * Main menu
 */

// import { createPopper } from '@popperjs/core'
import {
  autoUpdate,
  computePosition,
  limitShift,
  offset,
  shift,
  size
} from '@floating-ui/dom'

Drupal.behaviors.NavMain = {
  attach: function (context) {
    const [nav] = once('NavMain', '.nav-main', context)
    const menu = nav.querySelector('.menu--1')

    /*
      0. Add IDs to all submenus, set aria-controls on top-level links
         (see: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/#rps_label)
      0. Submenus should be un-focusable/inert until activated.
      1. When the link is hover'd, "show" the submenu (aria-expanded=true on top-level
         link and aria-hidden=false on the submenu)
      2. when a top-level item is focus'd, space or down arrow reveals the submenu
      3. when a top-level item is focus's, left/right arrows set focus on the siblings
      4. when the list item is focusout'd or mouseout'd, "hide" the menu
         (aria-expanded=false on the top-level link, aria-hidden on the submenu)
      5. When the submenu is visible, up/down arrow moves focus within the group. If
         the focus is on the top-level item, close the group
      6. When ESC key pressed, "hide" all menus
    */

    this.cleanup = null

    const show = (li) => {
      li.cleanup = autoUpdate(li, li.dropdown, () => {
        computePosition(li.toggle, li.dropdown, {
          placement: 'bottom-start',
          middleware: [
            // offset to account for shadow padding
            offset({ alignmentAxis: -5 }),
            // horizontal anchor within viewport
            shift({ limiter: limitShift() }),
            // keep width within viewport
            size({
              padding: 20,
              apply({ availableWidth, elements }) {
                Object.assign(elements.floating.style, {
                  maxWidth: `${availableWidth}px`
                })
              }
            })
          ]
        }).then(({ x, y }) => {
          Object.assign(li.dropdown.style, {
            left: `${x}px`,
            top: `${y}px`
          })
        })
      })

      li.toggle.setAttribute('aria-expanded', true)
      li.dropdown.setAttribute('aria-hidden', false)
      li.dropdown.removeAttribute('tabindex')
      li.dropdown.classList.add('is-animated')
      li.dropdown.querySelector('.menu--2').onanimationend = null
    }

    const animationend = (e) => {
      const li = e.target.closest('.menu-item--1')
      e.target.parentNode.classList.remove('is-animated')
      if (li.cleanup) {
        li.cleanup()
        li.cleanup = null
      }
    }

    const hide = (li) => {
      li.toggle.setAttribute('aria-expanded', false)
      li.dropdown.setAttribute('aria-hidden', true)
      li.dropdown.setAttribute('tabindex', -1)
      li.dropdown.querySelector('.menu--2').onanimationend = animationend
    }

    for (let li of menu.children) {
      const link = li.querySelector(':scope > a')
      const dropdown = li.querySelector(':scope > .nav-main--dropdown')

      li.toggle = link
      li.dropdown = dropdown

      if (dropdown) {
        // show when `li` hovered
        link.addEventListener('mouseenter', (e) => {
          show(li)
        })

        // hide when mouse leaves the `li`
        li.addEventListener('mouseleave', (e) => {
          hide(li)
        })

        // hide when focus leaves the `li`
        li.addEventListener('focusout', (e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            hide(li)
          }
        })
      }
    }

    // while keyboard focus inside nav:
    nav.addEventListener('keydown', (e) => {
      // console.log(e.key)
      // why 2 switches? some keypresses trigger diferent actions depending on context
      // check the focus state and choose an action, then switch through actions and
      // actually trigger something

      let action = null
      switch (e.key) {
        // case 'Space':
        case 'ArrowDown':
          // if focus is ON a toggle, open the menu and move focus to first child
          if (e.target.classList.contains('menu-link--1')) {
            action = 'show'
          }
          // if focus is inside a submenu, move to next sibling OR parent toggle
          if (e.target.closest('.menu--2')) {
            action = 'down'
          }
          break
        case 'ArrowUp':
          // if focus is on a toggle, close the submenu
          if (e.target.classList.contains('menu-link--1')) {
            action = 'close'
          }
          // if focus is inside a submenu, move to previous sibling OR parent toggle
          if (e.target.closest('.menu--2')) {
            action = 'up'
          }
          break
        case 'ArrowRight':
          // if focus is on a toggle, move the next sibling
          if (e.target.classList.contains('menu-link--1')) {
            action = 'right'
          }
          // if focus is inside a submenu, move to previous sibling OR parent toggle
          if (e.target.closest('.menu--2')) {
            action = 'down'
          }
          break
        case 'ArrowLeft':
          // if focus is on a toggle, move to the previous sibling
          if (e.target.classList.contains('menu-link--1')) {
            action = 'left'
          }
          // if focus is inside a submenu, move to previous sibling OR parent toggle
          if (e.target.closest('.menu--2')) {
            action = 'up'
          }
          break
        case 'Escape':
          // if focus is inside a top-level list item, close the submenu and return focus to toggle
          action = 'hide'
          break
      }

      if (action) {
        // prevent arrow keys from scolling page
        e.preventDefault()

        const li = e.target.closest('.menu-item--1')

        switch (action) {
          case 'show':
            if (e.target.nextElementSibling) {
              show(li)
              // set focus to first link in dropdown
              e.target.nextElementSibling.querySelector('a').focus()
            }
            break

          case 'hide':
            hide(li)
            // restore focus on toggle
            e.target
              .closest('.menu-item--1')
              .querySelector('.menu-link--1')
              .focus()
            break

          case 'left':
          case 'right':
            // go up the chain to my list item, move +/-
            const sibling =
              action == 'left'
                ? e.target.closest('.menu-item--1').previousElementSibling
                : e.target.closest('.menu-item--1').nextElementSibling

            // get the first link and move focus
            if (sibling) {
              sibling.querySelector('a').focus()
            }
            break

          case 'up':
          case 'down':
            // get all the links in the submenu
            const collection = e.target
              .closest('.menu--2')
              .querySelectorAll('a')

            // find the currently focused link's index
            const me = Array.from(collection).findIndex((el) => el === e.target)

            // adjust the index +/-
            const moveTo =
              action == 'down'
                ? Math.min(me + 1, collection.length - 1)
                : Math.max(me - 1, 0)

            // move focus
            collection[moveTo].focus()
            break
        }
      }
    })
  }
}
