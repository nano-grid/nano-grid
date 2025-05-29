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

const nanoDesplazador = `
<section>
  <h1>nn-desplazador</h1>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
    }">nn-desplazador</nn-pill> is a Web Component designed to provide a stylized scrollable container with custom scrollbars. It has no attributes or methods. Its behavior and appearance are fully controlled by CSS.
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

export const Desplazador = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoDesplazador}
    </nn-caja>
`
  return container
}
