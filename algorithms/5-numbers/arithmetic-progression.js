/*An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.You are provided with consecutive elements of an Arithmetic Progression.There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.The rest of the given series is the same as the original AP.Find the missing term.*/

/*You have to write the function findMissing(list), list will always be at least 3 numbers.The missing term will never be the first or last one.*/

// Brute Force Solution
var findMissing = function (list) {
  let sortedArr = list.sort((a, b) => (a - b))
  let difference = sortedArr[1] - sortedArr[0]
  let beforeMissing = list[0]

  for (let i = 1; i < list.length; i++) {
    let currDiff = list[i] - list[i - 1]
    if (currDiff > difference) beforeMissing = sortedArr[i - 1]
    if (currDiff < difference) difference = currDiff
  }

  return beforeMissing + difference;
}

// Math Solution


