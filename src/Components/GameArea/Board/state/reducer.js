// The inital reducer state.
const initalState = {
  currentPlayer: 'X',
  board: ['', '', '', '', '', '', '', '', ''],
  message: 'Starting a New Game. Player X begin!',
  winningCondition: '',
  over: false,
  remainingMoves: {},
  unwinnableCounts: 0,
}

export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
  default:
    return state
  }
}
