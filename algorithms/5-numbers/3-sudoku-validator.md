[Slides](https://slides.com/seemaullal/reacto-3-8/)

[Updates Slides](https://slides.com/pat310/reacto-3-8/)

---

# Prompt

Write a function that determines if a Sudoku solution is valid. Your input will be a 2-D array that represents a 9x9 matrix. Sudoku has three rules:
 - Every row must contain the numbers from 1-9 (no repeats)
 - Every column must also contain every number from 1-9
 - Every 3x3 subgroup/square must contain each number from 1-9

# Representing the Data

Your input is a 2-D array that represents a 9x9 matrix. For example:

```js
var solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];
```

# Examples

```js
sudokuValidator([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);
//should return true

sudokuValidator([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]
]);
//should return false
```

# Iterative Solution

```js
function sudokuValidator(solution){
  function check(arr){
    return arr.sort()
    .filter(function(val, index){
      return val === index + 1;
    })
    .length === 9;
  }

  for (let i = 0; i < 9; i++){
    var col = [];
    var row = [];
    var square = [];
    for(var j = 0; j < 9; j++){
      col.push(solution[j][i]);
      row.push(solution[i][j]);
      square.push(solution[Math.floor(j / 3)][j % 3]);
    }
    console.log(square)
    if(!check(col) || !check(row) || !check(square)) return false;
  }
  return true;
}
```

# Recursive Solution

```js
// We'll use a helper function that returns a set of all valid candidates for a given cell in the board
function getCandidates(board, row, col):
    # For some empty cell board[row][col], what possible
    # characters can be placed into this cell
    # that aren't already placed in the same row,
    # column, and sub-board?

    # At the beginning, we don't have any candidates
    candidates = []

    # For each character add it to the candidate list
    # only if there's no collision, i.e. that character
    # doesn't already exist in the same row, column
    # and sub-board. Notice the top-left corner of (row, col)'s
    # sub-board is (row - row%3, col - col%3).
    for chr from '1' to '9':
        collision = false;
        for i from 0 to 8:
            if (table[row][i] == chr ||
                table[i][col] == chr ||
                table[(row - row % 3) + floor(i / 3)][(col - col % 3) + i % 3] == chr):
                    collision = true
                    break

        if (!collision):
            candidates.push(chr)

    return candidates

function sudokuSolve(board):
    # For each empty cell, consider 'newCandidates', the
    # set of possible candidate values that can
    # be placed into that cell.

    row = -1
    col = -1
    candidates = null

    for r from 0 to 8:
        for c from 0 to 8:
            if (board[r][c] == '.'):
                newCandidates = getCandidates(board, r, c)
                # Then, we want to keep the smallest
                # sized 'newCandidates', plus remember the
                # position where it was found
                if (candidates == null OR newCandidates.size() < candidates.size()):
                    candidates = newCandidates
                    row = r
                    col = c

    # If we have not found any empty cell, then
    # the whole board is filled already
    if (candidates == null):
        return true

    # For each possible value that can be placed
    # in position (row, col), let's
    # place that value and then recursively query
    # whether the board can be solved.  If it can,
    # we are done.
    for val in candidates:
        board[row][col] = val
        if (sudokuSolve(board)):
            return true
        # The tried value val didn't work so restore
        # the (row, col) cell back to '.'
        board[row][col] = '.'

    # Otherwise, there is no value that can be placed
    # into position (row, col) to make the
    # board solved
    return false
    ```
