import {
  NEW_GAME_MESSAGE,
  INVALID_MOVE_MESSAGE,
  PLAYER_TURN_MESSAGE,
  PLAYER_WIN_MESSAGE,
  GAME_TIED_MESSAGE,
} from './constants'

export const setNewGameMessage = () => ({
  type: NEW_GAME_MESSAGE,
  payload: 'Starting a New Game. Player X begin!',
})

export const setInvalidMoveMessage = (player) => ({
  type: INVALID_MOVE_MESSAGE,
  payload: `Invalid move Player ${player}. Please Pick again`,
})

export const setPlayerTurnMessage = (player) => ({
  type: PLAYER_TURN_MESSAGE,
  payload: `Your move Player ${player}.`,
})

export const setWinMessage = (player) => ({
  type: PLAYER_WIN_MESSAGE,
  payload: `Congrats Player ${player} on Winning! Please Play again`,
})

export const setGameTiedMessage = () => ({
  type: GAME_TIED_MESSAGE,
  payload: 'There are no more winning moves. Start a new game',
})

