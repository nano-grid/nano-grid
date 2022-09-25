import { nano } from "../modules/helpers";

export default class Btn extends HTMLElement {
  constructor() {
    super();
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
      });
    }
  }

  updateIconAttr() {
    const icon = this.querySelector('nn-icon');
    if (icon) {
      [...arguments].forEach(attr => {
        const htmlAttr = this.getAttribute(`${nano}${attr}`);
        if (this.hasAttribute(`${nano}${attr}`)) {
          icon.setAttribute(`${nano}${attr}`, htmlAttr);
        } else {
          icon.removeAttribute(`${nano}${attr}`);
        }
      });
    }
  }

  updateText() {
    const caption = this.querySelector('.caption');
    if (caption) {
      const textAttr = this.getAttribute(`${nano}text`);
      if (this.hasAttribute(`${nano}text`)) {
        caption.innerHTML = textAttr;
      } else {
        caption.innerHTML = "";
      }
    }
  }

  updateTitle() {
    const btn = this.querySelector('button');

    if (btn) {
      const titleAttr = this.getAttribute(`title`);
      const textAttr = `${this.getAttribute(`${nano}text`)}'s Button`;
      const glyphAttr = `${this.getAttribute(`${nano}glyph`)}'s Button`;

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

    this.toggleAttr(`${nano}active`);
    this.updateText();
    this.updateTitle();
    this.updateIconAttr('direction', 'glyph', 'flip');
  }

  static get observedAttributes() {
    return [
      `title`,
      `${nano}direction`,
      `${nano}glyph`,
      `${nano}flip`,
      `${nano}text`,
      `${nano}active`,
      `${nano}to`,
      `${nano}tag`,
    ];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case `title`:
        this.updateTitle();
        break;
      case `${nano}direction`:
        this.updateIconAttr('direction');
        break;
      case `${nano}glyph`:
        this.updateIconAttr('glyph');
        break;
      case `${nano}text`:
        this.updateText();
        break;
      case `${nano}active`:
        this.toggleAttr(`${nano}active`);
        break;
      case `${nano}flip`:
        this.updateIconAttr('flip');
        break;
    }
  }
}