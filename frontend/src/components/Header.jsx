import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Goal Setter</Link>
        </div> 
         <ul>
            <li>
                <Link to={'/login'}><FaSignInAlt/>Login</Link>
            </li>
            <li>
                <Link to={'/register'}><FaUser/>Register</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header