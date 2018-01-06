import { getBoardState } from './selectors'

const gameDataFixture = {
  game: {
    board: ['', 'X', '', 'O', '', '', '', '', ''],
  },
}

describe('Test the getBoardState function', () => {
  const board = getBoardState(gameDataFixture)

  it('should return an array of 9 objects', () => {
    expect(board).toHaveLength(9)
  })
}
)

