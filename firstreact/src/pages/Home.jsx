import React from 'react';
import styles from './Home.module.css'; // Path to the CSS module file

const Home = () => {
  return (
    <div className={styles.homeContent}>
      <h2 className={styles.pageTitle}>Welcome to IoT Device Management System</h2>
      <p>This is the home page content.</p>
    </div>
  );
};

export default Home;

