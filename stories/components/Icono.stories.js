import '../../src/nano-grid.css'
import { gColors } from '../../src/gcolors.js'
import { code } from '../assets/utils.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const nanoIcono = `
  <section>
    <h1>nn-icono</h1>

    <blockquote>
      The <nn-pill color="${
        gColors['mindaro'].hex
      }">nn-icono</nn-pill> component displays symbolic icons using a custom icon font (like IcoMoon) and the <nn-pill color="${
  gColors['mindaro'].hex
}">--nn-icono</nn-pill> CSS variable. All icons must be provided via CSS classes mapped to characters from your font.
    </blockquote>

    <h3>Usage</h3>

    ${code(`
<!-- Example icon using a class that sets the correct glyph -->
<nn-icono class="arrow-angle"></nn-icono>

<!-- Rotated using a predefined angle -->
<nn-icono class="arrow-angle" rotate="90deg"></nn-icono>

<!-- Using direction shorthand instead of angle -->
<nn-icono class="arrow-angle" direction="left"></nn-icono>
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

    <nn-fila gap=".25rem"  break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
          rotate
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Rotates the icon using a CSS degree value. Accepts any valid rotation like 
         <nn-pill color="${gColors['mindaro'].hex}">90deg</nn-pill>, 
         <nn-pill color="${gColors['mindaro'].hex}">180deg</nn-pill>, or 
         <nn-pill color="${gColors['mindaro'].hex}">-45deg</nn-pill>
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
          direction
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Human-readable directions like 
        <nn-pill color="${gColors['mindaro'].hex}">up</nn-pill>, 
        <nn-pill color="${gColors['mindaro'].hex}">down</nn-pill>, 
        <nn-pill color="${gColors['mindaro'].hex}">left</nn-pill>, or 
        <nn-pill color="${gColors['mindaro'].hex}">right</nn-pill>, 
        mapped to the corresponding rotation values.
      </nn-pilar>
    </nn-fila>
  </div>

    <h3>Styling</h3>

    <p>
      You must define your icon font via <nn-pill color="${
        gColors['mindaro'].hex
      }">font-family</nn-pill> and link character codes to CSS classes. These classes set the <nn-pill color="${
  gColors['mindaro'].hex
}">--nn-icono</nn-pill> variable using <nn-pill color="${
  gColors['mindaro'].hex
}">content</nn-pill> values from the font.
    </p>

    ${code(`
// Example CSS
nn-icono {
  font-family: "icomoon" !important;
}
nn-icono.arrow-angle {
  --nn-icono: "\\2304";
}
nn-icono.arrow-angle-double {
  --nn-icono: "\\21e3";
}
    `)}

    <p>
      For consistency, use <nn-pill color="${
        gColors['mindaro'].hex
      }">:before</nn-pill> to render the icon, controlled by the <nn-pill color="${
  gColors['mindaro'].hex
}">--nn-icono</nn-pill> variable and optionally rotated using <nn-pill color="${
  gColors['mindaro'].hex
}">--nn-icono-direction</nn-pill>.
    </p>
  </section>
`

export const Icono = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoIcono}
    </nn-caja>
`
  return container
}
