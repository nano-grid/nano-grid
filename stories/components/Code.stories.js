import '../../src/nano-grid.css'
import { allColors } from '../assets/db_wiki-colors.js'
import { code } from '../assets/utils.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const nanoCode = `
<section>
  <h1>nn-code</h1>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
    }">nn-code</nn-pill> is a Web Component for displaying syntax-highlighted JavaScript, HTML, CSS code. It safely escapes characters and highlights reserved words, strings, comments, numbers, booleans, and brackets.
  </blockquote>

  <h3>Usage</h3>

  ${code(
    `
<nn-code>
  import { get } from 'module'

  const example = true
  // This is a comment
</nn-code>
`
  )}

  <h3>Highlight Classes</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Class
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    ${[
      [
        'nn-reserved',
        `Reserved keywords like <nn-pill color="${allColors['mindaro'].hex}">import</nn-pill>, <nn-pill color="${allColors['mindaro'].hex}">new</nn-pill>`,
      ],
      [
        'nn-boolean',
        `Boolean values like <nn-pill color="${allColors['mindaro'].hex}">true</nn-pill>, <nn-pill color="${allColors['mindaro'].hex}">false</nn-pill>`,
      ],
      ['nn-string', 'Quoted strings'],
      ['nn-comment', 'Single- and multi-line comments'],
      ['nn-number', 'Numeric literals'],
      [
        'nn-type',
        `HTML-like tags such as <nn-pill color="${allColors['mindaro'].hex}">&lt;div&gt;</nn-pill>`,
      ],
      ['nn-parenthesis', 'Brackets, braces, and parentheses'],
      ['nn-n-line', 'Line breaks'],
      ['nn-tab', 'Tabs'],
      ['nn-space', 'Spaces'],
    ]
      .map(
        ([cls, desc]) => `
      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${allColors['mindaro'].hex}">${cls}</nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          ${desc}
        </nn-pilar>
      </nn-fila>`
      )
      .join('')}
  </div>
</section>
`

export const Code = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoCode}
    </nn-caja>
`
  return container
}
