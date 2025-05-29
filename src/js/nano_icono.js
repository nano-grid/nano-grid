import { getPrefix } from './nano_helpers.js'

class nnIcono extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['rotate']
  }

  #updateRotation() {
    const attr = this.getAttribute('rotate')
    if (attr) {
      this.style.setProperty('--nn-icono-direction', attr)
    }
  }

  connectedCallback() {
    this.#updateRotation()
  }

  attributeChangedCallback(name) {
    if (name === 'rotate') {
      this.#updateRotation()
    }
  }
}

const tag = getPrefix('icono')
if (!customElements.get(tag)) {
  customElements.define(tag, nnIcono)
}
