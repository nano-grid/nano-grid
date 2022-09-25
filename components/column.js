import { nano } from "../modules/helpers";
import { getVals } from "../modules/columns-manager";

export default class Column extends HTMLElement {
  constructor() {
    super();
  }

  removeSizeClass() {
    [...this.classList].forEach(klass => {
      const followsPatttern = /^nn-[w|h]-/g.test(klass);
      if (followsPatttern) {
        this.classList.remove(klass);
      }
    });
  }

  updateRole() {
    if (this.hasAttribute(`${nano}table-element`)
      && this.getAttribute(`${nano}table-element`) !== 'false') {
      this.setAttribute('role', 'cell');
    } else {
      this.removeAttribute('role');
    }
  }

  updateSize() {
    this.removeSizeClass();

    const size = this.getAttribute(`${nano}size`);
    let gVals, wCalc, hCalc, sizeAttr;
    if (size) {
      gVals = getVals(size);
      sizeAttr = gVals.class;
      wCalc = gVals.widthCalc;
      hCalc = gVals.heightCalc;

      this.style.maxWidth = "";
      this.style.flexBasis = "";
      this.style.height = "";

      if (sizeAttr) {
        this.classList.add(sizeAttr);
      }

      if (gVals.widthStyle) {
        this.style.maxWidth = wCalc;
        this.style.flexBasis = wCalc;
      }

      if (gVals.heightStyle) {
        this.style.height = hCalc;
      }
    }
  }

  connectedCallback() {
    this.updateRole()
    this.updateSize();
  }

  static get observedAttributes() {
    return [`${nano}size`, `${nano}table-element`];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case `${nano}table-element`:
        this.updateRole();
        break;
      case `${nano}size`:
        this.updateSize();
        break;
    }
  }
}