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
var _initialContent, _rendered, _nnBtn_instances, render_fn, _nnCaja_instances, updateAttrs_fn, _ESCAPE_MAP, _REVERSE_ESCAPE_MAP, _nnCode_static, escapeChar_fn, _nnDropdown_instances, updateLabel_fn, updateIcon_fn, _nnFila_instances, updateAttrs_fn2, _nnIcono_instances, updateRotation_fn, _nnPilar_instances, updateSize_fn, _nnPill_instances, render_fn2, _nnVideo_instances, update_fn;
const nano = "nn-";
function getPrefix(name) {
  return [nano, name].join("");
}
function hexToRgb(hex) {
  let c = hex.replace("#", "");
  if (c.length === 3)
    c = c.split("").map((x) => x + x).join("");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16));
  return { r, g, b };
}
function textColorFromBackground(bgHex, threshold = 0.5) {
  const { r, g, b } = hexToRgb(bgHex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > threshold ? "#222" : "#eee";
}
class nnBtn extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _nnBtn_instances);
    __privateAdd(this, _initialContent, null);
    __privateAdd(this, _rendered, false);
  }
  static get observedAttributes() {
    return this.attrs;
  }
  connectedCallback() {
    if (!__privateGet(this, _rendered)) {
      queueMicrotask(() => {
        if (!__privateGet(this, _initialContent)) {
          __privateSet(this, _initialContent, document.createDocumentFragment());
          while (this.firstChild) {
            __privateGet(this, _initialContent).appendChild(this.firstChild);
          }
        }
        __privateMethod(this, _nnBtn_instances, render_fn).call(this);
        __privateSet(this, _rendered, true);
      });
    }
  }
  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      __privateMethod(this, _nnBtn_instances, render_fn).call(this);
    }
  }
}
_initialContent = new WeakMap();
_rendered = new WeakMap();
_nnBtn_instances = new WeakSet();
render_fn = function() {
  if (!__privateGet(this, _initialContent)) return;
  const color = this.getAttribute("color");
  const isLink = this.hasAttribute("link");
  this.innerHTML = "";
  const el = document.createElement(isLink ? "a" : "button");
  if (!isLink) {
    el.type = "button";
  }
  if (color) {
    const textColor = textColorFromBackground(color);
    this.style.setProperty("--nn-btn-text-color", textColor);
    this.style.setProperty("--nn-btn-color", color);
  }
  const doNotForward = [...this.constructor.attrs, "class", "style", "id"];
  const attrs = [...this.attributes].filter(
    (attr) => !doNotForward.includes(attr.name)
  );
  attrs.forEach((attr) => {
    el.setAttribute(attr.name, attr.value);
  });
  el.appendChild(__privateGet(this, _initialContent).cloneNode(true));
  this.appendChild(el);
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
    __privateMethod(this, _nnCaja_instances, updateAttrs_fn).call(this);
  }
  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      __privateMethod(this, _nnCaja_instances, updateAttrs_fn).call(this);
    }
  }
}
_nnCaja_instances = new WeakSet();
updateAttrs_fn = function() {
  for (const name of this.constructor.attrs) {
    const value = this.getAttribute(name);
    if (value !== null) {
      this.style.setProperty(`--nn-caja-${name}`, value);
    }
  }
};
__publicField(nnCaja, "tag", "caja");
__publicField(nnCaja, "attrs", ["padding", "max-width"]);
const _nnCode = class _nnCode extends HTMLElement {
  constructor() {
    super();
  }
  static spirit(word, klaso) {
    return `<span class='nn-${klaso}'>${word}</span>`;
  }
  static compressText(text) {
    return text.trim().replace(/[\n\t <>&/*'"`(){}\[\]]/g, (char) => {
      var _a;
      return __privateMethod(_a = _nnCode, _nnCode_static, escapeChar_fn).call(_a, char);
    });
  }
  static decompressText(text) {
    for (const [pattern, original] of Object.entries(
      __privateGet(_nnCode, _REVERSE_ESCAPE_MAP)
    )) {
      const replaceWith = pattern.includes("n-line") ? `${_nnCode.spirit("", "n-line")}<br>` : pattern.includes("tab") ? _nnCode.spirit("", "tab") : pattern.includes("space") ? _nnCode.spirit("", "space") : `&#${original.charCodeAt(0)};`;
      text = text.replaceAll(pattern, replaceWith);
    }
    return text;
  }
  static formatJs(text) {
    let processed = _nnCode.compressText(text);
    processed = processed.replace(
      /(♥♥(?:s-quote|d-quote|acute)♥♥).*?(♥♥(?:s-quote|d-quote|acute)♥♥)/g,
      (match) => _nnCode.spirit(match, "string")
    );
    processed = processed.replace(
      /(♥♥slash♥♥){2}.*?(♥♥n-line♥♥)/g,
      (match) => _nnCode.spirit(match, "comment")
    );
    processed = processed.replace(
      /(♥♥slash♥♥)(♥♥asterik♥♥).*?(♥♥asterik♥♥)(♥♥slash♥♥)/g,
      (match) => _nnCode.spirit(match, "comment")
    );
    processed = processed.replace(
      /\b(new|import|from|get|set)\b/g,
      (match) => _nnCode.spirit(match, "reserved")
    );
    processed = processed.replace(
      /\b(true|false|null|undefined)\b/g,
      (match) => _nnCode.spirit(match, "boolean")
    );
    processed = processed.replace(
      /[+-]?(\d+)?\.?\d+/g,
      (match) => _nnCode.spirit(match, "number")
    );
    processed = processed.replace(
      /(♥♥lt♥♥).*?(♥♥gt♥♥)/g,
      (match) => _nnCode.spirit(match, "type")
    );
    processed = processed.replace(
      /♥♥(parenthesis-[oc]|bracket-[oc]|brace-[oc])♥♥/g,
      (match) => _nnCode.spirit(match, "parenthesis")
    );
    return _nnCode.decompressText(processed);
  }
  connectedCallback() {
    this.innerHTML = _nnCode.formatJs(this.innerHTML);
  }
};
_ESCAPE_MAP = new WeakMap();
_REVERSE_ESCAPE_MAP = new WeakMap();
_nnCode_static = new WeakSet();
escapeChar_fn = function(char) {
  return `♥♥${__privateGet(_nnCode, _ESCAPE_MAP)[char]}♥♥`;
};
__privateAdd(_nnCode, _nnCode_static);
__publicField(_nnCode, "tag", "code");
__privateAdd(_nnCode, _ESCAPE_MAP, {
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
});
__privateAdd(_nnCode, _REVERSE_ESCAPE_MAP, Object.fromEntries(
  Object.entries(__privateGet(_nnCode, _ESCAPE_MAP)).map(([char, name]) => [
    `♥♥${name}♥♥`,
    char
  ])
));
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
    (_a = this.querySelector(".dropdown-trigger")) == null ? void 0 : _a.addEventListener(
      "click",
      this.toggle
    );
    document.addEventListener("click", this.handleOutsideClick);
    __privateMethod(this, _nnDropdown_instances, updateLabel_fn).call(this);
    __privateMethod(this, _nnDropdown_instances, updateIcon_fn).call(this);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  toggle(e) {
    e.stopPropagation();
    this.open = !this.open;
    this.classList.toggle("open", this.open);
  }
  handleOutsideClick(e) {
    if (!this.contains(e.target)) {
      this.open = false;
      this.classList.remove("open");
    }
  }
}
_nnDropdown_instances = new WeakSet();
updateLabel_fn = function() {
  const label = this.getAttribute("label");
  if (label) {
    const btnTrigger = this.querySelector(".dropdown-trigger");
    btnTrigger.innerHTML = `${label} ▼`;
  }
};
updateIcon_fn = function() {
  const icon = this.getAttribute("icon");
  if (icon) {
    const btnTrigger = this.querySelector(".dropdown-trigger");
    btnTrigger.innerHTML = `<nn-icono class="${icon}"><nn-icono> ▼`;
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
    __privateMethod(this, _nnFila_instances, updateAttrs_fn2).call(this);
  }
  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      __privateMethod(this, _nnFila_instances, updateAttrs_fn2).call(this);
    }
  }
}
_nnFila_instances = new WeakSet();
updateAttrs_fn2 = function() {
  for (const name of this.constructor.attrs) {
    const value = this.getAttribute(name);
    if (value !== null) {
      this.style.setProperty(`--nn-fila-${name}`, value);
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
    __privateMethod(this, _nnIcono_instances, updateRotation_fn).call(this);
  }
  attributeChangedCallback(name) {
    if (name === "rotate") {
      __privateMethod(this, _nnIcono_instances, updateRotation_fn).call(this);
    }
  }
}
_nnIcono_instances = new WeakSet();
updateRotation_fn = function() {
  const attr = this.getAttribute("rotate");
  if (attr) {
    this.style.setProperty("--nn-icono-direction", attr);
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
    __privateMethod(this, _nnPilar_instances, updateSize_fn).call(this);
  }
  attributeChangedCallback(name) {
    if (name === "size") {
      __privateMethod(this, _nnPilar_instances, updateSize_fn).call(this);
    }
  }
}
_nnPilar_instances = new WeakSet();
updateSize_fn = function() {
  const attr = this.getAttribute("size");
  if (attr) {
    const isCalc = /[-+*/]/.test(attr);
    this.style.setProperty("--nn-pilar-size", isCalc ? `calc(${attr})` : attr);
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
    __privateMethod(this, _nnPill_instances, render_fn2).call(this);
  }
  attributeChangedCallback(name) {
    if (this.constructor.attrs.includes(name)) {
      __privateMethod(this, _nnPill_instances, render_fn2).call(this);
    }
  }
}
_nnPill_instances = new WeakSet();
render_fn2 = function() {
  const color = this.getAttribute("color");
  const tcolor = this.getAttribute("text-color");
  if (color !== null) {
    this.style.setProperty(`--nn-pill-color`, color);
  }
  if (tcolor !== null) {
    this.style.setProperty(`--nn-pill-text-color`, tcolor);
  } else {
    this.style.setProperty(
      `--nn-pill-text-color`,
      textColorFromBackground(color || "#333333")
    );
  }
};
__publicField(nnPill, "attrs", ["color", "text-color"]);
__publicField(nnPill, "tag", "pill");
class nnVideo extends HTMLElement {
  constructor() {
    super();
    __privateAdd(this, _nnVideo_instances);
    if (!this.querySelector("video")) {
      const video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      video.loading = "lazy";
      const source = document.createElement("source");
      video.appendChild(source);
      video.appendChild(
        document.createTextNode("Your browser does not support the video tag.")
      );
      this.appendChild(video);
    }
    this.$video = this.querySelector("video");
    this.$source = this.querySelector("source");
  }
  static get observedAttributes() {
    return ["url", "format", "width"];
  }
  connectedCallback() {
    __privateMethod(this, _nnVideo_instances, update_fn).call(this);
  }
  attributeChangedCallback() {
    __privateMethod(this, _nnVideo_instances, update_fn).call(this);
  }
}
_nnVideo_instances = new WeakSet();
update_fn = function() {
  const url = this.getAttribute("url");
  const format = this.getAttribute("format") || "video/mp4";
  const width = this.getAttribute("width");
  if (url) this.$source.src = url;
  this.$source.type = format;
  if (width) this.$video.width = width;
};
__publicField(nnVideo, "tag", "video");
[
  nnBtn,
  nnCaja,
  nnCode,
  nnDesplazador,
  nnDropdown,
  nnFila,
  nnIcono,
  nnPilar,
  nnPill,
  nnVideo
].forEach((comp) => {
  const tag = getPrefix(comp.tag);
  if (!customElements.get(tag)) {
    customElements.define(tag, comp);
  }
});
