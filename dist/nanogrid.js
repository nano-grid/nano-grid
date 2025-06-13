const k = "nn-";
function A(r) {
  return [k, r].join("");
}
function C(r) {
  let t = r.replace("#", "");
  t.length === 3 && (t = t.split("").map((o) => o + o).join(""));
  const [e, s, c] = [0, 2, 4].map((o) => parseInt(t.slice(o, o + 2), 16));
  return { r: e, g: s, b: c };
}
function a(r, t = 0.5) {
  const { r: e, g: s, b: c } = C(r);
  return (0.2126 * e + 0.7152 * s + 0.0722 * c) / 255 > t ? "#222" : "#eee";
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
    if (Array.from(this.#t.childNodes).some(
      (n) => n.nodeType === Node.ELEMENT_NODE && ["A", "BUTTON"].includes(n.tagName)
    )) {
      this.innerHTML = "", this.appendChild(this.#t.cloneNode(!0));
      const n = this.getAttribute("color");
      if (n) {
        const y = a(n);
        this.style.setProperty("--nn-btn-text-color", y), this.style.setProperty("--nn-btn-color", n);
      }
      return;
    }
    const e = this.getAttribute("color"), s = this.hasAttribute("link");
    this.innerHTML = "";
    const c = document.createElement(s ? "a" : "button");
    if (s || (c.type = "button"), e) {
      const n = a(e);
      this.style.setProperty("--nn-btn-text-color", n), this.style.setProperty("--nn-btn-color", e);
    }
    const o = [...this.constructor.attrs, "class", "style", "id"];
    [...this.attributes].filter(
      (n) => !o.includes(n.name)
    ).forEach((n) => {
      c.setAttribute(n.name, n.value);
    }), c.appendChild(this.#t.cloneNode(!0)), this.appendChild(c);
  }
}
class u extends HTMLElement {
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
      const c = e.includes("n-line") ? `${i.spirit("", "n-line")}<br>` : e.includes("tab") ? i.spirit("", "tab") : e.includes("space") ? i.spirit("", "space") : `&#${s.charCodeAt(0)};`;
      t = t.replaceAll(e, c);
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
class h extends HTMLElement {
  constructor() {
    super();
  }
  static tag = "desplazador";
}
class d extends HTMLElement {
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
class p extends HTMLElement {
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
class b extends HTMLElement {
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
class g extends HTMLElement {
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
class m extends HTMLElement {
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
class f extends HTMLElement {
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
  u,
  i,
  h,
  d,
  p,
  b,
  g,
  m,
  f
].forEach((r) => {
  const t = A(r.tag);
  customElements.get(t) || customElements.define(t, r);
});
const T = {
  nnBtn: l,
  nnCaja: u,
  nnCode: i,
  nnDesplazador: h,
  nnDropdown: d,
  nnFila: p,
  nnIcono: b,
  nnPilar: g,
  nnPill: m,
  nnVideo: f
};
export {
  T as default
};
//# sourceMappingURL=nanogrid.js.map
