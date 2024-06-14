import React from 'react';
import DeviceTable from './DeviceTable';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.pageTitle}>Welcome to the IoT Dashboard</h2>
      <DeviceTable />
    </div>
  );
};

export default Home;
