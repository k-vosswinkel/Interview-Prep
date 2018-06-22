// This variant of a shuffle algo gives you the *chance* to hit every possible permutation of a shuffled array
// Its time complexity is O(n) because you're only walking through the array once

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++){
    let swapIdx = getRandomInt(i, arr.length)
    let placeholder = arr[i]
    arr[i] = arr[swapIdx]
    arr[swapIdx] = placeholder
  }
  return arr
}

shuffle ([1,2,3,4,5,6])
