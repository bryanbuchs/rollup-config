/**
 * Paragraph/Marketo
 * Launch a marketo form in a modal
 */

import MicroModal from 'micromodal'
import { hideOthers } from 'aria-hidden'

Drupal.behaviors.ParagraphMarketo = {
  attach: function (context, settings) {
    // MicroModal.init handles all modals on the page matching the openTrigger
    // attribute, so we don't need to pass this through the once() loop

    let restore = null
    MicroModal.init({
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
      openTrigger: 'data-marketo-modal',
      disableScroll: false,
      onShow: modal => {
        restore = hideOthers(modal.querySelector('[role="dialog"]'))
      },
      onClose: () => {
        restore()
      }
    })

    const elements = once('ParagraphMarketo', '.paragraph-marketo', context)
    elements.forEach(paragraph => {
      const form = paragraph.querySelector('form')
      const formid = form.getAttribute('data-formid')
      try {

        MktoForms2.loadForm('//app-ab15.marketo.com', settings.marketo.key, formid)
      } catch (error) {
        console.error(formid, error)
      }
    })
  }
}
