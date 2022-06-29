import { nano } from "../modules/helpers";
import { containerSizesType } from "../modules/types";

export default class Container extends HTMLElement {
  constructor() {
    super();
  }

  updateSize() {
    this.classList.remove(...containerSizesType);
    const sizeAttr = `${nano}sz${this.getAttribute('size')}`;
    if (containerSizesType.includes(sizeAttr)) {
      this.classList.add(sizeAttr);
    }
  }

  connectedCallback() {
    this.updateSize();
  }

  static get observedAttributes() {
    return ['size'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'size':
        this.updateSize();
        break;

    }
  }
}