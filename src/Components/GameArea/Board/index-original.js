import React, { Component } from 'react'
import './styles.css'

import { extractCellId, IsMoveLegal } from './selectionLogic'
import { evaluateCurrentRound } from './gameLogic'
// import MessageBar from '../MessageBar/index';
// import { connect } from 'react-redux';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 'X',
      board: ['', '', '', '', '', '', '', '', ''],
      message: 'Start a new game',
      winningCondition: '',
      over: false,
      remainingMoves: {},
      unwinnableCounts: 0,
    }
  }
  onPlayerSelection(event) {
    if (this.state.over) {
      return this.setState({ message: 'Game is over. Start a new Game!' })
    }
    // Step 1. Get the id for the cell
    const id = extractCellId(event.target.id)
    // console.log(`I. Get the id for the cell = ${id}`);

    // II.  Determine Legality of Move
    const checkedMove = IsMoveLegal(this.state.board, id, this.state.currentPlayer)

    if (!checkedMove) {
      // Exit if illegal move. should be same player
      this.setState({ message: `Invalid Move.Pick again ${this.state.currentPlayer}` })
      return false
    }
    // If valid move save to state.
    this.setState({ ...checkedMove })
    const evaluationResult = evaluateCurrentRound(this.state.board, this.state.currentPlayer)
    console.log('eval result= ', evaluationResult)
    this.setState({ ...evaluationResult })
    return false
  }

  render() {
    return (
      <div>
        {/* <MessageBar message={this.state.message} /> */}
        <table id="game-board">
          <tbody>
            <tr className="table-row1">
              <td
                className="column1 row1 diag1"
                id="board0"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[0]}
              </td>
              <td
                className="column2 row1"
                id="board1"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[1]}
              </td>
              <td
                className="column3 row1 diag2"
                id="board2"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[2]}
              </td>
            </tr>
            <tr className="table-row2">
              <td
                className="column1 row2"
                id="board3"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[3]}
              </td>
              <td
                className="column2 row2 diag1 diag2"
                id="board4"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[4]}
              </td>
              <td
                className="column3 row2"
                id="board5"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[5]}
              </td>
            </tr>
            <tr className="table-row3">
              <td
                className="column1 row3 diag2"
                id="board6"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[6]}
              </td>
              <td
                className="column2 row3"
                id="board7"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[7]}
              </td>
              <td
                className="column3 row3 diag1"
                id="board8"
                onClick={e => this.onPlayerSelection(e)}
              >{this.state.board[8]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board

// List.propTypes = {
// 	items: PropTypes.array.isRequired,
// };
//
// const mapStateToProps = state => ({
// 	items: state.list.items,
// });

//
// export default connect(mapStateToProps, null)(List);
