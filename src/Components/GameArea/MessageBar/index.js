import React from 'react'
import PropTypes from 'prop-types'

const MessageBar = ({ message }) => (
  <p>{message}</p>
)

MessageBar.propTypes = {
  message: PropTypes.string,
}

MessageBar.defaultProps = {
  message: 'Welcome. Perform an action to start the game',
}

export default MessageBar
