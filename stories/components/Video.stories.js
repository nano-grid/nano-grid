import '../../src/nano-grid.css'
import { allColors } from '../assets/db_wiki-colors.js'
import { code } from '../assets/utils.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const nanoVideo = `
  <section>
    <h1>nn-video</h1>

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
  url="..."
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

export const Video = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML += `
    <nn-caja padding="1rem" max-width="1200px">
      ${nanoVideo}
    </nn-caja>
`
  return container
}
