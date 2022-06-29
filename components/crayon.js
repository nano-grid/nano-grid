import { nano } from "../modules/helpers";
import { colorsType } from "../modules/types";

export default class Crayon extends HTMLElement {
  constructor() {
    super();
  }

  updateColor() {
    this.classList.remove(...colorsType);
    const colorAttr = `${nano}${this.getAttribute('color')}`;
    if (colorsType.includes(colorAttr)) {
      this.classList.add(colorAttr);
    } else {
      this.classList.add(`${nano}charcoal`);
    }
  }

  connectedCallback() {
    this.updateColor();
  }

  static get observedAttributes() {
    return ['color'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'color':
        this.updateColor();
        break;
    }
  }
}