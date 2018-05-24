// FROM BST WORKSHOP
// depthFirstForEach(operator, travType = 'in-order'){
//   if (travType === 'pre-order') operator(this.value)
//   if (this.left) this.left.depthFirstForEach(operator, travType)
//   if (travType === 'in-order') operator(this.value)
//   if (this.right) this.right.depthFirstForEach(operator, travType)
//   if (travType === 'post-order') operator(this.value)
// }

let depthFirst = (node, callback) => {
  let currentNode = node

  while (currentNode) {
    callback(currentNode.value)

  }
}
