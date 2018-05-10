// Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

// Come up with an asymptotically optimal solution and analyze the time and space complexities.

// A note on maps vs. objects:
// - Use maps over objects when keys are unknown until run time,
//   and when all keys are the same type and all values are the same type.
// - Use objects when there is logic that operates on individual elements.

// set your window to smallest poss. combo. Ratchet and check; if no poss. combo, expand window and continue
let substringCheck = (arr, str) => {

}

substringCheck(['x', 'y', 'z'], 'xxyxxzy') // returns 'xzy'
substringCheck(['c', 'a', 't'], 'The crazy talented cast') // returns 'cast'
substringCheck(['b', 'o', 'n'], 'I love bon bons even when they are burned on the bottom') // returns 'bon'
substringCheck(['a', 'b', 'l', 'e'], 'Once upon a time') // returns ''


