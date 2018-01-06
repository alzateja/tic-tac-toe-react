const allWinConditions = [
  { name: 'row1', value: [0, 1, 2] },
  { name: 'row2', value: [3, 4, 5] },
  { name: 'row3', value: [6, 7, 8] },
  { name: 'col1', value: [0, 3, 6] },
  { name: 'col2', value: [1, 4, 7] },
  { name: 'col3', value: [2, 5, 8] },
  { name: 'dia1', value: [0, 4, 8] },
  { name: 'dia2', value: [6, 4, 2] },
]

const moveWeight = {
  noMoves: 2,
  blockXTwoMoves: 4,
  winOTwoMoves: 5,
  blockXOneMove: 10,
  winOinOneMove: 20,
}


function winGameResponse(winCondition, xCount, oCount) {
  let winResponseObject

  if (xCount === 3) {
    // console.log(`win condition = ${winCondition.name}`)
    winResponseObject = { winningCondition: winCondition, message: 'You win player X', over: true }
  }

  if (oCount === 3) {
    // console.log(`win condition = ${winCondition.name}`)
    winResponseObject = { winningCondition: winCondition, message: 'You win player 0', over: true }
  }
  return winResponseObject
}

export function switchPlayer(currentPlayer) {
  switch (currentPlayer) {
  case 'X':
    return { currentPlayer: 'O', message: 'Nice Move.Your turn Player O!' }
  case 'O':
    return { currentPlayer: 'X', message: 'Nice Move.Your turn Player X!' }
  default:
    return { currentPlayer, message: 'That was unusual. You have seemed to have an error' }
  }
}


function determineMovesWeight(xCount, oCount) {
  let value
  switch (true) {
  case xCount === 1 && oCount === 0:
    value = moveWeight.blockXTwoMoves
    break
  case xCount === 0 && oCount === 1:
    value = moveWeight.winOTwoMoves
    break
  case xCount === 2 && oCount === 0:
    value = moveWeight.blockXOneMove
    break
  case xCount === 0 && oCount === 2:
    value = moveWeight.winOinOneMove
    break
  default:
    value = moveWeight.noMoves
    break
  }

  return value
}

function applyMoveWeights(totalMoveWeights = {}, weight, openMoves) {
  const weightsForMoves = totalMoveWeights
  openMoves.forEach((move) => {
    if (weightsForMoves[move] === undefined) {
      weightsForMoves[move] = weight
    } else {
      weightsForMoves[move] += weight
    }
  })
  return weightsForMoves
}

function evaluatePossibleWinCondition(board, winCondition) {
  let xCount = 0
  let oCount = 0
  const openMoves = []
  let response

  winCondition.value.forEach((e) => {
    if (xCount > 0 && oCount > 0) {
      return false
    }
    if (board[e] === 'X') {
      xCount += 1
    }
    if (board[e] === 'O') {
      oCount += 1
    }
    if (board[e] === '') {
      openMoves.push(e)
    }
  })
  // Check if set is unwinnable. If so exit
  if (xCount > 0 && oCount > 0) {
    return 'N/A'
  }

  if (xCount === 3 || oCount === 3) {
    response = winGameResponse(winCondition.name, xCount, oCount)
    return response
  }
  const moveWeights = determineMovesWeight(xCount, oCount)

  response = { moveWeights, openMoves }

  return response
}


export function evaluateCurrentRound(board, currentPlayer) {
  let result
  let unwinnableCount = 8
  let remainingMoves = { }
  let newPlayer

  for (let i = 0; i < allWinConditions.length; i += 1) {
    result = evaluatePossibleWinCondition(board, allWinConditions[i])
    console.log(`${allWinConditions[i].name}:`, result)


    if (result === 'N/A') {
      unwinnableCount += 1
      if (unwinnableCount === 8) {
        return { message: 'Tied Game. Game Over!', over: true }
      }
    } else if (result.over === true) {
      return result
    } else {
      remainingMoves = applyMoveWeights(remainingMoves, result.moveWeights, result.openMoves)
      newPlayer = switchPlayer(currentPlayer)
    }
  }
  console.log(remainingMoves)
  console.log(`unwinnableCount:${unwinnableCount}`)
  return { remainingMoves, ...newPlayer }
}

