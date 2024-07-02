import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from '../assets/background.jpg'; // Import the image

const devices = [
  { id: 1, name: 'Device 1', lat: '37.7749', lon: '-122.4194' },
  { id: 2, name: 'Device 2', lat: '34.0522', lon: '-118.2437' },
  // Add more devices here if needed
];

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage:  `url(${backgroundImage})` }}>
      <div className="animated-text">
        <span>Welcome to the</span>
        <span className="highlight">IoT Device</span>
        <span>Dashboard</span>
      </div>
      <table className="devices-table">
        <thead>
          <tr>
            <th>Device</th>
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
              <td className="action-links">
                <Link to={`/locator/${device.id}`}>Locate</Link>
                <Link to={`/device/${device.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
