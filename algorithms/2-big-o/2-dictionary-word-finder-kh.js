const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];

//FOR LOOP SOLUTION (Complexity O(n))
// let definitionOf = (word, book) => {
//   for (let i = 0; i < book.length; i++){
//     let currentWord = book[i].slice(0, word.length)
//     if (word === currentWord) {
//       return book[i].slice(word.length + 2)
//     }
//   }
// }

//HASH TABLE SOLUTION
// let buildDictionary = (book) => {
//   let dictionary = {}

//   for (let i = 0; i < book.length; i++) {
//     let currentWord = book[i].slice(0, book[i].indexOf(' '))
//     dictionary[currentWord] = book[i].slice(currentWord.length + 2)
//   }

//   return dictionary
// }

// let definitionOf = (word, book) => {
//   let ourDictionary = buildDictionary(book)

//   if (ourDictionary.hasOwnProperty(word)) {
//     return ourDictionary[word]
//   }
// }

//BINARY SEARCH TREE SOLUTION (Complexity O(m * log n))
let definitionOf = (word, book) => {
  let midPoint = Math.floor(book.length / 2);
  let midPointWord = book[midPoint].slice(0, book.indexOf(' ')) //This line adds the 'm' complexity because slice and indexOf are both looping methods

  if (word === book[midPointWord]) return book[midPoint].slice(word.length + 2)
  if (book.length <= 1) return undefined
  if (word < book[midPointWord]) return definitionOf(word, book.slice(0, midPoint))
  if (word > book[midPointWord]) return definitionOf(word, book.slice(midPoint))
}

definitionOf('be', dictionary); // should return 'Exist'
// definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
// definitionOf('wizbing', dictionary); // should return undefined
