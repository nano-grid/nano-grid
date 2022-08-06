import { nano } from "../modules/helpers";
import { directionsType } from "../modules/types";

export default class Icon extends HTMLElement {
  constructor() {
    super();
  }

  removeNanoClass() {
    [...this.classList].forEach(klass => {
      const followsPatttern = /^nn-/g.test(klass);
      if (followsPatttern) {
        this.classList.remove(klass);
      }
    });
  }

  toggleAttr() {
    [...arguments].forEach(attr => {
      if (this.hasAttribute(attr) && this.getAttribute(attr) !== 'false') {
        this.classList.add(`${nano}${attr}`);
      } else {
        this.classList.remove(`${nano}${attr}`);
      }
    })
  }

  updateGlyph() {
    this.removeNanoClass();
    const glyphAttr = `${nano}icon-${this.getAttribute('glyph')}`;
    if (this.hasAttribute('glyph')) {
      this.classList.add(glyphAttr);
    }
    this.updateDirection();
  }

  updateDirection() {
    this.classList.remove(...directionsType);
    const directionAttr = `${nano}${this.getAttribute('direction')}`;
    if (directionsType.includes(directionAttr)) {
      this.classList.add(directionAttr);
    } else {
      this.classList.add(`${nano}down`);
    }
  }

  connectedCallback() {
    this.updateGlyph();
    this.toggleAttr('flip');
  }

  static get observedAttributes() {
    return ['glyph', 'direction', 'flip'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'glyph':
        this.updateGlyph();
        break;
      case 'direction':
        this.updateDirection();
        break;
      case 'flip':
        this.toggleAttr('flip');
        break;
    }
  }
}