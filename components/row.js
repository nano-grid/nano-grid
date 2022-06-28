import { nano } from "../modules/helpers";
import { breakpointsType, spacingType } from "../modules/types";
export default class Row extends HTMLElement {
  constructor() {
    super();
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

  updateBreakPoint() {
    this.classList.remove(...breakpointsType);
    const breakpointAttr = `${nano}break-${this.getAttribute('breakpoint')}`;
    if (breakpointsType.includes(breakpointAttr)) {
      this.classList.add(breakpointAttr);
    }
  }

  updateSpacing() {
    this.classList.remove(...spacingType);
    const spacingAttr = `${nano}sp${+this.getAttribute('spacing') * 100}`;
    if (spacingType.includes(spacingAttr)) {
      this.classList.add(spacingAttr);
    }
  }

  updateRole() {
    if (this.hasAttribute('table-element') && this.getAttribute('table-element') !== 'false') {
      this.setAttribute('role', 'row');
    } else if (this.hasAttribute('group') && this.getAttribute('group') !== 'false') {
      this.setAttribute('role', 'group');
    } else {
      this.removeAttribute('role');
    }
  }

  updateClasses() {
    this.updateRole();
    this.toggleAttr('group', 'vertical', 'grid');
    this.updateSpacing();
    this.updateBreakPoint();
  }

  connectedCallback() {
    this.updateClasses();
  }

  static get observedAttributes() {
    return ['group', 'breakpoint', 'spacing', 'vertical', 'grid', 'table-element'];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'table-element':
        this.updateRole();
        break;
      case 'group':
        this.updateRole();
        this.toggleAttr('group');
        break;
      case 'spacing':
        this.updateSpacing();
        break;
      case 'vertical':
        this.toggleAttr('vertical');
        break;
      case 'grid':
        this.toggleAttr('grid');
        break;
      case 'breakpoint':
        this.updateBreakPoint();
        break;
    }
  }
}