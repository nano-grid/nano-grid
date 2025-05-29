import '../src/nano-grid.css'
import '../src/nano-grid.js'
import { gColors } from '../src/gcolors.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const style = `
svg {
  margin: auto;

  circle {
    transition: fill 200ms ease;
  }

  path {
    transition: stroke 200ms ease;
  }

  &:hover {
    circle {
      fill: #485da1;
    }

    path {
      stroke: #6fcee9;
    }
  }
}
`

export const Intro = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
<style>${style}</style>

<nn-caja padding="1rem" max-width="1200px">

  <svg width="600" height="600" viewBox="0 0 158.75 158.75">
    <g transform="translate(0 -138.25)">
      <circle cx="133.132" cy="241.722" r="10.831" fill="#299f42"/>
      <circle cx="55.395" cy="163.837" r="10.831" fill="#299f42"/>
      <circle cx="55.309" cy="241.722" r="10.831" fill="#299f42"/>
      <path fill="none" stroke="#539f29" stroke-linejoin="round" stroke-width="10.583" d="m29.368 189.84 25.94-25.942v77.824l-25.94 25.94z"/>
      <path fill="none" stroke="#66bf31" stroke-linejoin="round" stroke-width="10.583" d="m55.309 163.898 77.823 77.824-25.94 25.94-77.824-77.823z"/>
      <circle cx="29.368" cy="189.84" r="10.831" fill="#299f42"/>
      <circle cx="133.132" cy="163.898" r="10.831" fill="#299f42"/>
      <circle cx="29.368" cy="267.663" r="10.831" fill="#299f42"/>
      <path fill="none" stroke="#78d048" stroke-linejoin="round" stroke-width="10.583" d="M133.132 163.898v77.824l-25.94 25.94V189.84z"/>
      <circle cx="107.191" cy="189.84" r="10.831" fill="#299f42"/>
      <circle cx="107.191" cy="267.663" r="10.831" fill="#299f42"/>
    </g>
  </svg>

  <section>
    <h1>Nano Grid</h1>

    <p>Nano Grid is a lightweight set of custom elements designed to provide minimal yet powerful UI primitives without relying on any framework. Each component is built using native Web Components and encapsulates its behavior and styling, making it easy to drop into any project — React, Vue, plain HTML, or otherwise.</p>

    <p>These components embrace progressive enhancement, low overhead, and modern browser standards. They are declarative, styleable via CSS variables, and interoperable with design systems.</p>

    <h2>Key Features</h2>

    <div class="table">
    

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${gColors['mindaro'].hex}">
            Framework-agnostic
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Use them anywhere HTML is valid.
        </nn-pilar>
      </nn-fila>

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${gColors['mindaro'].hex}">
            Theme-ready
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Customize appearance via CSS variables.
        </nn-pilar>
      </nn-fila>

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${gColors['mindaro'].hex}">
            Zero runtime dependencies
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          No build steps or external libraries.
        </nn-pilar>
      </nn-fila>

      <nn-fila gap=".25rem" break="sm">
        <nn-pilar size="200px">
          <nn-pill color="${gColors['mindaro'].hex}">
            Composable primitives
          </nn-pill>
        </nn-pilar>
        <nn-pilar size="100% - 200px - .25rem">
          Layout and behavior-focused building blocks.
        </nn-pilar>
      </nn-fila>
    </div>

    <p>Whether you're building dashboards, visual tools, or internal systems, Nano Grid gives you the essential UI tools to move fast without giving up control.</p>
  </section>

</nn-caja>
`
  return container
}
