// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order.If two or more words have the same count, they should be sorted according to their order in the original sentence.Assume that all letters are in english alphabet.You function should be case -insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation(even in the middle of a word) and use whitespaces to separate words.
// Analyze the time and space complexities of your solution.Try to optimize for time while keeping a polynomial space complexity.

function wordCountEngine(document) {
  //turning everything to lowercase
  let lowercaseDoc = document.toLowerCase();
  //strip out all exteraneous characters
  let onlyLetters = lowercaseDoc.replace(/[!@#$%^&*.,]/g, "");
  //string split using whitespace
  let wordArr = onlyLetters.split(' ');
  let dictionary = new Map();

  //loop through the array
  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i].toString()

    //does this key exist? Yes? increment the count of the value
    if (dictionary.get(word)) {
      let value = dictionary.get(word)
      dictionary.set(word, ++value)
    } else { //otherwise create a key with value of 1
      dictionary.set(word, 1)
    }
  }

  //sort and return
  let dictionaryArray = [...dictionary.entries()].sort((a, b) => {
    return b[1] - a[1]
  });

  dictionaryArray.forEach(elem => {
    elem[1] = elem[1].toString()
  });

  return dictionaryArray;
}

wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!")

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"],
//           ["get", "1"], ["by", "1"], ["just", "1"] ]
