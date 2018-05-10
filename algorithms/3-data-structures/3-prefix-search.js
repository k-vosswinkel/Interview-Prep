//--//--//--// Trie handling //--//--//--//

// add(dict: Trie, word: String) -> Trie
//
// Add word to dict and return it.
const add = (dict={}, word, suffix=word) => {
  const [letter, ...allTheRest] = suffix
  if (letter)
    dict[letter] = add(dict[letter], word, allTheRest)
  else
    dict.word = word
  return dict
}

// words(dict: Trie|String, onFound: String->Void)
//
// Calls onFound with every word in dict. If dict is
// a string, calls onFound with the string.
const words = (dict={}, onFound=console.log) =>
  typeof dict === 'string' ? onFound(dict)
    : Object.keys(dict).forEach(key => words(dict[key], onFound))

// withPrefix(dict: Trie, prefix: String) -> Trie
//
// Returns the sub-trie of words starting with prefix.
const withPrefix = (dict={}, [letter, ...rest]) =>
  letter ? withPrefix(dict[letter], rest) : dict

//--//--//--// Handling the book data structure //--//--//--//

const fromText = text =>
  text.split(/[\s,\.]+/)
    .map(word => word.toLowerCase())
    .reduce((dict, word) => word ? add(dict, word) : dict, {})

const findWordsStartingWith = (
  book,
  prefix,
  cache=findWordsStartingWith.cache || (findWordsStartingWith.cache = {}),
  dict=cache[book.id] || (cache[book.id] = fromText(book.text))
) => {
  const allWords = []
  words(withPrefix(dict, prefix), word => allWords.push(word))
  return allWords
}

//--//--//--// Tests //--//--//--//
function tests() {
  const test = require('../../testing')
      , {deepEqual, equal} = require('assert')

  test `add adds one word to a prefix tree` (() =>
    deepEqual(add({}, 'hi'), {h: {i: {word: 'hi'}}}))

  const toDict = (dict, word) => add(dict, word)

  test `add adds many words to a prefix tree` (() => deepEqual(
    // Add 'hi' and 'high' to a prefix trie.
    ['hi', 'high'].reduce(toDict, {}),
    {
      h: {
        i: {
          word: 'hi',
          g: {h: {word: 'high'}},
        }
      }
    }
  ))

  const allWords = [
    'hello',
    'help',
    'height',
    'cat',
    'cone',
  ]  
  const dict = allWords.reduce(toDict, {})

  test `withPrefix looks up the node for the right prefix` (
    () => equal(withPrefix(dict, 'he'), dict.h.e)
  )

  test `words finds all words in the dictionary when given the root` (() => {
    const foundWords = []    
    words(dict, word => foundWords.push(word))     
    deepEqual(allWords, foundWords)
  })

  test `words collects all words in a subtree` (() => {
    const wordsStartingWithHE = []
    words(withPrefix(dict, 'he'), word => wordsStartingWithHE.push(word))      
    deepEqual(wordsStartingWithHE, ['hello', 'help', 'height'])
  })
}

// Run the tests if we were run at the command line
if (module === require.main) { tests(...process.argv) }
