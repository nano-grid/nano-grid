import { code, gColors } from '../assets/head.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const style = `
nn-fila {
  justify-content: center;
}

.preview-box {
  nn-pilar {
    flex-grow: 1;
    flex-basis: 350px;
    nn-btn {
      width: 100%;
    }
  }
}
`

const colors = Object.values(gColors)
  .sort((a, b) => {
    if (a.saturation !== b.saturation) {
      return b.saturation - a.saturation
    }

    if (a.lightness !== b.lightness) {
      return b.lightness - a.lightness
    }

    if (a.hue !== b.hue) {
      return b.hue - a.hue
    }

    return 0
  })
  .map(
    ({ hex, label }) => `
      <nn-pilar>
        <nn-btn color="${hex}">${label}</nn-btn>
      </nn-pilar>
    `
  )
  .join('\n    ')

const html = `
  <nn-fila gap="1rem">
    ${colors}
  </nn-fila>
`

const nanoBtn = `
<section>
  <h1>nn-btn</h1>

  <blockquote>
    The <nn-pill color="${
      gColors['mindaro'].hex
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
        <nn-pill color="${gColors['mindaro'].hex}">
          color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color of the button or link
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
          link
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        If present, renders an <nn-pill color="${
          gColors['mindaro'].hex
        }">a</nn-pill> element instead of <nn-pill color="${
  gColors['mindaro'].hex
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
        <nn-pill color="${gColors['mindaro'].hex}">
          --nn-btn-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
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

export const Btn = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <style>${style}</style>
    
    <nn-caja padding="1rem" max-width="1200px">

      ${nanoBtn}
    
      <section class="preview-box">
        <h3>Example:</h3>
        ${html}
      </section>
    </nn-caja>

`
  return container
}
