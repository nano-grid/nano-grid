import { code, gColors } from '../assets/head.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const nanoCaja = `
<section>
  <h1>nn-caja</h1>

  <blockquote>
    The <nn-pill color="${
      gColors['mindaro'].hex
    }">nn-caja</nn-pill> is a Web Component that acts as a styled container. It supports dynamic layout adjustments using custom padding and max-width values via attributes.
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
        <nn-pill color="${gColors['mindaro'].hex}">
          padding
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the padding around the content inside the caja. Accepts any valid CSS length unit (e.g., <nn-pill color="${
          gColors['mindaro'].hex
        }">1rem</nn-pill>, <nn-pill color="${
  gColors['mindaro'].hex
}">16px</nn-pill>).
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
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
        <nn-pill color="${gColors['mindaro'].hex}">
          --nn-caja-padding
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Internal variable set based on the <nn-pill color="${
          gColors['mindaro'].hex
        }">padding</nn-pill> attribute. Can be used in custom styles.
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
          --nn-caja-max-width
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Internal variable set based on the <nn-pill color="${
          gColors['mindaro'].hex
        }">max-width</nn-pill> attribute. Useful for layout styling.
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

export const Caja = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoCaja}
    </nn-caja>
`
  return container
}
