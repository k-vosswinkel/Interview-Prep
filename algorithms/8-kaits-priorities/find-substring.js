// Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

// Come up with an asymptotically optimal solution and analyze the time and space complexities.

// A note on maps vs. objects:
// - Use maps over objects when keys are unknown until run time,
//   and when all keys are the same type and all values are the same type.
// - Use objects when there is logic that operates on individual elements.

// set your window to smallest poss. combo. Ratchet and check; if no poss. combo, expand window and continue
let substringCheck = (arr, str) => {
  let head = 0;
  let possibleSolutions = []

  // make dictionary
  let keyCount = {}

  for (let i = 0; i < arr.length; i++) {
    keyCount[arr[i]] = 0;
  }

  // let innerFunc = () => {
  // initialize the while loop with the smallest window possible (the length of the arr)
  for (let tail = arr.length; tail <= str.length; tail++) {
    // move through the string, one letter at a time
    let tempstring = '';
    for (let n = head; n < tail; n++) {
      //checking for matches at each point
      tempstring += str[n]
      if (arr.indexOf(str[n]) !== -1) keyCount[str[n]] += 1
      console.log("keyCount:", keyCount)
    }
    head++;

    let keyValues = Object.values(keyCount)
    let keys = Object.keys(keyCount)

    if (keyValues.indexOf(0) === -1) possibleSolutions.push(tempstring)
    console.log(tempstring)
  }

  return possibleSolutions
}

// substringCheck(['x', 'y', 'z'], 'xxyxxzy') // returns 'xzy'
substringCheck(['c', 'a', 't'], 'The crazy talented cast') // returns 'cast'
// substringCheck(['b', 'o', 'n'], 'I love bon bons even when they are burned on the bottom') // returns 'bon'
// substringCheck(['a', 'b', 'l', 'e'], 'Once upon a time') // returns ''



//The other way we could approach is using sliding window
  //move left until you hit three unique (check for unique before adding)
  //move right until you fall under 3
  //move right again until you hit three
  //left until you fall under
  //keep track of your 3 collections until end
