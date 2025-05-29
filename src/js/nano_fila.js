import { getPrefix } from './nano_helpers.js'

class nnFila extends HTMLElement {
  constructor() {
    super()
  }

  static attrs = ['gap', 'padding-inline']

  static get observedAttributes() {
    return this.attrs
  }

  #updateAttrs() {
    for (const name of this.constructor.attrs) {
      const value = this.getAttribute(name)
      if (value !== null) {
        this.style.setProperty(`--nn-fila-${name}`, value)
      }
    }
  }

  connectedCallback() {
    this.#updateAttrs()
  }

  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      this.#updateAttrs()
    }
  }
}

const tag = getPrefix('fila')
if (!customElements.get(tag)) {
  customElements.define(tag, nnFila)
}
