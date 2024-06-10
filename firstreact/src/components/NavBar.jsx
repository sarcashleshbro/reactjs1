import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/locator">Locator</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

