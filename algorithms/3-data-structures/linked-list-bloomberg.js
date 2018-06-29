// You're playing a game in which you're given the number of players.
// Each turn, the player removes the person next to them.
// Play continues until there is only one player left.

// EXAMPLE: eenyMeeny(5) =>
// 1 2 3 4 5 <= round 1: player 1 (remove player 2)
// 1 3 4 5 <= round 2: player 3 (remove player 4)
// 1 3 5 <= round 3: player 5 (remove player 1)
// 3 5 <= round 4: player 3 (remove player 5)
// Player 3 is the winner!

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

// Linked List Solution
