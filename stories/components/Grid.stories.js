import { nnCode } from '../../src/nano-grid.js'
import '../../src/nano-grid.css'
import { allColors } from '../assets/db_wiki-colors.js'

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
  background-color: #333340;
}

nn-pilar {
  nn-btn {
    width: 100%;
  }
}

.html {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
        <nn-btn color="${allColors['indigo'].hex}">${size}</nn-btn>
      </nn-pilar>

      <nn-pilar size="100% - 100px">
        <nn-fila>
          <nn-pilar size="${size} * 100%">
            <nn-btn color="${allColors['rebecca-purple'].hex}"></nn-btn>
          </nn-pilar>
        </nn-fila>
      </nn-pilar>

    </nn-fila>
    `
  )
  .join('\n    ')

const html = `${sizes}`

export const Grid = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <style>${style}</style>
    
    <nn-caja padding="1rem">
      <h1>NN-Fila & NN-Pilar</h1>

      <section>
        <p>HTML:</p>
        <nn-code>
          ${nnCode.compressText(
            `
<nn-fila>
  <nn-pilar size="1/5 * 100% - 100px">
    20% - 100px
  </nn-pilar>
</nn-fila>
`
          )}
        </nn-code>
      </section>
        
      <section>
        <p>Or:</p>
        <nn-code>
          ${nnCode.compressText(
            `
<nn-fila>
  <nn-pilar size="20%  - 100px">
    20% - 100px
  </nn-pilar>
</nn-fila>
`
          )}
        </nn-code>
      </section>
    
      <section>
        <p>Example:</p>
        ${html}
      </section>

      <section>
        <p>Search Bar Layout:</p>
        <nn-fila>
          <nn-pilar size="35px">
            <nn-btn color="${allColors['alice-blue'].hex}">🔎</nn-btn>
          </nn-pilar>
          <nn-pilar size="100% - 35px * 2">
            <nn-btn color="${allColors['white'].hex}">100% - 35px * 2</nn-btn>
          </nn-pilar>
          <nn-pilar size="35px">
            <nn-btn color="${allColors['lavender-blush'].hex}">✖️</nn-btn>
          </nn-pilar>
        </nn-fila>
      </section>

      <section>
       <p>Dominican Flag Layout:</p>
        <nn-fila>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${allColors['spanish-blue'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="35px">
            <nn-btn color="${allColors['white'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${allColors['sizzling-red'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="100%">
            <nn-btn color="${allColors['white'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${allColors['sizzling-red'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="35px">
            <nn-btn color="${allColors['white'].hex}"></nn-btn>
          </nn-pilar>
          <nn-pilar size="50% - 35px / 2">
            <nn-btn color="${allColors['spanish-blue'].hex}"></nn-btn>
          </nn-pilar>
        </nn-fila>
      </section>
    </nn-caja>

`
  return container
}
