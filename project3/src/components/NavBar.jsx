import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/locator">Locator</Link></li>
        <li><Link to="/details">Details</Link></li>
        <li><Link to="/logout">Log Out</Link></li> {/* Add Log Out link */}
        <li><Link to="/contact">Contact Us</Link></li> {/* Add Contact Us link */}
        <li><Link to="/about">About Us</Link></li> {/* Add About Us link */}
      </ul>
    </nav>
  );
}

export default NavBar;



