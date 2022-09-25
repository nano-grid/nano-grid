import { nano } from "../modules/helpers";
export default class Crayon extends HTMLElement {
  constructor() {
    super();
  }

  updateTag() {
    const tagAttr = this.getAttribute(`${nano}tag`);
    const textHTML = this.innerHTML;
    if (this.hasAttribute(`${nano}tag`)) {
      this.innerHTML = `<${tagAttr}>${textHTML}</${tagAttr}>`;
    } else {
      this.innerHTML = `${textHTML}`;
    }
  }

  connectedCallback() {
    this.updateTag();
  }

  static get observedAttributes() {
    return [`${nano}tag`];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case `${nano}tag`:
        this.updateTag();
        break;
    }
  }
}