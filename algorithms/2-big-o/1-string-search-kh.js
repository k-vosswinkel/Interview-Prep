let findTheNeedle = (needle, haystack) => {
  for (let i = 0; i < haystack.length; i++){
    for (let n = 0; n < needle.length; n++){
      if (haystack[i + n] !== needle[n]) break;
      if (n === needle.length - 1) return i;
    }
  }
  return -1;
}

findTheNeedle('or', 'hello world'); // should return 7
// findTheNeedle('hello world', 'or'); // should return -1
// findTheNeedle('howdy', 'hello world'); // should return -1
// findTheNeedle('oox', 'ooboxoooxo'); // should return 6
