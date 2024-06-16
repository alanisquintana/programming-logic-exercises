/* 
You're implementing a tic-tac-toe game and want to check if someone has won. Create a function that receives an array representing the board and returns 'X', 'O', or 'Draw' depending on the outcome of the game.
*/

const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
  ]

function checkWinner(match) {
    const lines = []

    for (let i = 0; i < board.length; i++) {
        lines.push(board[i]);
        const column = []
        for (let j = 0; j < board.length; j++) {
        let line = board[j]
        column.push(line[i])
        }
        lines.push(column)
      }

      for (const line of lines) {
        if (line.every(e => e === "X")) {
            return "The winner is X"
        } 
        if (line.every(e => e === "O")) {
            return "The winner is O"
        }
    }

        return "Draw"
}

const winner = checkWinner(board)
console.log(winner)