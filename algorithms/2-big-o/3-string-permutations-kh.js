let stringPermutations = (str) => {
  let results = [];

  for (let i = 0; i < str.length; i++){
    let currLetter = str[i]
    let currResults = ''
    for (let n = 0; n < str.length; n++){
      if (currLetter !== str[n]) currResults += str[n]
    }
    results.push(currResults)
    currResults = ''
  }
  console.log(results)
}

//Try Philip's way here - slicing and recursing
