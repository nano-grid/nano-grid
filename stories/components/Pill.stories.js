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

const nanoPill = `
  <section>
    <h1>nn-pill</h1>

    <blockquote>
      The <nn-pill color="${
        allColors['mindaro'].hex
      }">nn-pill</nn-pill> component is a compact, colored label used for inline badges, tags, or indicators. It automatically adapts its text color based on the background for accessibility, or you can override it.
    </blockquote>

    <h3>Usage</h3>

    ${code(`
<nn-pill color="#673ab7">Primary</nn-pill>
<nn-pill color="#ffd600" text-color="#000">Highlight</nn-pill>
    `)}

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
            color
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Sets the background color of the pill using any valid CSS color.
        </nn-pilar>
      </nn-fila>

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${allColors['mindaro'].hex}">
            text-color
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Optional. Overrides the automatic text color and sets a custom one.
        </nn-pilar>
      </nn-fila>
    </div>
  </section>
`

export const Pill = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoPill}
    </nn-caja>
`
  return container
}
