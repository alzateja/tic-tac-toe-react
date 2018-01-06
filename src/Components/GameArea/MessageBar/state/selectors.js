/*eslint-disable prefer-default-export */
const checkIfFoundInBoard = (value, board) => {
  if (board.indexOf(value) === -1) {
    return false
  }
  return true
}


export const newGameState = (state) => {
  const board = state.game.board
  console.log((!checkIfFoundInBoard('X',board) ))
  console.log((!checkIfFoundInBoard('O',board) ))

  if (!checkIfFoundInBoard('X',board) || !checkIfFoundInBoard('O',board)) {
    return 'New Game!. Player X. Make your first move!'
  }

}
