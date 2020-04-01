import React from 'react';
import { NavLink } from 'react-router-dom';


const navbar = () => {
  return (
    <div className='nav-container'>
      <NavLink to='/'><h4>Brian Ponto</h4></NavLink>
      <nav>
        <ul>
          <li><NavLink to='/about'>ABOUT</NavLink></li>
          <li><NavLink to='/contact'>CONTACT</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
