export function createNode(obj) {
  const type = obj.type || 'div';
  const parent = obj.parent || document.body;
  const node = document.createElement(type);

  const hasText = obj.text !== undefined;
  if (hasText) {
    node.appendChild(document.createTextNode(obj.text));
  }

  const hasAttributes = obj.attributes !== '';
  if (hasAttributes) {
    for (const currentAttribute in obj.attributes) {
      const attr = document.createAttribute(obj.attributes[currentAttribute].name);
      attr.value = obj.attributes[currentAttribute].value;
      node.setAttributeNode(attr);
    }
  }

  parent.appendChild(node);
  return node;
}

export function prepairClasses(classes) {
  return [
    ...new Set(classes.map(item => item ? item.split(' ') : '').flat())
  ].join(' ').replace(/\s+/g, " ").trim();
}

export function cleanNano(classes, newSize) {
  return [
    ...new Set(classes.map(item => item ? item.split(' ') : '').flat().filter(item => item.substr(0,3) !== "nn-")), newSize
  ].join(' ').replace(/\s+/g, " ").trim();
}

export function validateProp(component, prop, value, values, defaultValue){
  let currentValue = value || defaultValue;
  if (!values.includes(currentValue)) {
    console.warn(
      `${prop}="${currentValue}" is not a supported value on <${component}>, try the following values instead:`
    );
    console.warn(values);
    currentValue = defaultValue;
  }
  return currentValue;
}