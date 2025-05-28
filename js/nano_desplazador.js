import { getPrefix } from './nano_helpers.js'

class nnDesplazador extends HTMLElement {
  constructor() {
    super()
  }
}

const tag = getPrefix('desplazador')
if (!customElements.get(tag)) {
  customElements.define(tag, nnDesplazador)
}
