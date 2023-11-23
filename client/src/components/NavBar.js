import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <NavLink to='/' exact='true'>
        Home
      </NavLink>
      <NavLink to='/about'>
        About
      </NavLink>
    </div>
  )
}

export default NavBar;