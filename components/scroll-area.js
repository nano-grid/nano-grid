import { prepairClasses } from "../modules/helpers";

export default class ScrollArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let color = this.hasAttribute('color') ? this.getAttribute('color') : 'silver';
    let vertical = this.getAttribute('vertical') === 'false' ? 'no-vertical' : '';
    let horizontal = this.getAttribute('horizontal') === 'false' ? 'no-horizontal' : '';

    let classes = prepairClasses([
      color,
      vertical,
      horizontal,
      this.className,
    ]);
    this.className = classes;
  }
}