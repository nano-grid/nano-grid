import { nano } from "../modules/helpers";
export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  updateRole() {
    if (this.hasAttribute(`${nano}table-element`)
      && this.getAttribute(`${nano}table-element`) !== 'false') {
      this.setAttribute('role', 'row');
    } else if (this.hasAttribute(`${nano}group`)
      && this.getAttribute(`${nano}group`) !== 'false') {
      this.setAttribute('role', `group`);
    } else {
      this.removeAttribute('role');
    }
  }

  connectedCallback() {
    this.updateRole();
  }

  static get observedAttributes() {
    return [
      `${nano}table-element`,
    ];
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case `${nano}table-element`:
        this.updateRole();
        break;
    }
  }
}