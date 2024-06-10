import React from 'react';
import LocatorMap from '../components/LocatorMap';
import styles from './Locator.module.css'; // Import CSS module

const Locator = () => {
  return (
    <div>
      <h2 className={styles.pageTitle}>Device Locator</h2>
      <div className={styles.mapContainer}>
        <LocatorMap />
      </div>
    </div>
  );
};

export default Locator;

