// You're playing a game in which you're given the number of players.
// Each turn, the player removes the person next to them.
// Play continues until there is only one player left.

// EXAMPLE: eenyMeeny(5) =>
// 1 2 3 4 5 <= round 1: player 1 (remove player 2)
// 1 3 4 5 <= round 2: player 3 (remove player 4)
// 1 3 5 <= round 3: player 5 (remove player 1)
// 3 5 <= round 4: player 3 (remove player 5)
// Player 3 is the winner!
debugger
// Brute Force Solution:
let eenyMeeny = (num) => {
  // build our array for storage
  let players = []
  for (let i = 1; i <= num; i++){
    players.push(i)
  }
  debugger
  let currentPlayer = 1
    while (players.length > 1){
      players = players.splice(currentPlayer, 1)
      currentPlayer++
    }
  return players[0]
}
