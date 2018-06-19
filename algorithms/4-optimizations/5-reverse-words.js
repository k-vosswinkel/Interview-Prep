// You are given an array of characters arr that consists of sequences of characters separated by space characters.Each space - delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

function reverseWords(arr) {
  // looking for spaces
  // .join, then .split using spaces as delimeter
  // loop through, reverse order
  // join and split

  let finalArray = []
  let startOfWord = 0

  // Although we're using a nested loop here, because we're only looping through 1/3 of the array (or 1/4 or 1/5 - however many words there are) in the inner loop, it really comes out to O(n) without all of the ambiguity of using built-in methods.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '  ' || i === arr.length - 1) {
      for (let n = i - 1; n >= startOfWord; n--) {
        finalArray.unshift(arr[n])
      }
      if (i !== arr.length - 1) finalArray.unshift('  ') //deal with hanging space at beginning
      startOfWord = i + 1
    }
  }
  return finalArray
}

arr = ['p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
  'm', 'a', 'k', 'e', 's', '  ',
  'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'];

console.log(reverseWords(arr));


// Original solution
// This is O(n) as well, but the reverse method alters the original array (bad!) and the time complexity comes out about the same as our other method above. We're also spending more lines on code, performing more loops, and using (possibly) ambiguous built-in methods.
// 1) join O(n)
// 2) split (array of words) O(n)
// 3) reverse O(n)
// 4) rejoin O(n)
// 5) resplit via loop O(n)
