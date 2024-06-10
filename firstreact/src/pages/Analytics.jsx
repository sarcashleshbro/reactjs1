import React from 'react';

import styles from './Analytics.module.css'; // Import CSS module

const AnalyticsPage = () => {
  return (
    <div>
      <h2 className={styles.pageTitle}>Device Analytics</h2>
      <div className={styles.formContainer}>
        <Analytics />
      </div>
    </div>
  );
};

export default AnalyticsPage;


