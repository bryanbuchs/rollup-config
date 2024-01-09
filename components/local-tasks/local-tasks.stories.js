/**
 * LocalTasks
 *
 */

import Component from './local-tasks.twig'
import './local-tasks.library.js'

export default {
  title: 'Drupal/Local Tasks',
  parameters: {},
  decorators: [(story) => `<div data-gin-accent="blue">${story()}</div>`]
}

export const LocalTasks = {
  render: Component
}
