/**
 * Paragraph/Accordions
 * Group of details summary ish elements
 */

Drupal.behaviors.ParagraphAccordions = {
  attach: function (context, settings) {
    const elements = once('ParagraphAccordions', '.paragraph-accordions', context)
    elements.forEach((paragraph) => {
      // do stuff
    })
  }
}
