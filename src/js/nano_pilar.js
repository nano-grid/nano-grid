export default class nnPilar extends HTMLElement {
  constructor() {
    super()
  }

  static tag = 'pilar'

  static get observedAttributes() {
    return ['size']
  }

  #updateSize() {
    const attr = this.getAttribute('size')
    if (attr) {
      const isCalc = /[-+*/]/.test(attr)
      this.style.setProperty('--nn-pilar-size', isCalc ? `calc(${attr})` : attr)
    }
  }

  connectedCallback() {
    this.#updateSize()
  }

  attributeChangedCallback(name) {
    if (name === 'size') {
      this.#updateSize()
    }
  }
}
