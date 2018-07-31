// I have an array stock_prices_yesterday where:
// The indices are the time in minutes past trade opening time, which was 9: 30am local time.
// The values are the price in dollars of Apple stock at that time.

// For example, the stock cost $500 at 10: 30am, so stock_prices_yesterday[60] = 500.
// Write an efficient algorithm for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// No "shorting"—you must buy before you sell.You may not buy and sell in the same time step(at least 1 minute must pass).


// STRATEGY:
// get the index for the lowest number in the array
// get the index for the highest number in the array
// if the highest index is smaller than the lowest index, reset it to lowest index + 1

// run through array and check/reset lowest/highest indeces as you go.
// edge cases to check for:
  // highest val is before lowest val (reset highest val and continue checking)
  // lowest val is end of the array (val kept falling continuously - grab last two)

const evalStock = (arr) => {
  let lowestIndex = 0;
  let highestIndex = 1;

  for (let i = 2; i < arr.length; i++) {
    // If you've hit the end of the array and it's the lowest amt, that will be your sell point, and buy pt. will
    // stay the same (second lowest for least loss possible)
    if (arr[i] < arr[lowestIndex] && i === arr.length - 1) {
      highestIndex = i
    } else if (arr[i] < arr[lowestIndex]) { // If your current val is lower than lowest, reassign
      lowestIndex = i
      if (highestIndex <= lowestIndex) highestIndex = i + 1 // If your current lowest is after your buy index, reassign buy index
    }

    if (arr[i] > arr[highestIndex]) highestIndex = i // Reassign buy index where necessary
  }

  return arr[highestIndex] - arr[lowestIndex]
}

let basicTestArr = [23, 25, 12, 1, 2, 16, 82, 53, 12, 11]
let edgeTestArr = [80, 70, 60, 50, 40]
let nonConsecutiveEdge = [70, 60, 65, 55, 50, 40, 45, 35]

console.log(evalStock(basicTestArr)) //expected answer: 81
console.log(evalStock(edgeTestArr)) // expected answer: -10
console.log(evalStock(nonConsecutiveEdge)) // expected answer: -5
