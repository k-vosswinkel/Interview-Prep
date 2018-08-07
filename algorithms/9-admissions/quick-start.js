// DIVIDE BY TWO
// --------------------------------------------
// Write a function that will take a number and divide it by two until it's less than one.
// Once the number is less than one, return the number.
// Use Recursion.

function lessThanOne(num) {
  // YOUR CODE HERE
}

console.log(lessThanOne(1)); //0.5
console.log(lessThanOne(25)); //0.78125
console.log(lessThanOne(66)); //0.515625
console.log(lessThanOne(87)); //0.6796875

// Answer:
function lessThanOne(num) {
  if (num >= 1) {
    return lessThanOne(num / 2)
  }
  return num;
}

// VALID PARENTHESES
// --------------------------------------------

// Write a function called validParentheses that takes a string of parentheses and determines if the order of the parentheses is valid.
// validParentheses should return true if the string is valid, and false if it's invalid.

// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

function validParentheses(parens) {
  // YOUR CODE HERE
}

console.log(validParentheses("()")) //true
console.log(validParentheses(")(()))")) //false
console.log(validParentheses("(")) //false
console.log(validParentheses("(())((()())())")) //true
console.log(validParentheses("())(")) //false

// Answer:
function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;
  }

  return (indent === 0);
}

// MULTIPLICATIVE PERSISTENCE
// --------------------------------------------

// Write a function MultiplicativePersistence(num) that takes a number (always a positive integer) and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in number until you reach a single digit.

// For example, the multiplicative persistence of 39 is 3 because:
// 3 * 9 = 27 (1)
// 2 * 7 = 14 (2)
// 1 * 4 = 4 (3)

function multiplicativePersistence(num) {
  // YOUR CODE HERE
}

console.log(multiplicativePersistence(4)) //0
console.log(multiplicativePersistence(25)) //2
console.log(multiplicativePersistence(39)) //3

// Answer:
function multiplicativePersistence(num) {
  let strNum = num.toString();
  if (strNum.length > 1) {
    let newNum = strNum.split("").reduce(function (pre, cur) {
      return pre * +cur;
    }, 1);
    return 1 + multiplicativePersistence(newNum);
  }
  else {
    return 0;
  }
}
