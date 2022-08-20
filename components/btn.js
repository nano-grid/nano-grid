import { nano } from "../modules/helpers";
import { colorsType } from "../modules/types";
import { directionsType, modeType } from "../modules/types";
import { directionsDictionary } from "../modules/dictionary";

export default class Btn extends HTMLElement {
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
    const btn = this.querySelector('button');
    if (btn) {
      [...arguments].forEach(attr => {
        if (this.hasAttribute(attr) && this.getAttribute(attr) !== 'false') {
          btn.classList.add(`${nano}${attr}`);
        } else {
          btn.classList.remove(`${nano}${attr}`);
        }
      })
    }
  }

  toggleAttrIcon() {
    const icon = this.querySelector('nn-icon');
    if (icon) {
      [...arguments].forEach(attr => {
        if (this.hasAttribute(attr) && this.getAttribute(attr) !== 'false') {
          icon.classList.add(`${nano}${attr}`);
        } else {
          icon.classList.remove(`${nano}${attr}`);
        }
      })
    }
  }

  updateColor() {
    const btn = this.querySelector('button');
    if (btn) {
      btn.classList.remove(...colorsType);
      const colorAttr = `${nano}${this.getAttribute('color')}`;
      if (colorsType.includes(colorAttr)) {
        btn.classList.add(colorAttr);
      } else {
        btn.classList.add(`${nano}silver`);
      }
    }
  }

  updateGlyph() {
    const icon = this.querySelector('nn-icon');
    if (icon) {
      icon.removeNanoClass();
      const glyphAttr = `${nano}icon-${this.getAttribute('glyph')}`;
      if (this.hasAttribute('glyph')) {
        icon.classList.add(glyphAttr);
      }
      this.updateDirection();
      this.toggleAttrIcon('flip');
    }
  }

  updateDirection() {
    const icon = this.querySelector('nn-icon');
    if (icon) {
      icon.classList.remove(...directionsType);
      const directionAttr = this.getAttribute('direction');
      if (Object.keys(directionsDictionary).includes(directionAttr)) {
        icon.classList.add(`${nano}d${directionsDictionary[directionAttr]}`);
      } else if (directionsType.includes(directionAttr)) {
        icon.classList.add(`${nano}d${directionAttr}`);
      } else {
        icon.classList.add(`${nano}down`);
      }
    }
  }

  updateMode() {
    const btn = this.querySelector('button');
    if (btn) {
      btn.classList.remove(...modeType);
      const modeAttr = `${nano}${this.getAttribute('mode')}`;
      if (modeType.includes(modeAttr)) {
        btn.classList.add(modeAttr);
      } else {
        btn.classList.add(`${nano}flat`);
      }
    }
  }

  updateText() {
    const caption = this.querySelector('.caption');
    if (caption) {
      const textAttr = this.getAttribute('text');
      if (this.hasAttribute('text')) {
        caption.innerHTML = textAttr;
      } else {
        caption.innerHTML = "";
      }
    }
  }

  updateTitle() {
    const btn = this.querySelector('button');
    if (btn) {

      const titleAttr = this.getAttribute('title');
      const textAttr = `${this.getAttribute('text')}'s Button`;
      const glyphAttr = `${this.getAttribute('glyph')}'s Button`;

      if (this.hasAttribute('title')) {
        btn.setAttribute("title", titleAttr);
        btn.setAttribute("aria-label", titleAttr);
      } else if (this.hasAttribute('text')) {
        btn.setAttribute("title", textAttr);
        btn.setAttribute("aria-label", textAttr);
      } else if (this.hasAttribute('glyph')) {
        btn.setAttribute("title", glyphAttr);
        btn.setAttribute("aria-label", glyphAttr);
      } else {
        btn.removeAttribute("title", "aria-label");
      }
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <button class="${nano}btn">
        <nn-icon></nn-icon>
        <span class="caption"></span>
      </button>
    `;

    this.toggleAttr('active', 'round');
    this.toggleAttrIcon('flip');
    this.updateText();
    this.updateTitle();
    this.updateColor();
    this.updateMode();
    this.updateDirection();
    this.updateGlyph();
  }

  static get observedAttributes() {
    return ['color', 'mode', 'direction', 'glyph', 'text', 'title', 'active', 'to', 'tag', 'round', 'flip'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'color':
        this.updateColor();
        break;
      case 'mode':
        this.updateMode();
        break;
      case 'direction':
        this.updateDirection();
        break;
      case 'glyph':
        this.updateGlyph();
        break;
      case 'text':
        this.updateText();
        break;
      case 'title':
        this.updateTitle();
        break;
      case 'active':
        this.toggleAttr('active');
        break;
      case 'round':
        this.toggleAttr('round');
        break;
      case 'flip':
        this.toggleAttrIcon('flip');
        break;
    }
  }
}