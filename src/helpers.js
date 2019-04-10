export function getElemetPositionInDocument (el) {
  let box = el.getBoundingClientRect()

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}

export function stripTag (string) {
  return string.replace(/<\/?[^>]+>/gi, ' ')
}
