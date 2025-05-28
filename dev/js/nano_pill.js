import { getPrefix } from './nano_helpers.js'

class nnPill extends HTMLElement {
  static attrs = ['color', 'text-color']

  static get observedAttributes() {
    return this.attrs
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.#render()
  }

  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      this.#render()
    }
  }

  #render() {
    const color = this.getAttribute('color')
    const tcolor = this.getAttribute('text-color')

    if (color !== null) {
      this.style.setProperty(`--nn-pill-color`, color)
    }
    if (tcolor !== null) {
      this.style.setProperty(`--nn-pill-text-color`, tcolor)
    }
  }
}

const tag = getPrefix('pill')
if (!customElements.get(tag)) {
  customElements.define(tag, nnPill)
}
