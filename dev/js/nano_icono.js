import { getPrefix } from './nano_helpers.js'

class nnIcono extends HTMLElement {
  constructor() {
    super()
  }
}

const tag = getPrefix('icono')
if (!customElements.get(tag)) {
  customElements.define(tag, nnIcono)
}
