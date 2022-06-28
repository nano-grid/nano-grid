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
    if (this.hasAttribute('table-element') && this.getAttribute('table-element') !== 'false') {
      this.setAttribute('role', 'cell');
    } else {
      this.removeAttribute('role');
    }
  }

  updateSize() {
    this.removeSizeClass();

    const size = this.getAttribute('size');
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
    return ['size', 'table-element'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'table-element':
        this.updateRole();
        break;
      case 'size':
        this.updateSize();
        break;
    }
  }
}