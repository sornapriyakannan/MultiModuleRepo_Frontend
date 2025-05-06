import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css'
const Navbar = () => {
  return (
    <div className='div-dis'>
      <div className='div-item'>
          <ul className='list-dis'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/todo"><li>Todo</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar;
