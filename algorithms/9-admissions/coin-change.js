// Given a set of coins with various arbitrary denominations, and a total amount of money (cents),
// find the minimum number of coins whose denominations would sum to that total.

// Simple Example: coin_change([25,10,5, 1], 32) => 4  (Greedy approach works here)
// Counter Example: coin_change ([4,3,1], 6) => 2  (Greedy approach does NOT work here, would return 3 (4+1+1). Need to explore all cases and realize 3+3 is more optimal

// 3 Solution Levels:
// Non-recursive, greedy algorithm solution
// Recursive Solution
// Basic Dynamic Programming (Memoization) solution

// Link to all 3 Solutions: https://repl.it/@gtelljohann/Coin-Change-JavaScript
// Video Walkthrough of Solution and Interview Prompts https://www.youtube.com/watch?v=X80maccXstI&feature=youtu.be

// Greedy Solution:
const coinChange = (denoms, amt) => {
	coins = 0;

	for (let i = 0; i < denoms.length; i++) {
		coins += Math.floor(amt / denoms[i])
		amt %= denoms[i]
	}

	return coins
}

// Recursive Solution

