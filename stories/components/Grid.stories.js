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

nn-pilar {
  nn-btn {
    width: 100%;
  }
}
    
.preview-box {
  nn-fila {
    background-color: #23233a;
  }
}
`

const sizes = [
  '1/20',
  '1/19',
  '1/18',
  '1/17',
  '1/16',
  '1/15',
  '1/14',
  '1/13',
  '1/12',
  '1/11',
  '1/10',
  '1/9',
  '1/8',
  '1/7',
  '3/20',
  '1/6',
  '1/5',
  '1/4',
  '3/10',
  '1/3',
  '7/20',
  '2/5',
  '5/12',
  '9/20',
  '1/2',
  '11/20',
  '7/12',
  '3/5',
  '13/20',
  '2/3',
  '7/10',
  '3/4',
  '4/5',
  '5/6',
  '17/20',
  '9/10',
  '11/12',
  '19/20',
  '1/1',
]
  .map(
    size => `
    <nn-fila>
      <nn-pilar size="100px">
        <nn-btn color="${gColors['indigo'].hex}">${size}</nn-btn>
      </nn-pilar>

      <nn-pilar size="100% - 100px">
        <nn-fila>
          <nn-pilar size="${size} * 100%">
            <nn-btn color="${gColors['rebecca-purple'].hex}"></nn-btn>
          </nn-pilar>
        </nn-fila>
      </nn-pilar>

    </nn-fila>
    `
  )
  .join('\n    ')

const html = `${sizes}`

const nanoFila = `
<section>
  <h2>nn-fila</h2>

  <blockquote>
    The <nn-pill color="${
      gColors['mindaro'].hex
    }">nn-fila</nn-pill> is a flexible row container Web Component. It’s designed to lay out children in a horizontal flow with customizable gaps and inline padding, using CSS variables to control spacing dynamically.
  </blockquote>

  <h3>Usage</h3>

  ${code(`
<nn-fila gap="1rem" padding-inline="1.5rem">
<div>Column A</div>
<div>Column B</div>
<div>Column C</div>
</nn-fila>
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
        <nn-pill color="${gColors['mindaro'].hex}">
          gap
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the horizontal spacing between children (via <nn-pill color="${
          gColors['mindaro'].hex
        }">--nn-fila-gap</nn-pill>).
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
          padding-inline
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Controls the left and right padding of the row (via <nn-pill color="${
          gColors['mindaro'].hex
        }">--nn-fila-padding-inline</nn-pill>).
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

const nanoPilar = `
  <section>
    <h2>nn-pilar</h2>

    <blockquote>
      The <nn-pill color="${
        gColors['mindaro'].hex
      }">nn-pilar</nn-pill> component defines a column inside an <nn-pill color="${
  gColors['mindaro'].hex
}">&lt;nn-fila&gt;</nn-pill> row. Its width is set via a <nn-pill color="${
  gColors['mindaro'].hex
}">size</nn-pill> attribute, allowing fixed values, percentages, or even dynamic <nn-pill color="${
  gColors['mindaro'].hex
}">calc()</nn-pill> expressions.
    </blockquote>

    <h3>Usage</h3>

    ${code(`
<nn-fila gap=".5rem">
  <nn-pilar size="150px">Fixed</nn-pilar>
  <nn-pilar size="100% - 150px - .5rem">Flexible</nn-pilar>
</nn-fila>
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
          <nn-pill color="${gColors['mindaro'].hex}">
            size
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Controls the width of the column. Supports fixed units (e.g., <nn-pill color="${
            gColors['mindaro'].hex
          }">200px</nn-pill>), relative units (e.g., <nn-pill color="${
  gColors['mindaro'].hex
}">20%</nn-pill>), or expressions like <nn-pill color="${
  gColors['mindaro'].hex
}">100% - 1rem</nn-pill>. If it includes math operators, it’s wrapped in <nn-pill color="${
  gColors['mindaro'].hex
}">calc(...)</nn-pill>.
        </nn-pilar>
      </nn-fila>
    </div>
  </section>
`

export const Grid = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <style>${style}</style>
    
    <nn-caja padding="1rem" max-width="1200px">
      <h1>Nano Grid</h1>

      ${nanoFila}

      ${nanoPilar}
    
      <section class="preview-box">
        <h3>Preview</h3>
        ${html}
      </section>

      <section class="preview-box">
        <h3>Search Bar Layout:</h3>
        <nn-fila>
          <nn-pilar size="35px">
            <nn-btn color="${gColors['alice-blue'].hex}">🔎</nn-btn>
          </nn-pilar>
          <nn-pilar size="100% - 35px * 2">
            <nn-btn color="${gColors['white'].hex}">100% - 35px * 2</nn-btn>
          </nn-pilar>
          <nn-pilar size="35px">
            <nn-btn color="${gColors['lavender-blush'].hex}">✖️</nn-btn>
          </nn-pilar>
        </nn-fila>
      </section>

      <section class="preview-box">
       <h3>Dominican Flag Layout:</h3>
        <nn-fila>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${gColors['spanish-blue'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="35px">
            <nn-btn color="${gColors['white'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${gColors['sizzling-red'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="100%">
            <nn-btn color="${gColors['white'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${gColors['sizzling-red'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="35px">
            <nn-btn color="${gColors['white'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${gColors['spanish-blue'].hex}"></nn-btn>
          </nn-pilar>
        </nn-fila>
      </section>
    </nn-caja>

`
  return container
}
