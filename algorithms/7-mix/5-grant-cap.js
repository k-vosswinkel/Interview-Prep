// The awards committee of your alma mater asked for your assistance with a budget allocation problem they’re facing.

// Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants.

// The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

// Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e.sum of the N reallocated grants equals to newBudget).

// Analyze the time and space complexities of your solution.

// Example
// grantsArray = [2, 100, 50, 120, 1000] (Total: 1272)
// newBudget = 190
// output: 47 ([2, 47, 47, 47, 47])

function findGrantsCap(grantsArray, newBudget) {
  let sortedArray = grantsArray.sort((a, b) => b - a);
  let currentBudget = grantsArray.reduce((acc, curr) => {
    return acc + curr
  })

  let surplus = currentBudget - newBudget
  let currentCalculatedSpend = currentBudget - grantsArray[0]
  let calculatedCap = 0

  for (let i = 1; i < sortedArray.length; i++) {
    currentCalculatedSpend = currentCalculatedSpend - sortedArray[i]
    console.log("calcspend: ", currentCalculatedSpend)
    let cappedSpend = sortedArray[i] * (i + 1)
    let testBudget = cappedSpend + currentCalculatedSpend
    console.log(testBudget, newBudget)
    if (testBudget <= newBudget) {

      calculatedCap = ((newBudget - testBudget) / i) + sortedArray[i]
      break
    }
  }
  return calculatedCap
}

// WALKTHROUGH
// A) Find lower bound:
// Step 1: Sort the array: [1000, 120, 100, 50, 2]

// Step 2: Define a new variable surplus which represents the excess amount we need to cut back
// sum(grantsArray) - newBudget (1082)

// Step 3: iteratively subtract from surplus the amount each grant in grantsArray saves us if it were cap

// NOTE: if 120 were the cap: save 880
// surplus1 = surplus0 - 1*(grantsArray[0] - grantsArray[1])
// surplus1 = 1082 - 1*(1000 - 120)
// (202) 1082 - 1*(880)

// NOTE: if 100 were the cap: save 920
// surplus2 = surplus1 - 2*(grantsArray[1] - grantsArray[2])
// surplus1 = 202 - 2*(120 - 100)
// (162) 202 - 2*(20)

// NOTE: if 50 were the cap: save 1070 (NOT ENOUGH)
// surplus3 = surplus2 - 3*(grantsArray[2] - grantsArray[3])
// surplus1 = 162 - 3*(100 - 50)
// (12) 162 - 3*(50)

// NOTE: if 2 were the cap: save 1262 (TOO MUCH)
// surplus4 = surplus3 - 4*(grantsArray[3] - grantsArray[4])
// surplus1 = 12 - 4*(50 - 2)
// (-180) 12 - 4*(48)
//LOWER BOUND: 2

// A) Find lower bound Kait's Way:
// Step 1: Sort the array: [1000, 120, 100, 50, 2]

// Step 2: Define a new variable surplus which represents the excess amount we need to cut back
// sum(grantsArray) - newBudget (1082)

// Step 3:
// set your starting val to calculate possible caps (total current budget - arr[0])
// starting at 1, iterate through the sorted array
// subtract your current val from your starting val
// multiply current val (poss cap) by i + 1 to account for possible budget spend
// add that to what you're already spending (starting val)
// bigger than your new budget? Keep working your way down.

// B) calculate the appropriate cap given the lower bound
// Lower bound results are -180, so your appropriate cap is going to be 2 + (180 / 4 (i))
// CAP = 47
// FINAL ARRAY: [2, 47, 47, 47, 47]
