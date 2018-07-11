// Recursive solution
function getNthFib(n) {
  if (n === 1) return 0
  if (n === 2) return 1
  else return getNthFib(n-1) + getNthFib(n-2)
}

// Iterative solution
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

// Cached solution
const fibCached = n => fibCached[n] ||
  (fibCached[n] = (n === 0 || n === 1) ? 1 :
    fibCached(n - 1) + fibCached(n - 2))

// Readable cached solution
const fibCached = (num, cache = {}) => {
  if (cache[num]) return cache[num]
  else {
    if (num <= 2) return cache[num] = 1
    else return cache[num] = fibCached(num - 1, cache) + fibCached(num - 2, cache)
  }
}
