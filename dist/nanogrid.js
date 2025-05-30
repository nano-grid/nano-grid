var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _t, _e, _nnBtn_instances, n_fn, _nnCaja_instances, s_fn, _i, _r, _nnCode_static, o_fn, _nnDropdown_instances, a_fn, c_fn, _nnFila_instances, s_fn2, _nnIcono_instances, l_fn, _nnPilar_instances, d_fn, _nnPill_instances, n_fn2, _nnVideo_instances, u_fn;
const t = "nn-";
function getPrefix(e2) {
  return [t, e2].join("");
}
function hexToRgb(t2) {
  let e2 = t2.replace("#", "");
  if (e2.length === 3) e2 = e2.split("").map((t3) => t3 + t3).join("");
  const [n, s, i] = [0, 2, 4].map((t3) => parseInt(e2.slice(t3, t3 + 2), 16));
  return { r: n, g: s, b: i };
}
function textColorFromBackground(t2, e2 = 0.5) {
  const { r: n, g: s, b: i } = hexToRgb(t2);
  const r = (0.2126 * n + 0.7152 * s + 0.0722 * i) / 255;
  return r > e2 ? "#222" : "#eee";
}
class nnBtn extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _nnBtn_instances);
    __privateAdd(this, _t, null);
    __privateAdd(this, _e, false);
  }
  static get observedAttributes() {
    return this.attrs;
  }
  connectedCallback() {
    if (!__privateGet(this, _e)) {
      queueMicrotask(() => {
        if (!__privateGet(this, _t)) {
          __privateSet(this, _t, document.createDocumentFragment());
          while (this.firstChild) {
            __privateGet(this, _t).appendChild(this.firstChild);
          }
        }
        __privateMethod(this, _nnBtn_instances, n_fn).call(this);
        __privateSet(this, _e, true);
      });
    }
  }
  attributeChangedCallback(t2) {
    if (this.constructor.attrs.includes(t2)) {
      __privateMethod(this, _nnBtn_instances, n_fn).call(this);
    }
  }
}
_t = new WeakMap();
_e = new WeakMap();
_nnBtn_instances = new WeakSet();
n_fn = function() {
  if (!__privateGet(this, _t)) return;
  const t2 = this.getAttribute("color");
  const e2 = this.hasAttribute("link");
  this.innerHTML = "";
  const n = document.createElement(e2 ? "a" : "button");
  if (!e2) {
    n.type = "button";
  }
  if (t2) {
    const e3 = textColorFromBackground(t2);
    this.style.setProperty("--nn-btn-text-color", e3);
    this.style.setProperty("--nn-btn-color", t2);
  }
  const s = [...this.constructor.attrs, "class", "style", "id"];
  const i = [...this.attributes].filter((t3) => !s.includes(t3.name));
  i.forEach((t3) => {
    n.setAttribute(t3.name, t3.value);
  });
  n.appendChild(__privateGet(this, _t).cloneNode(true));
  this.appendChild(n);
};
__publicField(nnBtn, "attrs", ["color", "link"]);
__publicField(nnBtn, "tag", "btn");
class nnCaja extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnCaja_instances);
  }
  static get observedAttributes() {
    return this.attrs;
  }
  connectedCallback() {
    __privateMethod(this, _nnCaja_instances, s_fn).call(this);
  }
  attributeChangedCallback(t2) {
    if (this.constructor.attrs.includes(t2)) {
      __privateMethod(this, _nnCaja_instances, s_fn).call(this);
    }
  }
}
_nnCaja_instances = new WeakSet();
s_fn = function() {
  for (const t2 of this.constructor.attrs) {
    const e2 = this.getAttribute(t2);
    if (e2 !== null) {
      this.style.setProperty(`--nn-caja-${t2}`, e2);
    }
  }
};
__publicField(nnCaja, "tag", "caja");
__publicField(nnCaja, "attrs", ["padding", "max-width"]);
const _nnCode = class _nnCode extends HTMLElement {
  constructor() {
    super();
  }
  static spirit(t2, e2) {
    return `<span class='nn-${e2}'>${t2}</span>`;
  }
  static compressText(t2) {
    return t2.trim().replace(/[\n\t <>&/*'"`(){}\[\]]/g, (t3) => {
      var _a;
      return __privateMethod(_a = _nnCode, _nnCode_static, o_fn).call(_a, t3);
    });
  }
  static decompressText(t2) {
    for (const [e2, n] of Object.entries(__privateGet(_nnCode, _r))) {
      const s = e2.includes("n-line") ? `${_nnCode.spirit("", "n-line")}<br>` : e2.includes("tab") ? _nnCode.spirit("", "tab") : e2.includes("space") ? _nnCode.spirit("", "space") : `&#${n.charCodeAt(0)};`;
      t2 = t2.replaceAll(e2, s);
    }
    return t2;
  }
  static formatJs(t2) {
    let e2 = _nnCode.compressText(t2);
    e2 = e2.replace(/(♥♥(?:s-quote|d-quote|acute)♥♥).*?(♥♥(?:s-quote|d-quote|acute)♥♥)/g, (t3) => _nnCode.spirit(t3, "string"));
    e2 = e2.replace(/(♥♥slash♥♥){2}.*?(♥♥n-line♥♥)/g, (t3) => _nnCode.spirit(t3, "comment"));
    e2 = e2.replace(/(♥♥slash♥♥)(♥♥asterik♥♥).*?(♥♥asterik♥♥)(♥♥slash♥♥)/g, (t3) => _nnCode.spirit(t3, "comment"));
    e2 = e2.replace(/\b(new|import|from|get|set)\b/g, (t3) => _nnCode.spirit(t3, "reserved"));
    e2 = e2.replace(/\b(true|false|null|undefined)\b/g, (t3) => _nnCode.spirit(t3, "boolean"));
    e2 = e2.replace(/[+-]?(\d+)?\.?\d+/g, (t3) => _nnCode.spirit(t3, "number"));
    e2 = e2.replace(/(♥♥lt♥♥).*?(♥♥gt♥♥)/g, (t3) => _nnCode.spirit(t3, "type"));
    e2 = e2.replace(/♥♥(parenthesis-[oc]|bracket-[oc]|brace-[oc])♥♥/g, (t3) => _nnCode.spirit(t3, "parenthesis"));
    return _nnCode.decompressText(e2);
  }
  connectedCallback() {
    this.innerHTML = _nnCode.formatJs(this.innerHTML);
  }
};
_i = new WeakMap();
_r = new WeakMap();
_nnCode_static = new WeakSet();
o_fn = function(t2) {
  return `♥♥${__privateGet(_nnCode, _i)[t2]}♥♥`;
};
__privateAdd(_nnCode, _nnCode_static);
__publicField(_nnCode, "tag", "code");
__privateAdd(_nnCode, _i, { "\n": "n-line", "	": "tab", " ": "space", "<": "lt", ">": "gt", "&": "amp", "/": "slash", "*": "asterik", "'": "s-quote", '"': "d-quote", "`": "acute", "(": "parenthesis-o", "[": "bracket-o", "{": "brace-o", ")": "parenthesis-c", "]": "bracket-c", "}": "brace-c" });
__privateAdd(_nnCode, _r, Object.fromEntries(Object.entries(__privateGet(_nnCode, _i)).map(([t2, e2]) => [`♥♥${e2}♥♥`, t2])));
let nnCode = _nnCode;
class nnDesplazador extends HTMLElement {
  constructor() {
    super();
  }
}
__publicField(nnDesplazador, "tag", "desplazador");
class nnDropdown extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnDropdown_instances);
    this.open = false;
    this.toggle = this.toggle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  connectedCallback() {
    var _a;
    this.slot = this.innerHTML;
    this.innerHTML = `
      <button type="button" class="dropdown-trigger"></button>
      <div class="dropdown-content">${this.slot}</div>
    `;
    (_a = this.querySelector(".dropdown-trigger")) == null ? void 0 : _a.addEventListener("click", this.toggle);
    document.addEventListener("click", this.handleOutsideClick);
    __privateMethod(this, _nnDropdown_instances, a_fn).call(this);
    __privateMethod(this, _nnDropdown_instances, c_fn).call(this);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  toggle(t2) {
    t2.stopPropagation();
    this.open = !this.open;
    this.classList.toggle("open", this.open);
  }
  handleOutsideClick(t2) {
    if (!this.contains(t2.target)) {
      this.open = false;
      this.classList.remove("open");
    }
  }
}
_nnDropdown_instances = new WeakSet();
a_fn = function() {
  const t2 = this.getAttribute("label");
  if (t2) {
    const e2 = this.querySelector(".dropdown-trigger");
    e2.innerHTML = `${t2} ▼`;
  }
};
c_fn = function() {
  const t2 = this.getAttribute("icon");
  if (t2) {
    const e2 = this.querySelector(".dropdown-trigger");
    e2.innerHTML = `<nn-icono class="${t2}"><nn-icono> ▼`;
  }
};
__publicField(nnDropdown, "tag", "dropdown");
class nnFila extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnFila_instances);
  }
  static get observedAttributes() {
    return this.attrs;
  }
  connectedCallback() {
    __privateMethod(this, _nnFila_instances, s_fn2).call(this);
  }
  attributeChangedCallback(t2) {
    if (this.constructor.attrs.includes(t2)) {
      __privateMethod(this, _nnFila_instances, s_fn2).call(this);
    }
  }
}
_nnFila_instances = new WeakSet();
s_fn2 = function() {
  for (const t2 of this.constructor.attrs) {
    const e2 = this.getAttribute(t2);
    if (e2 !== null) {
      this.style.setProperty(`--nn-fila-${t2}`, e2);
    }
  }
};
__publicField(nnFila, "tag", "fila");
__publicField(nnFila, "attrs", ["gap", "padding-inline"]);
class nnIcono extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnIcono_instances);
  }
  static get observedAttributes() {
    return ["rotate"];
  }
  connectedCallback() {
    __privateMethod(this, _nnIcono_instances, l_fn).call(this);
  }
  attributeChangedCallback(t2) {
    if (t2 === "rotate") {
      __privateMethod(this, _nnIcono_instances, l_fn).call(this);
    }
  }
}
_nnIcono_instances = new WeakSet();
l_fn = function() {
  const t2 = this.getAttribute("rotate");
  if (t2) {
    this.style.setProperty("--nn-icono-direction", t2);
  }
};
__publicField(nnIcono, "tag", "icono");
class nnPilar extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnPilar_instances);
  }
  static get observedAttributes() {
    return ["size"];
  }
  connectedCallback() {
    __privateMethod(this, _nnPilar_instances, d_fn).call(this);
  }
  attributeChangedCallback(t2) {
    if (t2 === "size") {
      __privateMethod(this, _nnPilar_instances, d_fn).call(this);
    }
  }
}
_nnPilar_instances = new WeakSet();
d_fn = function() {
  const t2 = this.getAttribute("size");
  if (t2) {
    const e2 = /[-+*/]/.test(t2);
    this.style.setProperty("--nn-pilar-size", e2 ? `calc(${t2})` : t2);
  }
};
__publicField(nnPilar, "tag", "pilar");
class nnPill extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnPill_instances);
  }
  static get observedAttributes() {
    return this.attrs;
  }
  connectedCallback() {
    __privateMethod(this, _nnPill_instances, n_fn2).call(this);
  }
  attributeChangedCallback(t2) {
    if (this.constructor.attrs.includes(t2)) {
      __privateMethod(this, _nnPill_instances, n_fn2).call(this);
    }
  }
}
_nnPill_instances = new WeakSet();
n_fn2 = function() {
  const t2 = this.getAttribute("color");
  const e2 = this.getAttribute("text-color");
  if (t2 !== null) {
    this.style.setProperty(`--nn-pill-color`, t2);
  }
  if (e2 !== null) {
    this.style.setProperty(`--nn-pill-text-color`, e2);
  } else {
    this.style.setProperty(`--nn-pill-text-color`, textColorFromBackground(t2 || "#333333"));
  }
};
__publicField(nnPill, "attrs", ["color", "text-color"]);
__publicField(nnPill, "tag", "pill");
class nnVideo extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnVideo_instances);
    if (!this.querySelector("video")) {
      const t2 = document.createElement("video");
      t2.controls = true;
      t2.preload = "metadata";
      t2.loading = "lazy";
      const e2 = document.createElement("source");
      t2.appendChild(e2);
      t2.appendChild(document.createTextNode("Your browser does not support the video tag."));
      this.appendChild(t2);
    }
    this.$video = this.querySelector("video");
    this.$source = this.querySelector("source");
  }
  static get observedAttributes() {
    return ["url", "format", "width"];
  }
  connectedCallback() {
    __privateMethod(this, _nnVideo_instances, u_fn).call(this);
  }
  attributeChangedCallback() {
    __privateMethod(this, _nnVideo_instances, u_fn).call(this);
  }
}
_nnVideo_instances = new WeakSet();
u_fn = function() {
  const t2 = this.getAttribute("url");
  const e2 = this.getAttribute("format") || "video/mp4";
  const n = this.getAttribute("width");
  if (t2) this.$source.src = t2;
  this.$source.type = e2;
  if (n) this.$video.width = n;
};
__publicField(nnVideo, "tag", "video");
[nnBtn, nnCaja, nnCode, nnDesplazador, nnDropdown, nnFila, nnIcono, nnPilar, nnPill, nnVideo].forEach((t2) => {
  const e2 = getPrefix(t2.tag);
  if (!customElements.get(e2)) {
    customElements.define(e2, t2);
  }
});
export { nnBtn, nnCaja, nnCode, nnDesplazador, nnDropdown, nnFila, nnIcono, nnPilar, nnPill, nnVideo };