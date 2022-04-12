import { cleanNano } from "../modules/helpers";
import { validateSize } from "nano-grid/modules/columns-manager";

export default class Column extends HTMLElement {
  constructor() {
    super();
  }

  updateSize() {
    const size = this.getAttribute('size');
    const computedClasses = size ? validateSize(size).class : '';
    const classes = cleanNano([
      this.className,
    ], computedClasses);
    const styles = size ? validateSize(size).style.trim() : '';

    this.className = classes;
    this.style = this.initialStyles + styles;
  }

  connectedCallback() {
    this.initialStyles = this.getAttribute('style');

    const role = this.hasAttribute('table-element') && this.getAttribute('table-element') !== 'false' ? 'cell' : undefined;

    if (role) {
      this.setAttribute('role', role);
    }

    this.updateSize();
  }

  static get observedAttributes() {
    return ['size'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'size') {
      this.updateSize();
    }
  }
}