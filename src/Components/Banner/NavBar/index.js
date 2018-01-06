import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const NavBar = () => (
  <div className="nav-bar">
    <Link to="/" activeClassName="active">Main</Link>
    <Link to="/signin" activeClassName="active">Sign In</Link>
    <Link to="/changepassword" activeClassName="active">Change Password</Link>
    <Link to="/stats" activeClassName="active">Stats</Link>
  </div>
)

// <div className="linkContainer">
// {headerLinks.map((e)=> (
// <p>{e.text}</p>
// ))}
// </div>

export default NavBar

