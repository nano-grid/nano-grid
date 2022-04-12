import { prepairClasses, validateProp } from "../modules/helpers";
import { directionsType, colorsType } from "../modules/types";
export default class Icon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const color = validateProp('nn-icon', 'color', this.getAttribute('color'), colorsType, '');
    const glyph = this.hasAttribute('glyph') ? this.getAttribute('glyph') : '';
    const direction = validateProp('nn-icon', 'direction', this.getAttribute('direction'), directionsType, 'down');

    const classes = prepairClasses([
      color,
      glyph,
      direction,
      this.className,
    ]);
    this.className = classes;
  }
}