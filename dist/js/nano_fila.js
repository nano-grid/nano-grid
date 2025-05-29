export default class nnFila extends HTMLElement {
  constructor() {
    super()
  }

  static tag = 'fila'

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
