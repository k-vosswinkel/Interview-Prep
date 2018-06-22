// Selection sort moves through an ever-shorter array to find the smallest number and move it to the appropriate index

// It's time complexity is O(n * log(n)) where n is the length of the array, since we're looping through a progressively smaller and smaller subset of the array each time.
let swap = (arr, currIdx, smallestIdx) => {
  let placeholder = arr[currIdx]
  arr[currIdx] = arr[smallestIdx]
  arr[smallestIdx] = placeholder
  return arr
}

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i
    for (let n = i; n < arr.length; n++) {
      if (arr[n] < arr[smallestIdx]) smallestIdx = n
    }
    swap(arr, i, smallestIdx)
  }
  return arr
}

// selectionSort([16, 3, 2, 4, 21, 11])
