// Insertion sort moves through your array and keeps track of a current value. It moves from your current value's index
// backwards to the beginning of the array, finding where (if at all) the value needs to be moved, and inserts it at the
// appropriate index, shifting all of the other numbers up to make space.

// This solution is O(n) at best, but O(n^2) at worst, so it is a good option for small inputs and partially sorted arrays.

let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let currentVal = arr[i]
    let n = i - 1
    while (n >= 0 && arr[n] > currentVal){
      arr[n + 1] = arr[n]
      n--
    }
    arr[n + 1] = currentVal
  }
  return arr
}
