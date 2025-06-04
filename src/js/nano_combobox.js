export default class nnCombobox extends HTMLElement {
  constructor() {
    super()
    this.isOpen = false
    this._value = ''
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  static tag = 'combobox'

  connectedCallback() {
    this.classList.add('nn-combobox')

    if (!this.querySelector('.combobox-trigger')) {
      const btn = document.createElement('button')
      btn.setAttribute('type', 'button')
      btn.classList.add('combobox-trigger')
      btn.textContent = this.getAttribute('label') || 'Select'
      this.insertBefore(btn, this.firstChild)
    }

    this.button = this.querySelector('.combobox-trigger')

    this.dropdown = this.querySelector('.combobox-content')
    if (!this.dropdown) {
      const wrapper = document.createElement('div')
      wrapper.classList.add('combobox-content')
      while (this.children.length > 1) {
        wrapper.appendChild(this.children[1])
      }
      this.appendChild(wrapper)
      this.dropdown = wrapper
    }

    this.button.addEventListener('click', this.toggleDropdown)

    this.addEventListener('click', e => {
      const target = e.target.closest('[data-value]')
      if (target) {
        const value = target.getAttribute('data-value')
        this.button.textContent = target.textContent
        this.value = value
        this.dispatchEvent(
          new CustomEvent('select', {
            detail: { value },
            bubbles: true,
            composed: true,
          })
        )

        this.dispatchEvent(new Event('change', { bubbles: true }))
        this.close()
      }
    })

    document.addEventListener('click', this.handleOutsideClick)
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  toggleDropdown(e) {
    e.stopPropagation()
    this.isOpen = !this.isOpen
    this.classList.toggle('open', this.isOpen)
  }

  close() {
    this.isOpen = false
    this.classList.remove('open')
  }

  handleOutsideClick(e) {
    if (!this.contains(e.target)) {
      this.close()
    }
  }

  get value() {
    return this._value
  }

  set value(val) {
    this._value = val
    this.setAttribute('value', val)
  }
}
