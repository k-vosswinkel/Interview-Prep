// Given an integer, return a string that notates the price with commas
// Example: 1324 => '1,324'
// Example: 1000000 => '1,000,000'

let numToString = (num) => {
  let numStr = num.toString()
  let addComma = numStr.length % 3
  let finalStr = ''

  // Check if we need to add commas at all
  if (numStr.length <= 3) return numStr;

  // Loop through, starting at the appropriate index
  for (let i = 0; i < numStr.length; i++) {
    if (i === addComma) {
      finalStr += ','
      addComma += 3
    }
    finalStr += numStr[i]
  }
  return finalStr
}

numToString(1000000000)

// Now, how would you do this if there were multiple styles (i.e. different currency notations by country?)
  // If the patterns are static (i.e. it's the same number diff every time, we could just drop in the num)
  let numToString = (num, commaDelimeter) => {
    let numStr = num.toString()
    let finalStr = ''

    // Check if we need to add commas at all
    if (numStr.length <= 3) return numStr;

    // Loop through, starting at the appropriate index
    for (let i = 0; i < numStr.length; i++) {
      if (i === addComma) {
        finalStr += ','
        addComma += commaDelimeter
      }
      finalStr += numStr[i]
    }
    return finalStr
  }

  numToString(1000000000, 3)

  // If the patterns aren't static (in Indian currency, it's 3, 2, 2...), it gets a little trickier.
  // How about sending in a string, and keeping track of style options?
  let numToString = (num, style) => {
    let numStr = num.toString()
    let result = []
    let tempResult = ''

    // Here, we set up a dictionary of styles and their comma indeces
    let styles = {
      'USA': { 3: 1, 6: 2, 9: 3, 12: 4, 15: 5, 18: 6 },
      'India': { 3: 1, 5: 2, 7: 3, 9: 4, 11: 5, 13: 6 }
    }

    // Then we loop through the number string, starting at the end, checking each index as we go
    for (let i = numStr.length - 1; i >= 0; i--) {
      // Add each integer to a substring temporarily
      tempResult = numStr[i] + tempResult

      // If we hit an index where a comma should go, or we're at the end of the string,
      // we send the substring into our results, and reset our temp array.
      if (styles[style][numStr.length - i] || i === 0) {
        result.unshift(tempResult)
        tempResult = ''
      }
    }

    // Finally, we join our results array with commas, returning the result as one string
    return result.join(',')
  }

  numToString(12345897, 'India')
