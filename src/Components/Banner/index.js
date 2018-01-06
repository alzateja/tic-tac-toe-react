import React from 'react'
import './styles.css'
// import NavBar from './NavBar/index'
import headerImage from '../../assets/images/header.jpg'

// const headerLinks = [
//   {
//     text: 'Sign In',
//     route: 'signIn',
//   },
// ]

const Header = () => (
  <div className="headerContainer">
    <img className="headerImage" src={headerImage} alt="logoForTicTacToe" />
    <h1 className="gameTitle">Tic Tac Toe Game - Pet Edition</h1>
  </div>
)

export default Header

