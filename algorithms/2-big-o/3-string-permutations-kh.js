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
function permutations(array) {

  let res = []

  console.log(array)

  if (array.length === 1) return [array]

  for (let idx = 0; idx < array.length; idx++) {

    let branchMember = array[idx]
    let virtualArray = array.slice(0, idx).concat(array.slice(idx + 1))

    permutations(virtualArray).forEach(eachPermutation => {
      res.push([branchMember, ...eachPermutation])
    })
  }

  console.log('Lets return ', res)
  return res

}
