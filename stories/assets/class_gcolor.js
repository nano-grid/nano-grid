export const getCases = (label) => {
  const spinalCase = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')       // spaces to hyphen
    .replace(/_/g, '-')         // underscore to hyphen
    .replace(/-+/g, '-')        // multiple hyphens to single hyphen

  const words = label
    .replace(/[_-]/g, ' ')
    .trim()
    .split(/\s+/)

  const titleCase = words
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')

  const pascalCase = words
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')

  const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1)

  return { spinalCase, titleCase, pascalCase, camelCase }
}

export class gColor {
  #cases
  label
  hex

  constructor(label, hex) {
    this.label = label
    this.hex = hex.toUpperCase()
    this.#cases = getCases(label)
  }

  get opacity() {
    if (this.hex.length === 9) {
      return Math.round((parseInt(this.hex.substr(7, 2), 16) / 255) * 100)
    }
    return 100
  }

  get red() {
    return parseInt(this.hex.substr(1, 2), 16)
  }

  get green() {
    return parseInt(this.hex.substr(3, 2), 16)
  }

  get blue() {
    return parseInt(this.hex.substr(5, 2), 16)
  }

  get hsl() {
    const { hue, saturation, lightness } = this.#computeHSL()
    return `hsl(${hue}deg ${saturation}% ${lightness}% / ${this.opacity}%)`
  }

  #computeHSL() {
    const r = this.red / 255
    const g = this.green / 255
    const b = this.blue / 255

    const cmin = Math.min(r, g, b)
    const cmax = Math.max(r, g, b)
    const delta = cmax - cmin

    let h = 0, s = 0, l = (cmax + cmin) / 2

    if (delta !== 0) {
      if (cmax === r) {
        h = ((g - b) / delta) % 6
      } else if (cmax === g) {
        h = (b - r) / delta + 2
      } else {
        h = (r - g) / delta + 4
      }
      h = Math.round(h * 60)
      if (h < 0) h += 360

      s = delta / (1 - Math.abs(2 * l - 1))
    }

    return {
      hue: h,
      saturation: +(s * 100).toFixed(1),
      lightness: +(l * 100).toFixed(1)
    }
  }

  get hue() {
    return this.#computeHSL().hue
  }

  get saturation() {
    return this.#computeHSL().saturation
  }

  get lightness() {
    return this.#computeHSL().lightness
  }

  get rgb() {
    return `rgb(${this.red} ${this.green} ${this.blue} / ${this.opacity}%)`
  }

  get spinalCase() {
    return this.#cases.spinalCase
  }

  get pascalCase() {
    return this.#cases.pascalCase
  }

  get camelCase() {
    return this.#cases.camelCase
  }

  get titleCase() {
    return this.#cases.titleCase
  }
}
