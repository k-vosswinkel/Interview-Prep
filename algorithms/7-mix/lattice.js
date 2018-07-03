// You're given a grid or lattice of connected points. Find all of the possible routes from top left to bottom right.
// You may only move to the right or down (not left or up)

// One memoized solution
function lattice(x, y, max, meme = {}) {
  if (meme[[x, y, max]]) return meme[[x, y, max]]
  if (x === max || y === max) {
    return 1
  }
  let possiblePath = lattice(x + 1, y, max, meme) + lattice(x, y + 1, max, meme)
  meme[[x, y, max]] = possiblePath
  return possiblePath
}

//Another memoized solution
function lattice(m, n, memo = {}) {
  if (memo[[m, n]]) return memo[[m, n]]
  if (m === 1 || n === 1) {
    memo[[m, n]] = 1
    return 1
  }
  else {
    let path = lattice(m - 1, n, memo) + lattice(m, n - 1, memo)
    memo[[m, n]] = path
    return path
  }
}

console.log(lattice(3, 3))

// Iterative solution
// function lattice(m, n) {
//   let tempX, tempY;

//   let prevX1 = 0
//   let prevX2 = 1

//   let prevY1 = 1
//   let prevY2 = 0

//   //let currentPaths = 1
//   for (let i = 1; i < m; i++){
//     tempX = prevX1 + prevX2 // 1
//     tempY = prevY1 + prevY2 // 1

//     prevX1 = prevX1 + prevX2
//   }
// }

// console.log(lattice(3, 3))


// The idea is to track possible paths from any given point. Each point in a grid has the possible points
// of Left & Top totaled. So if the point to the left had 1 possible path and the point above had 2 possible
// paths, then the current point has 3 possible paths to reach it (2 + 1 = 3). Continuing with this logic
// recursively allows us to calculate the final endpoint and possible routes to that point.
