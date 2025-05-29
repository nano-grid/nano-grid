export default class nnCaja extends HTMLElement {
  constructor() {
    super()
  }

  static tag = 'caja'

  static attrs = ['padding', 'max-width']

  static get observedAttributes() {
    return this.attrs
  }

  #updateAttrs() {
    for (const name of this.constructor.attrs) {
      const value = this.getAttribute(name)
      if (value !== null) {
        this.style.setProperty(`--nn-caja-${name}`, value)
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
