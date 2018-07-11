// You're playing a game in which you're given the number of players.
// Each turn, the player removes the person next to them.
// Play continues until there is only one player left.

// EXAMPLE: eenyMeeny(5) =>
// 1 2 3 4 5 6 <= round 1: player 1 (remove player 2)
// 1 3 4 5 <= round 2: player 3 (remove player 4)
// 1 3 5 <= round 3: player 5 (remove player 1)
// 3 5 <= round 4: player 3 (remove player 5)
// Player 3 is the winner!

/////////////////////////
// Brute Force Solution:
let eenyMeeny = (num) => {
  // build our array for storage
  let players = []
  for (let i = 1; i <= num; i++) {
    players.push(i)
  }

  // cycle through the array, removing and indexing the player as you go
  let currentPlayer = 0
  while (players.length > 1) {
    // if, given the current array, you're on the last player,
    // shift the first player off the array and loop around,
    // setting the current player to 0
    if (currentPlayer === players.length - 1) {
      players.shift()
      currentPlayer = 0
    } else {
    // otherwise remove the next player
      players.splice(currentPlayer + 1, 1)
      // if you were on the second-to-last player (and after splicing, you're now at the last player), reset the player to 0
      if (currentPlayer === players.length - 1) {
        currentPlayer = 0
      } else { // else increment the player up by 1
        currentPlayer++
      }
    }
  }
  return players[0]
}

//n^3

/////////////////////////
// Linked List Solution
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node at the head of the linked list
  insertNode(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remove a given node from the linked list
  removeNode(node) {
    let next = node.next.next
    node.next = next
    return node.next
  }

  // Print our entire linked list (debugging)
  printList() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }
}

// Node constructor
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let eenyMeeny = (num) => {
  // Build our linked list, with our first player at the head
  let ourLinkedList = new LinkedList()
  for (let i = num; i > 0; i--) {
    ourLinkedList.insertNode(i)
  }

  // Starting at the head of our linked list, move through removing every
  // other player
  let playRound = (currentNode = ourLinkedList.head) => {
    // This while loop will break if currentNode is null, so check for it!
    // If currentNode and currentNode.next exist, remove a node
    while (currentNode && currentNode.next) {
      currentNode = ourLinkedList.removeNode(currentNode)
    }
    // if our last player in the round is the last node in the linked list,
    // remove the head of the linked list
    // and start the next round with player 2
    if (currentNode) ourLinkedList.head = ourLinkedList.head.next
  }

  while (ourLinkedList.head.next) {
    playRound()
  }
  return ourLinkedList.head.val

}
// n^2

/////////////////////////
// ES6 Map Solution

/* From: http://www.ecma-international.org/ecma-262/6.0/index.html#sec-map-objects
Map object must be implemented using either hash tables or other mechanisms that, on average, provide access times that are sublinear on the number of elements in the collection. The data structures used in this Map objects specification is only intended to describe the required observable semantics of Map objects. It is not intended to be a viable implementation model.
*/

//All map methods are sublinear so either O(log(n)) or O(1)
let eenyMeeny = (num) => {
  // Build our map of players, setting key/value pairs to player numbers
  let players = new Map()
  for (let i = 1; i <= num; i++) {
    players.set(i, i)
  }
  let keyArray = [...players.keys()]
  let deleteFirst = players.keys().length % 2 === 0 ? false : true;
  let toDelete = false;

  // The basic logic here is cycling through players, alternating between
  // whether or not to remove a player
  // let helperFunction = () => {
  //   players.forEach(player => {
  //     if (toDelete === true) players.delete(player)
  //     toDelete = !toDelete
  //   })
  //   deleteFirst = !deleteFirst
  //   keyArray = [...players.keys()]
  // }
  let currentPlayer = players.get(keyArray[0])
  let nextPlayer = players.get(keyArray[currentPlayer + 1])
  while (keyArray.length > 1) {
    // helperFunction()
    if (players.has(nextPlayer)) players.delete(nextPlayer)
    else players.delete(keyArray[0])
    currentPlayer = players.get(keyArray[currentPlayer + 1])
    if (!players.has(currentPlayer)) currentPlayer = keyArray[0]
  }
  return keyArray[0]
}
// 1 3 5 // 7
// O(n^2)

// eenyMeeny(5) // Should return 3
// eenyMeeny(6) // Should return 5
// eenyMeeny(10) // Should return 5
eenyMeeny(1) // Should return 1
