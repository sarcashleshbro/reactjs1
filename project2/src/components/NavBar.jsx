import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.title}>IoT Dashboard</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/locator/1">Locator</Link></li>
        <li><Link to="/analytics/1">Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
