// Given a 2D array(matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise.

//Your function then should return that array.Analyze the time and space complexities of your solution.

//EXAMPLE:
// inputMatrix =
// [[1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20]]

// output:
// [1, 2, 3, 4, 5,
// 10, 15, 20, 19,
// 18, 17, 16, 11,
// 6, 7, 8, 9, 14,
// 13, 12]


//ITERATIVE SOLUTION
function spiralCopy(inputMatrix) {
  //set up variables to hold our new array and to keep track of
  //the current top and bottom rows
  //and the current left and right endpoints
  let newArray = [];
  let top = 0
  let bottom = inputMatrix.length - 1
  let L = 0
  let R = inputMatrix[0].length - 1

  //loop through the rows while there are more than 2 left
  //once we have two or fewer left, we don't need to increment in
  while (bottom - top > 2) {
    //grab top row elements
    for (let i = L; i <= R; i++) {
      newArray.push(inputMatrix[top][i])
    }

    //grab last elements from all middle rows
    for (let x = top + 1; x < bottom; x++) {
      newArray.push(inputMatrix[x][R])
    }

    //grab bottom row elements
    for (let n = R; n >= L; n--) {
      newArray.push(inputMatrix[bottom][n])
    }

    //grab first elements from all middle rows
    for (let y = bottom - 1; y > top; y--) {
      newArray.push(inputMatrix[y][L])
    }

    //increment in to the inner matrix
    top++
    bottom--
    L++
    R--
  }

  //grab the last inner row from L to R
  for (let l = L; l <= R; l++) {
    newArray.push(inputMatrix[top][l])
  }

  //if there was an even number of rows, there will be two remaining
  //this loop grabs the second row, from R to L
  if (top !== bottom) {
    for (let r = R; r >= L; r--) {
      newArray.push(inputMatrix[bottom][r])
    }
  }

  return newArray
}

//RECURSIVE SOLUTION
function spiralCopy(inputMatrix, newArray = []) {
  if (inputMatrix.length > 2) {
    //grab top row elements
    for (let i = 0; i <= inputMatrix[0].length - 1; i++) {
      newArray.push(inputMatrix[0][i])
    }

    //grab last elements from all middle rows
    for (let x = 1; x < inputMatrix.length - 1; x++) {
      let lastElemInRow = inputMatrix[x][inputMatrix[0].length - 1];
      newArray.push(lastElemInRow)
    }

    //grab bottom row elements
    for (let n = inputMatrix[0].length - 1; n >= 0; n--) {
      newArray.push(inputMatrix[inputMatrix.length - 1][n])
    }

    //grab first elements from all middle rows
    for (let y = inputMatrix.length - 2; y > 0; y--) {
      newArray.push(inputMatrix[y][0])
    }

    //slice and recurse
    //remove top and bottom rows
    let smallerMatrix = inputMatrix.slice(1, inputMatrix.length - 1)

    //remove first and last elements from all remaining rows
    let trimmedRows = smallerMatrix.map(row => {
      return row.slice(1, row.length - 1)
    })

    spiralCopy(trimmedRows, newArray)
  } else {
    //add last top row
    for (let i = 0; i < inputMatrix[0].length; i++) {
      newArray.push(inputMatrix[0][i])
    }

    //if there is a bottom row left, add it
    if (inputMatrix.length > 1) {
      for (let n = inputMatrix[0].length - 1; n >= 0; n--) {
        newArray.push(inputMatrix[inputMatrix.length - 1][n])
      }
    }
  }

  return newArray
}

// inputMatrix =
// [[1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20]]

// output:
// [1, 2, 3, 4, 5,
// 10, 15, 20, 19,
// 18, 17, 16, 11,
// 6, 7, 8, 9, 14,
// 13, 12]

//CALL STACK:

////// 3:
// Matrix [[7, 8, 9], [12, 13, 14]]
// Array: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 7, 8, 9, 14, 13, 12]

//RETURN => Array;

////// 2:
// Matrix [[7, 8, 9], [12, 13, 14]]
// Array: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16]

// Once 3 is resolved, 2 gets an empty array and returns newArray from 3

////// 1:
// Matrix [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]
// Array: []

// Once 2 is resolved, 1 gets an empty array and returns newArray from 2
