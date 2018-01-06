export function extractCellId(id) {
  return id.replace('board', '')
}

export function IsMoveLegal(board, id, currentPlayer) {
  const newBoard = board
  if (newBoard[id] !== '') {
    // console.log(`II. Move is illegal. Player is still ${currentPlayer}`)
    return false
  }
  newBoard[id] = currentPlayer
  // console.log('II. Move is legal. Here is your new board' , newBoard);
  return { board: newBoard }
}

