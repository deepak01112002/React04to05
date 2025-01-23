import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
    </div>
  )
}

export default Navbar