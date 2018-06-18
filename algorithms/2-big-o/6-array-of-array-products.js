// Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e.except arr[i]).

// Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s time and space complexities.

// USING A NESTED LOOP
function arrayOfArrayProducts(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++){
    let localStorage = 1;

    for (let n=0; n < arr.length; n++){
      if (i !== n) localStorage = arr[n] * localStorage;
    }

    results.push(localStorage)
  }

  return results
}
// O(N * N) => O(N^2) time
// O(N) space


// [ 2,     7,   3,    4  ]
//  ---     2   2*7  2*7*3
//  7*3*4  3*4   4    ---
//   81    24    56    42
// while array has length; set an index = 0

// CALCULATING BEFORE AND AFTER INDEX AND MULTIPLYING
function arrayOfArrayProducts(arr) {
  let results = [];
  let tempProduct = 1;

  for (let i = 0; i < arr.length; i++){
    results.push(tempProduct)
    tempProduct = tempProduct * arr[i]
  }

  tempProduct = 1;
  for (let i = arr.length - 1; i > 0; i--){
    results[i] = results[i] * tempProduct
    tempProduct = tempProduct * arr[i]
  }

  return results
}

// USING DIVISION
function arrayOfArrayProducts(arr) {
  let finalArray = []
  let zeroCount = arr[0] === 0 ? 1 : 0

  if (arr.length < 2) return []

  let total = arr.reduce((acc, curr) => {
    if (curr === 0) {
      zeroCount++
      curr = 1
    }
    if (acc === 0) acc = 1
    return acc * curr
  })

  for (let i = 0; i < arr.length; i++) {
    if (zeroCount > 1) finalArray.push(0)
    if (zeroCount === 1) {
      if (arr[i] === 0) finalArray.push(total)
      else finalArray.push(0)
    }
    else finalArray.push(total / arr[i])
  }
  return finalArray
}

