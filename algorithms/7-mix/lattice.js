//Find all of the possible routes from top left to bottom right in a given grid
// One memoized solution
function paths2Bottom(x, y, max, meme = {}) {
  if (meme[[x, y, max]]) return meme[[x, y, max]]
  if (x === max || y === max) {
    return 1
  }
  let possiblePath = paths2Bottom(x + 1, y, max, meme) + paths2Bottom(x, y + 1, max, meme)
  meme[[x, y, max]] = possiblePath
  return possiblePath
}

//Another memoized solution
function paths2Bottom(m, n, memo = {}) {
  if (memo[[m, n]]) return memo[[m, n]]
  if (m === 1 || n === 1) {
    memo[[m, n]] = 1
    return 1
  }
  else {
    let path = paths2Bottom(m - 1, n, memo) + paths2Bottom(m, n - 1, memo)
    memo[[m, n]] = path
    return path
  }
}

console.log(paths2Bottom(3, 3))
