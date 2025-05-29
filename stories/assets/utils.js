import { nnCode } from '../../src/nano-grid.js'

export const code = c => `
<nn-code>
  ${nnCode.compressText(c)}
</nn-code>`