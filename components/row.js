import { prepairClasses, validateProp, nano, checkAttr } from "../modules/helpers";
import { validateSpacing } from "../modules/columns-manager";
import { breakpointsType } from "../modules/types";

export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const group = checkAttr('group', this);
    const component = checkAttr('component', this);
    const vertical = checkAttr('vertical', this);
    const grid = checkAttr('grid', this);
    let role;
    if (this.getAttribute('table-element')) {
      role = 'row';
      if (group) {
        role = 'group';
      }
    }

    let breakpoint = validateProp('nn-row', 'breakpoint', this.getAttribute('breakpoint'), breakpointsType, '');
    if (breakpoint === 'nn-') {
      breakpoint = undefined;
    }

    const spacing = this.hasAttribute('spacing') ? validateSpacing(this.getAttribute('spacing')) : '';

    const classes = prepairClasses([
      group,
      breakpoint,
      spacing,
      vertical,
      component,
      grid,
      this.className || '',
    ]);
    this.className = classes;

    if (role) {
      this.setAttribute('role', role);
    }
  }
}