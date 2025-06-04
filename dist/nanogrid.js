const k = "nn-";
function C(r) {
  return [k, r].join("");
}
function E(r) {
  let t = r.replace("#", "");
  t.length === 3 && (t = t.split("").map((o) => o + o).join(""));
  const [e, s, n] = [0, 2, 4].map((o) => parseInt(t.slice(o, o + 2), 16));
  return { r: e, g: s, b: n };
}
function a(r, t = 0.5) {
  const { r: e, g: s, b: n } = E(r);
  return (0.2126 * e + 0.7152 * s + 0.0722 * n) / 255 > t ? "#222" : "#eee";
}
class l extends HTMLElement {
  static attrs = ["color", "link"];
  static get observedAttributes() {
    return this.attrs;
  }
  static tag = "btn";
  #t = null;
  #e = !1;
  connectedCallback() {
    this.#e || requestAnimationFrame(() => {
      if (!this.#t)
        for (this.#t = document.createDocumentFragment(); this.firstChild; )
          this.#t.appendChild(this.firstChild);
      this.#s(), this.#e = !0;
    });
  }
  attributeChangedCallback(t) {
    this.constructor.attrs.includes(t) && this.#s();
  }
  #s() {
    if (!this.#t) return;
    const t = this.getAttribute("color"), e = this.hasAttribute("link");
    this.innerHTML = "";
    const s = document.createElement(e ? "a" : "button");
    if (e || (s.type = "button"), t) {
      const c = a(t);
      this.style.setProperty("--nn-btn-text-color", c), this.style.setProperty("--nn-btn-color", t);
    }
    const n = [...this.constructor.attrs, "class", "style", "id"];
    [...this.attributes].filter(
      (c) => !n.includes(c.name)
    ).forEach((c) => {
      s.setAttribute(c.name, c.value);
    }), s.appendChild(this.#t.cloneNode(!0)), this.appendChild(s);
  }
}
class h extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "caja";
  static attrs = ["padding", "max-width"];
  static get observedAttributes() {
    return this.attrs;
  }
  #t() {
    for (const t of this.constructor.attrs) {
      const e = this.getAttribute(t);
      e !== null && this.style.setProperty(`--nn-caja-${t}`, e);
    }
  }
  connectedCallback() {
    this.#t();
  }
  attributeChangedCallback(t) {
    this.constructor.attrs.includes(t) && this.#t();
  }
}
class i extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "code";
  static spirit(t, e) {
    return `<span class='nn-${e}'>${t}</span>`;
  }
  static #t = {
    "\n": "n-line",
    "	": "tab",
    " ": "space",
    "<": "lt",
    ">": "gt",
    "&": "amp",
    "/": "slash",
    "*": "asterik",
    "'": "s-quote",
    '"': "d-quote",
    "`": "acute",
    "(": "parenthesis-o",
    "[": "bracket-o",
    "{": "brace-o",
    ")": "parenthesis-c",
    "]": "bracket-c",
    "}": "brace-c"
  };
  static #e = Object.fromEntries(
    Object.entries(i.#t).map(([t, e]) => [
      `♥♥${e}♥♥`,
      t
    ])
  );
  static #s(t) {
    return `♥♥${i.#t[t]}♥♥`;
  }
  static compressText(t) {
    return t.trim().replace(/[\n\t <>&/*'"`(){}\[\]]/g, (e) => i.#s(e));
  }
  static decompressText(t) {
    for (const [e, s] of Object.entries(
      i.#e
    )) {
      const n = e.includes("n-line") ? `${i.spirit("", "n-line")}<br>` : e.includes("tab") ? i.spirit("", "tab") : e.includes("space") ? i.spirit("", "space") : `&#${s.charCodeAt(0)};`;
      t = t.replaceAll(e, n);
    }
    return t;
  }
  static formatJs(t) {
    let e = i.compressText(t);
    return e = e.replace(
      /(♥♥(?:s-quote|d-quote|acute)♥♥).*?(♥♥(?:s-quote|d-quote|acute)♥♥)/g,
      (s) => i.spirit(s, "string")
    ), e = e.replace(
      /(♥♥slash♥♥){2}.*?(♥♥n-line♥♥)/g,
      (s) => i.spirit(s, "comment")
    ), e = e.replace(
      /(♥♥slash♥♥)(♥♥asterik♥♥).*?(♥♥asterik♥♥)(♥♥slash♥♥)/g,
      (s) => i.spirit(s, "comment")
    ), e = e.replace(
      /\b(new|import|from|get|set)\b/g,
      (s) => i.spirit(s, "reserved")
    ), e = e.replace(
      /\b(true|false|null|undefined)\b/g,
      (s) => i.spirit(s, "boolean")
    ), e = e.replace(
      /[+-]?(\d+)?\.?\d+/g,
      (s) => i.spirit(s, "number")
    ), e = e.replace(
      /(♥♥lt♥♥).*?(♥♥gt♥♥)/g,
      (s) => i.spirit(s, "type")
    ), e = e.replace(
      /♥♥(parenthesis-[oc]|bracket-[oc]|brace-[oc])♥♥/g,
      (s) => i.spirit(s, "parenthesis")
    ), i.decompressText(e);
  }
  connectedCallback() {
    this.innerHTML = i.formatJs(this.innerHTML);
  }
}
class d extends HTMLElement {
  constructor() {
    super(), this.isOpen = !1, this._value = "", this.toggleDropdown = this.toggleDropdown.bind(this), this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  static tag = "combobox";
  connectedCallback() {
    if (this.classList.add("nn-combobox"), !this.querySelector(".combobox-trigger")) {
      const t = document.createElement("button");
      t.setAttribute("type", "button"), t.classList.add("combobox-trigger"), t.textContent = this.getAttribute("label") || "Select", this.insertBefore(t, this.firstChild);
    }
    if (this.button = this.querySelector(".combobox-trigger"), this.dropdown = this.querySelector(".combobox-content"), !this.dropdown) {
      const t = document.createElement("div");
      for (t.classList.add("combobox-content"); this.children.length > 1; )
        t.appendChild(this.children[1]);
      this.appendChild(t), this.dropdown = t;
    }
    this.button.addEventListener("click", this.toggleDropdown), this.addEventListener("click", (t) => {
      const e = t.target.closest("[data-value]");
      if (e) {
        const s = e.getAttribute("data-value");
        this.button.textContent = e.textContent, this.value = s, this.dispatchEvent(
          new CustomEvent("select", {
            detail: { value: s },
            bubbles: !0,
            composed: !0
          })
        ), this.dispatchEvent(new Event("change", { bubbles: !0 })), this.close();
      }
    }), document.addEventListener("click", this.handleOutsideClick);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  toggleDropdown(t) {
    t.stopPropagation(), this.isOpen = !this.isOpen, this.classList.toggle("open", this.isOpen);
  }
  close() {
    this.isOpen = !1, this.classList.remove("open");
  }
  handleOutsideClick(t) {
    this.contains(t.target) || this.close();
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this._value = t, this.setAttribute("value", t);
  }
}
class u extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "desplazador";
}
class p extends HTMLElement {
  constructor() {
    super(), this.open = !1, this.toggle = this.toggle.bind(this), this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  static tag = "dropdown";
  connectedCallback() {
    this.slot = this.innerHTML, this.innerHTML = `
      <button type="button" class="dropdown-trigger"></button>
      <div class="dropdown-content">${this.slot}</div>
    `, this.querySelector(".dropdown-trigger")?.addEventListener(
      "click",
      this.toggle
    ), document.addEventListener("click", this.handleOutsideClick), this.#t(), this.#e();
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  toggle(t) {
    t.stopPropagation(), this.open = !this.open, this.classList.toggle("open", this.open);
  }
  handleOutsideClick(t) {
    this.contains(t.target) || (this.open = !1, this.classList.remove("open"));
  }
  #t() {
    const t = this.getAttribute("label");
    if (t) {
      const e = this.querySelector(".dropdown-trigger");
      e.innerHTML = `${t} ▼`;
    }
  }
  #e() {
    const t = this.getAttribute("icon");
    if (t) {
      const e = this.querySelector(".dropdown-trigger");
      e.innerHTML = `<nn-icono class="${t}"><nn-icono> ▼`;
    }
  }
}
class b extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "fila";
  static attrs = ["gap", "padding-inline"];
  static get observedAttributes() {
    return this.attrs;
  }
  #t() {
    for (const t of this.constructor.attrs) {
      const e = this.getAttribute(t);
      e !== null && this.style.setProperty(`--nn-fila-${t}`, e);
    }
  }
  connectedCallback() {
    this.#t();
  }
  attributeChangedCallback(t) {
    this.constructor.attrs.includes(t) && this.#t();
  }
}
class g extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "icono";
  static get observedAttributes() {
    return ["rotate"];
  }
  #t() {
    const t = this.getAttribute("rotate");
    t && this.style.setProperty("--nn-icono-direction", t);
  }
  connectedCallback() {
    this.#t();
  }
  attributeChangedCallback(t) {
    t === "rotate" && this.#t();
  }
}
class m extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "pilar";
  static get observedAttributes() {
    return ["size"];
  }
  #t() {
    const t = this.getAttribute("size");
    if (t) {
      const e = /[-+*/]/.test(t);
      this.style.setProperty("--nn-pilar-size", e ? `calc(${t})` : t);
    }
  }
  connectedCallback() {
    this.#t();
  }
  attributeChangedCallback(t) {
    t === "size" && this.#t();
  }
}
class f extends HTMLElement {
  constructor() {
    super();
  }
  static attrs = ["color", "text-color"];
  static get observedAttributes() {
    return this.attrs;
  }
  static tag = "pill";
  connectedCallback() {
    this.#t();
  }
  attributeChangedCallback(t) {
    this.constructor.attrs.includes(t) && this.#t();
  }
  #t() {
    const t = this.getAttribute("color"), e = this.getAttribute("text-color");
    t !== null && this.style.setProperty("--nn-pill-color", t), e !== null ? this.style.setProperty("--nn-pill-text-color", e) : this.style.setProperty(
      "--nn-pill-text-color",
      a(t || "#333333")
    );
  }
}
class v extends HTMLElement {
  constructor() {
    if (super(), !this.querySelector("video")) {
      const t = document.createElement("video");
      t.controls = !0, t.preload = "metadata", t.loading = "lazy";
      const e = document.createElement("source");
      t.appendChild(e), t.appendChild(
        document.createTextNode("Your browser does not support the video tag.")
      ), this.appendChild(t);
    }
    this.$video = this.querySelector("video"), this.$source = this.querySelector("source");
  }
  static tag = "video";
  static get observedAttributes() {
    return ["url", "format", "width"];
  }
  connectedCallback() {
    this.#t();
  }
  attributeChangedCallback() {
    this.#t();
  }
  #t() {
    const t = this.getAttribute("url"), e = this.getAttribute("format") || "video/mp4", s = this.getAttribute("width");
    t && (this.$source.src = t), this.$source.type = e, s && (this.$video.width = s);
  }
}
[
  l,
  h,
  i,
  u,
  p,
  b,
  g,
  m,
  f,
  v,
  d
].forEach((r) => {
  const t = C(r.tag);
  customElements.get(t) || customElements.define(t, r);
});
const x = {
  nnBtn: l,
  nnCaja: h,
  nnCode: i,
  nnDesplazador: u,
  nnDropdown: p,
  nnFila: b,
  nnIcono: g,
  nnPilar: m,
  nnPill: f,
  nnVideo: v,
  nnCombobox: d
};
export {
  x as default
};
//# sourceMappingURL=nanogrid.js.map
