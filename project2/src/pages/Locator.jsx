import React from 'react';
import LocatorMap from '../components/LocatorMap';
import styles from '../styles/Locator.module.css';

const Locator = () => {
  return (
    <div className={styles.locator}>
      <h1 className={styles.pageTitle}>Device Locator</h1>
      <LocatorMap />
    </div>
  );
};

export default Locator;
