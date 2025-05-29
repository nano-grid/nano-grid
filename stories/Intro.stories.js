import '../src/nano-grid.css'
import { allColors } from './assets/db_wiki-colors.js'
import { code } from './assets/utils.js'
import logo from "../public/img/nano.svg"

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const style = `
.workarea {
  text-align: center;
}

svg {
  margin: auto;
}

h1 {
  text-transform: uppercase;
}
`

export const Intro = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
<style>${style}</style>

<nn-caja padding="1rem" max-width="1200px">

  <h1>Nano Grid</h1>

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

</nn-caja>
`
  return container
}
