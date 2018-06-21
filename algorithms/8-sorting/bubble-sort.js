// In bubble sort, you move through an array, comparing each index with the following index, swapping where necessary.
// You continue looping through the array until you don't have to swap anymore

// This sort is pretty bad in Big(O) terms. It is O(n^2), because at worst case, you have to traverse your array n^2 times
// with no real way of optimizing.

let bubbleSort = (arr) => {
  let finished = false
  while (finished === false){
    finished = true
    for (let i = 0; i < arr.length; i++){
      if (arr[i + 1] < arr[i]){
        let placeholder = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = placeholder
        finished = false
      }
    }
  }
  return arr
}
