// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.

// Simple version - O(nLogN)
const highestProduct = (arr) => {
  arr.sort((a, b) => (a-b))

  // We know that there are basically two options, once we've sorted the arr:
  // The largest combo is either going to be the three largest numbers,
  // or the two "largest" negative numbers multiplied by the largest positive number
  let optionA = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]
  let optionB = arr[0] * arr[1] * arr[arr.length - 1]

  return optionA >= optionB ? optionA : optionB
}

// Optimized version - O(n)
const highestProduct = (arr) => {
  if (arr.length < 3) return 'array not long enough'

  let highest = Math.max(arr[0], arr[1]) // 3
  let lowest = Math.min(arr[0], arr[1]) // 1
  let highestProd2 = arr[0] * arr[1] // 3
  let lowestProd2 = arr[0] * arr[1] // 3
  let highestProd3 = arr[0] * arr[1] * arr[2] //12

  for (let i = 2; i < arr.length; i++) {
    // New highest prod of 3?
    if (arr[i] * highestProd2 > highestProd3) highestProd3 = arr[i] * highestProd2
    if (arr[i] * lowestProd2 > highestProd3) highestProd3 = arr[i] * lowestProd2

    // New highest prod of 2?
    if (arr[i] * highest > highestProd2) highestProd2 = arr[i] * highest

    // New lowest prod of 2?
    if (arr[i] * lowest < lowestProd2) lowestProd2 = arr[i] * lowest

    // New highest?
    if (arr[i] > highest) highest = arr[i]

    // New lowest?
    if (arr[i] < lowest) lowest = arr[i]
  }

  return highestProd3
}


console.log(highestProduct([1, 3, 4, 2, 5])) // 60 Works!
console.log(highestProduct([-10, -10, 1, 2, 3])) // 300 Works!
console.log(highestProduct([-10, 1, 2, 3])) // 6 Works!
console.log(highestProduct([3, 7, -20, -2, 10])) //400 Doesn't Work :(
