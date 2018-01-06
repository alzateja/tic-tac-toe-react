import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBoardState, getCurrentPlayer } from './state/selectors.js'
import { newGameState} from

import './styles.css'

import GameTile from './GameTile'

export class Board extends Component {
  static propTypes = {
    board: PropTypes.array,
  }
  static defaultProps = {
    board: [],
  }
  componentDidMount() {
    console.log(this.props)
  }

  onSquareClick = (e) => {
    console.log(e.currentTarget)
    console.log(e.currentTarget.id)
  }

  render() {
    return (
      <div className="board">
        {this.props.board.map((tile, index) => (
          <GameTile
            clickHandler={this.onSquareClick}
            key={Math.random()}
            index={index}
            text={`board${index}`}
          />
        ))}
      </div>
    )
  }
}

// List.propTypes = {
// 	items: PropTypes.array.isRequired,
// };
//
// const mapStateToProps = state => ({
// 	items: state.list.items,
// });

const mapStateToProps = (state) => ({
  board: getBoardState(state),
  currentPlayer: getCurrentPlayer(state),
})

// const mapDispatchToProps = (dispatch) => ({
//   getCurrentPolicy: () => { dispatch(fetchPolicyData()) },
//   setCurrentPolicy: (policy) => { dispatch(setCurrentPolicy(policy)) },
// })

//
export default connect(mapStateToProps, null)(Board)
