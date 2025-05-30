import '../../src/nanogrid_styles.css'
import nn from '../../src/nanogrid.js'
import gColors from '../../src/gcolors.js'

const code = c => `
<nn-code>
  ${nn.nnCode.compressText(c)}
</nn-code>`

export { gColors, code }
