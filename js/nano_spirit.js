import { getPrefix } from './nano_helpers.js'

class nnCode extends HTMLElement {
  constructor() {
    super()
  }

  static spirit(word, klaso) {
    return `<span class='nn-${klaso}'>${word}</span>`
  }

  static #ESCAPE_MAP = {
    '\n': 'n-line',
    '\t': 'tab',
    ' ': 'space',
    '<': 'lt',
    '>': 'gt',
    '&': 'amp',
    '/': 'slash',
    '*': 'asterik',
    "'": 's-quote',
    '"': 'd-quote',
    '`': 'acute',
    '(': 'parenthesis-o',
    '[': 'bracket-o',
    '{': 'brace-o',
    ')': 'parenthesis-c',
    ']': 'bracket-c',
    '}': 'brace-c',
  }

  static #REVERSE_ESCAPE_MAP = Object.fromEntries(
    Object.entries(nnCode.#ESCAPE_MAP).map(([char, name]) => [
      `♥♥${name}♥♥`,
      char,
    ])
  )

  static #escapeChar(char) {
    return `♥♥${nnCode.#ESCAPE_MAP[char]}♥♥`
  }

  static compressText(text) {
    return text
      .trim()
      .replace(/[\n\t <>&/*'"`(){}\[\]]/g, char => nnCode.#escapeChar(char))
  }

  static decompressText(text) {
    for (const [pattern, original] of Object.entries(
      nnCode.#REVERSE_ESCAPE_MAP
    )) {
      const replaceWith = pattern.includes('n-line')
        ? `${nnCode.spirit('', 'n-line')}<br>`
        : pattern.includes('tab')
        ? nnCode.spirit('', 'tab')
        : pattern.includes('space')
        ? nnCode.spirit('', 'space')
        : `&#${original.charCodeAt(0)};`

      text = text.replaceAll(pattern, replaceWith)
    }
    return text
  }

  static formatJs(text) {
    let processed = nnCode.compressText(text)

    processed = processed.replace(
      /(♥♥(?:s-quote|d-quote|acute)♥♥).*?(♥♥(?:s-quote|d-quote|acute)♥♥)/g,
      match => nnCode.spirit(match, 'string')
    )

    processed = processed.replace(/(♥♥slash♥♥){2}.*?(♥♥n-line♥♥)/g, match =>
      nnCode.spirit(match, 'comment')
    )

    processed = processed.replace(
      /(♥♥slash♥♥)(♥♥asterik♥♥).*?(♥♥asterik♥♥)(♥♥slash♥♥)/g,
      match => nnCode.spirit(match, 'comment')
    )

    processed = processed.replace(/\b(new|import|from|get|set)\b/g, match =>
      nnCode.spirit(match, 'reserved')
    )

    processed = processed.replace(/\b(true|false|null|undefined)\b/g, match =>
      nnCode.spirit(match, 'boolean')
    )

    processed = processed.replace(/[+-]?(\d+)?\.?\d+/g, match =>
      nnCode.spirit(match, 'number')
    )

    processed = processed.replace(/(♥♥lt♥♥).*?(♥♥gt♥♥)/g, match =>
      nnCode.spirit(match, 'type')
    )

    processed = processed.replace(
      /♥♥(parenthesis-[oc]|bracket-[oc]|brace-[oc])♥♥/g,
      match => nnCode.spirit(match, 'parenthesis')
    )

    return nnCode.decompressText(processed)
  }

  connectedCallback() {
    this.innerHTML = nnCode.formatJs(this.innerHTML)
  }

  static get observedAttributes() {
    return ['text']
  }
}

const tag = getPrefix('code')
if (!customElements.get(tag)) {
  customElements.define(tag, nnCode)
}

export default nnCode
