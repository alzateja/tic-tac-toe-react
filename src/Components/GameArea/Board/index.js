import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBoardState, getCurrentPlayer } from './state/selectors.js';

import './styles.css';

import GameTile from './GameTile';

export class Board extends Component {
  static propTypes = {
    board: PropTypes.array
  };
  static defaultProps = {
    board: []
  };
  componentDidMount() {
    console.log(this.props);
  }

  onSquareClick = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.id);
  };

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
    );
  }
}

export default Board;
