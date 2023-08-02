import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
         <header>
        <nav> <ul>
            <li>
               <NavLink to="/">Home</NavLink>  
            </li>
            <li>
            <NavLink to="/About Us">About</NavLink> 
            </li>
            <li>
            <NavLink to="/Contact">Contact</NavLink> 
            </li>
        </ul></nav>
        
       
      </header>
    </div>
  )
}

export default Header
