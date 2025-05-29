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
nn-fila {
  justify-content: center;
}

nn-pilar {
  flex-grow: 1;
  flex-basis: 350px;
  nn-btn {
    width: 100%;
  }
}
`

console.clear()
const colors = Object.values(allColors)
  .sort((a, b) => {
    if (a.lightness !== b.lightness) {
      return b.lightness - a.lightness
    }

    if (a.hue !== b.hue) {
      return b.hue - a.hue
    }

    if (a.saturation !== b.saturation) {
      return b.saturation - a.saturation
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

export const Btn = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <style>${style}</style>
    
    <nn-caja padding="1rem">
      <h1>NN-BTN</h1>

      <div>
        <p>HTML:</p>
        <nn-code>
          ${nnCode.compressText(`<nn-btn color="hex-color">label-color</nn-btn>`)}
        </nn-code>
      </div>
    
      <div>
        <p>Example:</p>
        ${html}
      </div>
    </nn-caja>

`
  return container
}
