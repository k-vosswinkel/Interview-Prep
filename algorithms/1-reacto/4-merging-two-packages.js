// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit.Your function should return a pair[i, j] of the indices of the item weights, ordered such that i > j.If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

function getIndicesOfItemWeights(arr, limit) {
  let possibleSolutions = {}
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let currentSolution = limit - arr[i]
    let ourString = arr[i].toString()

    if (ourString in possibleSolutions) {
      result.push(i)
      result.push(possibleSolutions[ourString])
      return result
    } else if (!(currentSolution in possibleSolutions)) {
      possibleSolutions[currentSolution] = i
    }
  }

  return []
}
