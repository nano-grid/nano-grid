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

  updateTag() {
    const tagAttr = this.getAttribute('tag');
    const textHTML = this.innerHTML;
    if(this.hasAttribute('tag')){
      this.innerHTML = `<${tagAttr}>${textHTML}</${tagAttr}>`;
    } else {
      this.innerHTML = `${textHTML}`;
    }
  }

  connectedCallback() {
    this.updateTag();
    this.updateColor();
  }

  static get observedAttributes() {
    return ['color', 'tag'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'tag':
        this.updateTag();
        break;
      case 'color':
        this.updateColor();
        break;
    }
  }
}