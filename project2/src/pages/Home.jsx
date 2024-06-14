import React from 'react';
import DeviceTable from '../components/DeviceTable';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.pageTitle}>Welcome to IoT Device Management System</h1>
      <DeviceTable />
    </div>
  );
};

export default Home;
