import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const GameTile = ({ clickHandler, index }) => (
  <div
    className="gameTile"
    data-key={`board${index}`}
    id={`board${index}`}
    onClick={clickHandler}
    onKeyDown={clickHandler}
    role="button"
    tabIndex={index}
  >{index}
  </div>
)

GameTile.propTypes = {
  clickHandler: PropTypes.func,
  index: PropTypes.number,
//   classes: PropTypes.string,
}

GameTile.defaultProps = {
  index: '45',
  clickHandler: () => {},
}

export default GameTile
