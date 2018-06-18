//Find all of the possible routes from top left to bottom right in a given grid
function paths2Bottom(x, y, max, meme = {}) {
  if (meme[[x, y, max]]) return meme[[x, y, max]]
  if (x === max || y === max) {
    return 1
  }
  let possiblePath = paths2Bottom(x + 1, y, max, meme) + paths2Bottom(x, y + 1, max, meme)
  meme[[x, y, max]] = possiblePath
  return possiblePath
}
