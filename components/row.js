import { prepairClasses, validateProp } from "../modules/helpers";
import { validateSpacing } from "nano-grid/modules/columns-manager";
import { breakpointsType } from "../modules/types";

const nano = 'nn-';
export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const group = this.hasAttribute('group') && this.getAttribute('group') !== 'false' ? 'nano-group' : '';
    const integrated = this.hasAttribute('integrated') && this.getAttribute('integrated') !== 'false' ? 'integrated' : '';
    const vertical = this.hasAttribute('vertical') && this.getAttribute('vertical') !== 'false' ? 'vertical' : '';
    const grid = this.hasAttribute('grid') && this.getAttribute('grid') !== 'false' ? 'grid' : '';
    let role;
    if (this.getAttribute('table-element')) {
      role = 'row';
      if (group) {
        role = 'group';
      }
    }

    let breakpoint = validateProp('nn-row', 'breakpoint', this.getAttribute('breakpoint'), breakpointsType, '');
    if(breakpoint !== "") {
      breakpoint = nano + breakpoint;
    }

    const spacing = this.hasAttribute('spacing') ? validateSpacing(this.getAttribute('spacing')) : '';

    const classes = prepairClasses([
      group,
      breakpoint,
      spacing,
      integrated,
      vertical,
      grid,
      this.className || '',
    ]);
    this.className = classes;

    if (role) {
      this.setAttribute('role', role);
    }
  }
}