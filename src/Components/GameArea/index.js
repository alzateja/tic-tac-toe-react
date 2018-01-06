import React from 'react'
import './styles.css'

import MessageBar from './MessageBar/'
import Board from './Board/'
// import { connect } from 'react-redux';

const GameArea = () => (
  <div>
    <MessageBar />
    <Board />
  </div>
)

export default GameArea
