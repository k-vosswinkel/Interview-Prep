// recursive solution
function getNthFib(n) {
  if (n === 1) return 0
  if (n === 2) return 1
  else return getNthFib(n-1) + getNthFib(n-2)
}

// iterative solution
function getNthFib(n) {
  let lastTwo = [0, 1];
  let counter = 3;

  if (n === 1) return 0

  while (counter <= n){
    let currentFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = currentFib
    counter++
  }
  return lastTwo[1]
}
