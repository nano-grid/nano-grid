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
`

const code = c => `
<nn-code>
  ${nnCode.compressText(c)}
</nn-code>`

const nanoBtn = `
<section>
  <h2>nn-btn</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
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
        <nn-pill color="${allColors['mindaro'].hex}">
          color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color of the button or link
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          link
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        If present, renders an <nn-pill color="${
          allColors['mindaro'].hex
        }">a</nn-pill> element instead of <nn-pill color="${
  allColors['mindaro'].hex
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
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-btn-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
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

const nanoCaja = `
<section>
  <h2>nn-caja</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
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
        <nn-pill color="${allColors['mindaro'].hex}">
          padding
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the padding around the content inside the caja. Accepts any valid CSS length unit (e.g., <nn-pill color="${
          allColors['mindaro'].hex
        }">1rem</nn-pill>, <nn-pill color="${
  allColors['mindaro'].hex
}">16px</nn-pill>).
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
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
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-caja-padding
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Internal variable set based on the <nn-pill color="${
          allColors['mindaro'].hex
        }">padding</nn-pill> attribute. Can be used in custom styles.
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-caja-max-width
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Internal variable set based on the <nn-pill color="${
          allColors['mindaro'].hex
        }">max-width</nn-pill> attribute. Useful for layout styling.
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

const nanoCode = `
<section>
  <h2>nn-code</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
    }">nn-code</nn-pill> is a Web Component for displaying syntax-highlighted JavaScript, HTML, CSS code. It safely escapes characters and highlights reserved words, strings, comments, numbers, booleans, and brackets.
  </blockquote>

  <h3>Usage</h3>

  ${code(
    `
<nn-code>
  import { get } from 'module'

  const example = true
  // This is a comment
</nn-code>
`
  )}

  <h3>Highlight Classes</h3>

  <div class="table">
    <nn-fila class="heading" gap=".25rem" break="sm">
      <nn-pilar size="200px">
        Class
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Description
      </nn-pilar>
    </nn-fila>

    ${[
      [
        'nn-reserved',
        `Reserved keywords like <nn-pill color="${allColors['mindaro'].hex}">import</nn-pill>, <nn-pill color="${allColors['mindaro'].hex}">new</nn-pill>`,
      ],
      [
        'nn-boolean',
        `Boolean values like <nn-pill color="${allColors['mindaro'].hex}">true</nn-pill>, <nn-pill color="${allColors['mindaro'].hex}">false</nn-pill>`,
      ],
      ['nn-string', 'Quoted strings'],
      ['nn-comment', 'Single- and multi-line comments'],
      ['nn-number', 'Numeric literals'],
      [
        'nn-type',
        `HTML-like tags such as <nn-pill color="${allColors['mindaro'].hex}">&lt;div&gt;</nn-pill>`,
      ],
      ['nn-parenthesis', 'Brackets, braces, and parentheses'],
      ['nn-n-line', 'Line breaks'],
      ['nn-tab', 'Tabs'],
      ['nn-space', 'Spaces'],
    ]
      .map(
        ([cls, desc]) => `
      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${allColors['mindaro'].hex}">${cls}</nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          ${desc}
        </nn-pilar>
      </nn-fila>`
      )
      .join('')}
  </div>
</section>
`

const nanoDesplazador = `
<section>
  <h2>nn-desplazador</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
    }">nn-desplazador</nn-pill> is a Web Component designed to provide a stylized scrollable container with custom scrollbars. It has no attributes or methods—its behavior and appearance are fully controlled by CSS.
  </blockquote>

  <h3>Usage</h3>

  ${code(
    `
<nn-desplazador style="height: 200px;">
  <div style="height: 400px;">
    Scrollable content here
  </div>
</nn-desplazador>
`
  )}

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
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-desplazador-track-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Background color of the scrollbar track
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          --nn-desplazador-thumb-color
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Color of the scrollbar thumb
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

const nanoDropdown = `
<section>
  <h2>nn-dropdown</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
    }">nn-dropdown</nn-pill> is a Web Component for creating toggleable dropdown panels. It renders a button trigger using a <nn-pill color="${
  allColors['mindaro'].hex
}">label</nn-pill> or an <nn-pill color="${
  allColors['mindaro'].hex
}">icon</nn-pill> and displays its inner content as the dropdown menu. It automatically closes when clicking outside.
  </blockquote>

  <h3>Usage</h3>

  ${code(`
<nn-dropdown label="Options">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
</nn-dropdown>
  `)}

  ${code(`
<nn-dropdown icon="chevron-down">
<div class="menu">
  <button>Profile</button>
  <button>Logout</button>
</div>
</nn-dropdown>
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
          label
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the text content of the trigger button.
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          icon
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Adds an <nn-pill color="${
          allColors['mindaro'].hex
        }">&lt;nn-icono&gt;</nn-pill> inside the button trigger using the given class.
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`

const nanoFila = `
<section>
  <h2>nn-fila</h2>

  <blockquote>
    The <nn-pill color="${
      allColors['mindaro'].hex
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
        <nn-pill color="${allColors['mindaro'].hex}">
          gap
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the horizontal spacing between children (via <nn-pill color="${
          allColors['mindaro'].hex
        }">--nn-fila-gap</nn-pill>).
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          padding-inline
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Controls the left and right padding of the row (via <nn-pill color="${
          allColors['mindaro'].hex
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
        allColors['mindaro'].hex
      }">nn-pilar</nn-pill> component defines a column inside an <nn-pill color="${
  allColors['mindaro'].hex
}">&lt;nn-fila&gt;</nn-pill> row. Its width is set via a <nn-pill color="${
  allColors['mindaro'].hex
}">size</nn-pill> attribute, allowing fixed values, percentages, or even dynamic <nn-pill color="${
  allColors['mindaro'].hex
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
          <nn-pill color="${allColors['mindaro'].hex}">
            size
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Controls the width of the column. Supports fixed units (e.g., <nn-pill color="${
            allColors['mindaro'].hex
          }">200px</nn-pill>), relative units (e.g., <nn-pill color="${
  allColors['mindaro'].hex
}">20%</nn-pill>), or expressions like <nn-pill color="${
  allColors['mindaro'].hex
}">100% - 1rem</nn-pill>. If it includes math operators, it’s wrapped in <nn-pill color="${
  allColors['mindaro'].hex
}">calc(...)</nn-pill>.
        </nn-pilar>
      </nn-fila>
    </div>
  </section>
`

const nanoPill = `
  <section>
    <h2>nn-pill</h2>

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

const nanoVideo = `
  <section>
    <h2>nn-video</h2>

    <blockquote>
      The <nn-pill color="${
        allColors['mindaro'].hex
      }">nn-video</nn-pill> component wraps a native <nn-pill color="${
  allColors['mindaro'].hex
}">&lt;video&gt;</nn-pill> element and allows you to declaratively set the video source, format, and width via attributes.
    </blockquote>

    <h3>Usage</h3>

    ${code(`
<nn-video
  url="https://www.w3schools.com/html/mov_bbb.mp4"
  format="video/mp4"
  width="480">
</nn-video>
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
            url
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          The source URL of the video file. Required for playback.
        </nn-pilar>
      </nn-fila>

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${allColors['mindaro'].hex}">
            format
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          The MIME type of the video (e.g., <nn-pill color="${
            allColors['mindaro'].hex
          }">video/mp4</nn-pill>). Defaults to <nn-pill color="${
  allColors['mindaro'].hex
}">video/mp4</nn-pill> if omitted.
        </nn-pilar>
      </nn-fila>

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${allColors['mindaro'].hex}">
            width
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          The pixel width of the rendered video element. Optional.
        </nn-pilar>
      </nn-fila>
    </div>
  </section>
`

const nanoIcono = `
  <section>
    <h2>nn-icono</h2>

    <blockquote>
      The <nn-pill color="${
        allColors['mindaro'].hex
      }">nn-icono</nn-pill> component displays symbolic icons using a custom icon font (like IcoMoon) and the <nn-pill color="${
  allColors['mindaro'].hex
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
        <nn-pill color="${allColors['mindaro'].hex}">
          rotate
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Rotates the icon using a CSS degree value. Accepts any valid rotation like 
         <nn-pill color="${allColors['mindaro'].hex}">90deg</nn-pill>, 
         <nn-pill color="${allColors['mindaro'].hex}">180deg</nn-pill>, or 
         <nn-pill color="${allColors['mindaro'].hex}">-45deg</nn-pill>
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${allColors['mindaro'].hex}">
          direction
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Human-readable directions like 
        <nn-pill color="${allColors['mindaro'].hex}">up</nn-pill>, 
        <nn-pill color="${allColors['mindaro'].hex}">down</nn-pill>, 
        <nn-pill color="${allColors['mindaro'].hex}">left</nn-pill>, or 
        <nn-pill color="${allColors['mindaro'].hex}">right</nn-pill>, 
        mapped to the corresponding rotation values.
      </nn-pilar>
    </nn-fila>
  </div>

    <h3>Styling</h3>

    <p>
      You must define your icon font via <nn-pill color="${
        allColors['mindaro'].hex
      }">font-family</nn-pill> and link character codes to CSS classes. These classes set the <nn-pill color="${
  allColors['mindaro'].hex
}">--nn-icono</nn-pill> variable using <nn-pill color="${
  allColors['mindaro'].hex
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
        allColors['mindaro'].hex
      }">:before</nn-pill> to render the icon, controlled by the <nn-pill color="${
  allColors['mindaro'].hex
}">--nn-icono</nn-pill> variable and optionally rotated using <nn-pill color="${
  allColors['mindaro'].hex
}">--nn-icono-direction</nn-pill>.
    </p>
  </section>
`

export const Intro = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
<style>${style}</style>

<nn-caja padding="1rem" max-width="1200px">
  <h1>Nano Grid</h1>
  
  ${nanoBtn}
  ${nanoCaja}
  ${nanoCode}
  ${nanoDesplazador}
  ${nanoDropdown}
  ${nanoFila}
  ${nanoPilar}
  ${nanoPill}
  ${nanoVideo}
  ${nanoIcono}

</nn-caja>
`
  return container
}
