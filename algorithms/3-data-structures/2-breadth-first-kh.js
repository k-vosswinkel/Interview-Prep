let breadthFirst = (node, callback) => {
  let currentNode = queue[0]
  let queue = [node]

  while (queue.length){
    //add any children of current node to queue
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)

    //process top of queue and remove it
    callback(currentNode.value)
    queue.shift()
  }
}
