import { code, gColors } from '../assets/head.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const nanoDropdown = `
<section>
  <h1>nn-dropdown</h1>

  <blockquote>
    The <nn-pill color="${
      gColors['mindaro'].hex
    }">nn-dropdown</nn-pill> is a Web Component for creating toggleable dropdown panels. It renders a button trigger using a <nn-pill color="${
  gColors['mindaro'].hex
}">label</nn-pill> or an <nn-pill color="${
  gColors['mindaro'].hex
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
        <nn-pill color="${gColors['mindaro'].hex}">
          label
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Sets the text content of the trigger button.
      </nn-pilar>
    </nn-fila>

    <nn-fila gap=".25rem" break="sm">
      <nn-pilar size="200px">
        <nn-pill color="${gColors['mindaro'].hex}">
          icon
        </nn-pill>
      </nn-pilar>
      <nn-pilar size="100% - 200px - .25rem">
        Adds an <nn-pill color="${
          gColors['mindaro'].hex
        }">&lt;nn-icono&gt;</nn-pill> inside the button trigger using the given class.
      </nn-pilar>
    </nn-fila>
  </div>

  <section class="preview-box">
    <h3>Preview</h3>
    <nn-dropdown label="Open Right">
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><button>Item 2</button></li>
      </ul>
    </nn-dropdown>
    <nn-dropdown label="Open Left" position="left">
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><button>Item 2</button></li>
      </ul>
    </nn-dropdown>
  </section>

</section>
`

export const Dropdown = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoDropdown}
    </nn-caja>
`
  return container
}
