const nano = 'nn-'

function getPrefix(name) {
  return [nano, name].join('')
}

function hexToRgb(hex) {
  let c = hex.replace('#', '')
  if (c.length === 3)
    c = c
      .split('')
      .map(x => x + x)
      .join('')
  const [r, g, b] = [0, 2, 4].map(i => parseInt(c.slice(i, i + 2), 16))
  return { r, g, b }
}

function textColorFromBackground(bgHex, threshold = 0.5) {
  const { r, g, b } = hexToRgb(bgHex)
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance > threshold ? '#222' : '#eee'
}

export { nano, getPrefix, textColorFromBackground }
