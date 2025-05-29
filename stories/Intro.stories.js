import { nnCode } from '../src/nano-grid.js'
import '../src/nano-grid.css'
import { allColors } from './assets/db_wiki-colors.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const style = `
`

const code = c => `
<nn-code>
  ${nnCode.compressText(c)}
</nn-code>`

const nanoBtn = `
<section>
  <h2>nn-btn</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
    }">nn-btn</nn-pill> is a Web Component for rendering styled buttons or links with customizable background colors. It uses a dynamic text color based on the background for contrast and accessibility.
  </blockquote>

  <h3>Usage</h3>

  ${code(
`
<nn-btn
  color="#4caf50"
>
  Open Modal
</nn-btn>
`
  )}

  ${code(
`
<nn-btn
  color="#222222"
  link
  download
  href="..."
>
  Download Link
</nn-btn>
`
  )}

  <h3>Attributes</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Attribute
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem"  break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color of the button or link
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          link
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        If present, renders an <nn-pill color="${
          allColors['mindaro'].hex
        }">a</nn-pill> element instead of <nn-pill color="${
allColors['mindaro'].hex
}">button</nn-pill>
      </nn-pilar>
    </nn-fila>
  </div>

  <h3>CSS Variables</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Variable
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem"  break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-btn-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-btn-text-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Text color
      </nn-pill>
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

const nanoCaja = `
<section>
  <h2>nn-caja</h2>

  <blockquote>
    The <nn-pill color="${allColors['mindaro'].hex}">nn-caja</nn-pill> is a Web Component that acts as a styled container. It supports dynamic layout adjustments using custom padding and max-width values via attributes.
  </blockquote>

  <h3>Usage</h3>

  ${code(
`
<nn-caja
  padding="2rem"
  max-width="800px"
>
  <p>This content is inside a padded box.</p>
</nn-caja>
`
  )}

  <h3>Attributes</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Attribute
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          padding
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the padding around the content inside the caja. Accepts any valid CSS length unit (e.g., <code>1rem</code>, <code>16px</code>).
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          max-width
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Limits the maximum width of the component. Accepts any valid CSS length unit.
      </nn-pilar>
    </nn-fila>
  </div>

  <h3>CSS Variables</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Variable
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-caja-padding
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Internal variable set based on the <code>padding</code> attribute. Can be used in custom styles.
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-caja-max-width
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Internal variable set based on the <code>max-width</code> attribute. Useful for layout styling.
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

const nanoCode = `
<section>
  <h2>nn-code</h2>

  <blockquote>
    The <nn-pill color="${allColors['mindaro'].hex}">nn-code</nn-pill> is a Web Component for displaying syntax-highlighted JavaScript, HTML, CSS code. It safely escapes characters and highlights reserved words, strings, comments, numbers, booleans, and brackets.
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
      ['nn-reserved', 'Reserved keywords like <code>import</code>, <code>new</code>'],
      ['nn-boolean', 'Boolean values like <code>true</code>, <code>false</code>'],
      ['nn-string', 'Quoted strings'],
      ['nn-comment', 'Single- and multi-line comments'],
      ['nn-number', 'Numeric literals'],
      ['nn-type', 'HTML-like tags such as <code>&lt;div&gt;</code>'],
      ['nn-parenthesis', 'Brackets, braces, and parentheses'],
      ['nn-n-line', 'Line breaks'],
      ['nn-tab', 'Tabs'],
      ['nn-space', 'Spaces']
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

const nanoDesplazador = `
<section>
  <h2>nn-desplazador</h2>

  <blockquote>
    The <nn-pill color="${allColors['mindaro'].hex}">nn-desplazador</nn-pill> is a Web Component designed to provide a stylized scrollable container with custom scrollbars. It has no attributes or methods—its behavior and appearance are fully controlled by CSS.
  </blockquote>

  <h3>Usage</h3>

  ${code(
    `
<nn-desplazador style="height: 200px;">
  <div style="height: 400px;">
    Scrollable content here
  </div>
</nn-desplazador>
`
  )}

  <h3>CSS Variables</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Variable
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-desplazador-track-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color of the scrollbar track
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-desplazador-thumb-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Color of the scrollbar thumb
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

export const Intro = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
<style>${style}</style>

<nn-caja padding="1rem">
  <h1>Nano Grid</h1>
  
  ${nanoBtn}
  ${nanoCaja}
  ${nanoCode}
  ${nanoDesplazador}

</nn-caja>
`
  return container
}
