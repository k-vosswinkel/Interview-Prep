// This variant of a shuffle algo gives you the *chance* to hit every possible permutation of a shuffled array
// Its time complexity is O(n) because you're only walking through the array once

// Kind-of Fisher-Yates
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

// Fisher-Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
