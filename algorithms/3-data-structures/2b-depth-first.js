// FROM BST WORKSHOP
// depthFirstForEach(operator, travType = 'in-order'){
//   if (travType === 'pre-order') operator(this.value)
//   if (this.left) this.left.depthFirstForEach(operator, travType)
//   if (travType === 'in-order') operator(this.value)
//   if (this.right) this.right.depthFirstForEach(operator, travType)
//   if (travType === 'post-order') operator(this.value)
// }

let depthFirst = (callback) => {
  if (this.left) this.left.depthFirst(callback)
  callback(this.value)
  if (this.right) this.right.depthFirst(callback)
}


// given root and num, find largest smaller than num

let findLargest = (node, num, currentLargest = null) => {
  if (node.value >= num) return currentLargest
  else {
    currentLargest = node.value
    if (node.left) findLargest(node.left)
    else return currentLargest
  }
}

