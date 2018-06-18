// Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index(i.e.except arr[i]).

// Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s time and space complexities.

// Example:
// input: arr = [8, 10, 2]
// output: [20, 16, 80]# by calculating: [10 * 2, 8 * 2, 8 * 10]

// input: arr = [2, 7, 3, 4]
// output: [84, 24, 56, 42]# by calculating: [7 * 3 * 4, 2 * 3 * 4, 2 * 7 * 4, 2 * 7 * 3]

function arrayOfArrayProducts(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let localStorage = 1;

    for (let n = 0; n < arr.length; n++) {
      if (i !== n) localStorage = arr[n] * localStorage;
    }

    results.push(localStorage)
  }

  return results
}

// O(N * N) => O(N ^ 2) time
// O(N) space

// [2,  7,  3,   4,   5]
//  1,  2, 14,  42, 168
// 420, 60, 20,  5 ,  1
// 420, 120, 280, 210, 168
// while array has length; set an index = 0

function arrayOfArrayProducts(arr) {
  let results = [];
  let tempProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    results.push(tempProduct)
    tempProduct = tempProduct * arr[i]
  }

  tempProduct = 1;

  for (let i = arr.length - 1; i > 0; i--) {
    results[i] = results[i] * tempProduct
    tempProduct = tempProduct * arr[i]
  }

  return results
}

