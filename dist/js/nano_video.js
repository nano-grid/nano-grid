export default class nnVideo extends HTMLElement {
  constructor() {
    super()

    if (!this.querySelector('video')) {
      const video = document.createElement('video')
      video.controls = true
      video.preload = 'metadata'
      video.loading = 'lazy'

      const source = document.createElement('source')
      video.appendChild(source)

      video.appendChild(
        document.createTextNode('Your browser does not support the video tag.')
      )

      this.appendChild(video)
    }

    this.$video = this.querySelector('video')
    this.$source = this.querySelector('source')
  }

  static tag = 'video'

  static get observedAttributes() {
    return ['url', 'format', 'width']
  }

  connectedCallback() {
    this.#update()
  }

  attributeChangedCallback() {
    this.#update()
  }

  #update() {
    const url = this.getAttribute('url')
    const format = this.getAttribute('format') || 'video/mp4'
    const width = this.getAttribute('width')

    if (url) this.$source.src = url
    this.$source.type = format
    if (width) this.$video.width = width
  }
}
