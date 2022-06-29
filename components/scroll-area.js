import { nano } from "../modules/helpers";
import { colorsType } from "../modules/types";

export default class ScrollArea extends HTMLElement {
  constructor() {
    super();
  }

  toggleAttr() {
    [...arguments].forEach(attr => {
      if (this.hasAttribute(attr) && this.getAttribute(attr) !== 'false') {
        this.classList.add(`${nano}no-${attr}`);
      } else {
        this.classList.remove(`${nano}no-${attr}`);
      }
    })
  }

  updateColor() {
    this.classList.remove(...colorsType);
    const colorAttr = `${nano}${this.getAttribute('color')}`;
    if (colorsType.includes(colorAttr)) {
      this.classList.add(colorAttr);
    } else {
      this.classList.add(`${nano}silver`);
    }
  }

  connectedCallback() {
    this.toggleAttr('vertical', 'horizontal');
    this.updateColor();
  }

  static get observedAttributes() {
    return ['color', 'vertical', 'horizontal'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'color':
        this.updateColor();
        break;
      case 'vertical':
        this.toggleAttr('vertical');
        break;
      case 'horizontal':
        this.toggleAttr('horizontal');
        break;
    }
  }
}