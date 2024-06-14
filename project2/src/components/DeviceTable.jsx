import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const devices = [
  { id: 1, name: 'Device 1', lat: 51.505, lon: -0.09 },
  { id: 2, name: 'Device 2', lat: 48.8566, lon: 2.3522 },
  // Add more devices
];

const DeviceTable = () => {
  return (
    <div className={styles.deviceTable}>
      <h2 className={styles.pageTitle}>Devices</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Locator</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>
                <Link to={`/locator/${device.id}`}>{device.lat}</Link>
              </td>
              <td>
                <Link to={`/locator/${device.id}`}>{device.lon}</Link>
              </td>
              <td>
                <Link to={`/locator/${device.id}`}>Locate</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;


