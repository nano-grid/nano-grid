import { getPrefix } from './nano_helpers.js'

class nnBtn extends HTMLElement {
  static attrs = ['color', 'link']

  static get observedAttributes() {
    return this.attrs
  }

  #initialContent = null
  #rendered = false

  connectedCallback() {
    if (!this.#rendered) {
      queueMicrotask(() => {
        if (!this.#initialContent) {
          this.#initialContent = document.createDocumentFragment()
          while (this.firstChild) {
            this.#initialContent.appendChild(this.firstChild)
          }
        }
        this.#render()
        this.#rendered = true
      })
    }
  }

  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      this.#render()
    }
  }

  #render() {
    if (!this.#initialContent) return

    const color = this.getAttribute('color')
    const isLink = this.hasAttribute('link')

    this.innerHTML = ''

    const el = document.createElement(isLink ? 'a' : 'button')

    if (!isLink) {
      el.type = 'button'
    }

    if (color) {
      this.style.setProperty('--nn-btn-color', color)
    }

    const doNotForward = [...this.constructor.attrs, 'class', 'style', 'id']
    const attrs = [...this.attributes].filter(
      attr => !doNotForward.includes(attr.name)
    )

    attrs.forEach(attr => {
      el.setAttribute(attr.name, attr.value)
    })

    el.appendChild(this.#initialContent.cloneNode(true))
    this.appendChild(el)
  }
}

const tag = getPrefix('btn')
if (!customElements.get(tag)) {
  customElements.define(tag, nnBtn)
}
