/* A crack team of love scientists from OkEros(a hot new dating site) have devised a way to represent dating profiles as rectangles on a two - dimensional plane. They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something. */

// Write a function to find the rectangular intersection of two given love rectangles.
// Love rectangles are always "straight" and never "diagonal."
// More rigorously: each side is parallel with either the x - axis or the y - axis.
//They are defined as hash maps like this:

let my_rectangle = {
  // coordinates of bottom-left corner:
  'x': 1,
  'y': 5,
  // width and height
  'width': 10,
  'height': 4,
}

// Your output rectangle should use this format as well.

const loveIntersection = (square1, square2) => {
  // All we need to pay attention to is overlap on X and Y axes, so we can break this down into sub-problems
  let xRanges = [[square1.x, square1.x + square1.width], [square2.x, square2.x + square2.width]]
  let yRanges = [[square1.y, square1.y + square1.height], [square2.y, square2.y + square2.height]]
  let xOverlap = findOverlap(xRanges)
  let yOverlap = findOverlap(yRanges)

  return {
    'x': xOverlap[0],
    'y': yOverlap[0],
    'height': yOverlap[1] - yOverlap[0],
    'width': xOverlap[1] - xOverlap[0]
  }
}

const findOverlap = (ranges) => {
  ranges.sort((a, b) => {
    if (a[0] < b[0]) return -1
    else return 1
  })
  return [ranges[1][0], ranges[0][1]] // We'll have to deal with no overlap cases here later
}

let box1 = {
  'x': 1,
  'y': 5,
  'width': 10,
  'height': 5
}

let box2 = {
  'x': 6,
  'y': 8,
  'width': 10,
  'height': 10
}

// Expect: { 'x': 6, 'y': 8, 'height': 2, 'width': 5 }
console.log(loveIntersection(box1, box2))
