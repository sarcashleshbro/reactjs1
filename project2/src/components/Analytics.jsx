// src/components/Analytics.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const Analytics = () => {
  const { deviceId } = useParams();

  // Example data for analytics
  const analyticsData = {
    temperature: [25, 26, 27, 28, 27, 26, 25],
    humidity: [60, 62, 63, 65, 64, 63, 61],
    pressure: [1012, 1010, 1009, 1011, 1013, 1012, 1011],
    gas: [0.1, 0.12, 0.11, 0.09, 0.1, 0.12, 0.11],
  };

  // You can use charting libraries like Chart.js or D3.js to render graphs
  return (
    <div>
      <h2>Analytics for Device ID: {deviceId}</h2>
      {/* Render charts or graphs for analytics data */}
    </div>
  );
};

export default Analytics;


