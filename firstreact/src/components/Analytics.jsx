import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const devices = [
  { id: 1, name: 'Device 1' },
  { id: 2, name: 'Device 2' },
  // Add more devices
];

const generateRandomData = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    name: `Point ${index + 1}`,
    temperature: Math.floor(Math.random() * 100),
    humidity: Math.floor(Math.random() * 100),
    pressure: Math.floor(Math.random() * 100),
    gas: Math.floor(Math.random() * 100),
  }));
};

const Analytics = () => {
  const [selectedDevice, setSelectedDevice] = useState(devices[0].id);
  const [data, setData] = useState(generateRandomData());

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
    setData(generateRandomData());
  };

  return (
    <div>
      <select onChange={handleDeviceChange} value={selectedDevice}>
        {devices.map(device => (
          <option key={device.id} value={device.id}>{device.name}</option>
        ))}
      </select>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        <Line type="monotone" dataKey="pressure" stroke="#ffc658" />
        <Line type="monotone" dataKey="gas" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default Analytics;
