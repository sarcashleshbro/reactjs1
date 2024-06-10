import React from 'react';

const devices = [
  { id: 1, name: 'Device 1' },
  { id: 2, name: 'Device 2' },
  // Add more devices
];

const DeviceDropdown = ({ onChange }) => {
  return (
    <select onChange={e => onChange(e.target.value)}>
      {devices.map(device => (
        <option key={device.id} value={device.id}>
          {device.name}
        </option>
      ))}
    </select>
  );
};

export default DeviceDropdown;
