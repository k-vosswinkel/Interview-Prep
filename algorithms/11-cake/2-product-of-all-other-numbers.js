// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.
// For example, given [1, 7, 3, 4]
// your function would return [84, 12, 28, 21]
// by calculating [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]

// Do not use division in your solution.

// Brute force solution:
const allProducts = (arr) => {
  let finalArr = []

  for (let i = 0; i < arr.length; i++){
    let currentProduct = 1;
    for (let j = 0; j < arr.length; j++){
      if (i !== j) currentProduct *= arr[j]
    }
    finalArr.push(currentProduct)
  }

  return finalArr
}

// Optimized Solution
const allProducts = (arr) => {
  let finalArr = []
  let currProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) before[i] = 1
    else finalArr[i] = finalArr[i - 1] * arr[i - 1]
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    currProduct *= arr[i + 1]
    finalArr[i] *= currProduct
  }

  return finalArr
}

console.log(allProducts([1, 3, 4, 5])) // [60, 20, 15, 12]
console.log(allProducts([2, 3, 0, 4])) // [0, 0, 24, 0]
