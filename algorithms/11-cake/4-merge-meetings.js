// Your company built an in -house calendar tool called HiCal.
// You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting.
// In HiCal, a meeting is stored as a tuple of integers(start_time, end_time).
// These integers represent the number of 30 - minute blocks past 9: 00am.

// For example:
// (2, 3) # meeting from 10: 00 – 10: 30 am
// (6, 9) # meeting from 12: 00 – 1: 30 pm

// Write a function condense_meeting_times() that takes an array of meeting time ranges
// and returns an array of condensed ranges. For example, given:
// [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
// your function would return:
// [(0, 1), (3, 8), (9, 12)]

const condensedTimes = (arr) => {
  arr.sort((a, b) => {
    if (a[0] < b[0]) return -1
    if (a[0] > b[0]) return 1
    return 0
  })
  let results = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    //check for overlap and merge if possible
    let prev = results[results.length - 1]
    let curr = arr[i]

    if (curr[0] <= prev[1]) {
      results.splice(results.length - 1)
      results.push([prev[0], curr[1]])
    } else results.push(curr)
  }
  return results
}

const test1 = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
const test2 = [[0, 1], [6, 8], [1, 2], [2, 4]]
console.log(condensedTimes(test1)) //[[0, 1], [3, 8], [9, 12]]
console.log(condensedTimes(test2)) //[[0, 4], [6, 8]]
