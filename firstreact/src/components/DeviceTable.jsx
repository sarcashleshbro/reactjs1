import React from 'react';
import { Link } from 'react-router-dom';

const devices = [
  { id: 1, name: 'Device 1', lat: 51.505, lon: -0.09 },
  { id: 2, name: 'Device 2', lat: 48.8566, lon: 2.3522 },
  // Add more devices
];

const DeviceTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Device Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => (
          <tr key={device.id}>
            <td>{device.name}</td>
            <td>{device.lat}</td>
            <td>{device.lon}</td>
            <td>
              <Link to={`/locator/${device.id}`}>Locate</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeviceTable;

