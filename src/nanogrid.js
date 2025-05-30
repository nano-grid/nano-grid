import { getPrefix } from './js/nano_helpers.js'

import nnBtn from './js/nano_btn.js'
import nnCaja from './js/nano_caja.js'
import nnCode from './js/nano_code.js'
import nnDesplazador from './js/nano_desplazador.js'
import nnDropdown from './js/nano_dropdown.js'
import nnFila from './js/nano_fila.js'
import nnIcono from './js/nano_icono.js'
import nnPilar from './js/nano_pilar.js'
import nnPill from './js/nano_pill.js'
import nnVideo from './js/nano_video.js'

;[
  nnBtn,
  nnCaja,
  nnCode,
  nnDesplazador,
  nnDropdown,
  nnFila,
  nnIcono,
  nnPilar,
  nnPill,
  nnVideo,
].forEach(comp => {
  const tag = getPrefix(comp.tag)
  if (!customElements.get(tag)) {
    customElements.define(tag, comp)
  }
})

export default {
  nnBtn,
  nnCaja,
  nnCode,
  nnDesplazador,
  nnDropdown,
  nnFila,
  nnIcono,
  nnPilar,
  nnPill,
  nnVideo,
}