export default class nnIcono extends HTMLElement {
  constructor() {
    super()
  }

  static tag = 'icono'

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
