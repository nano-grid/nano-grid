import { textColorFromBackground } from './nano_helpers.js'

export default class nnPill extends HTMLElement {
  constructor() {
    super()
  }

  static attrs = ['color', 'text-color']

  static get observedAttributes() {
    return this.attrs
  }

  static tag = 'pill'

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
    } else {
      this.style.setProperty(
        `--nn-pill-text-color`,
        textColorFromBackground(color || '#333333')
      )
    }
  }
}
