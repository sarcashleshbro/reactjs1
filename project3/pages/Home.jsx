import React from 'react';
import { Link } from 'react-router-dom';

const devices = [
  { id: 1, name: 'Device 1', lat: '37.7749', lon: '-122.4194' },
  { id: 2, name: 'Device 2', lat: '34.0522', lon: '-118.2437' },
  // Add more devices here
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the IoT Device Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Action</th>
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
    </div>
  );
};

export default Home;
