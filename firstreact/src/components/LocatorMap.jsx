import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

const devices = [
  { id: 1, name: 'Device 1', lat: 51.505, lon: -0.09, lastActive: '2024-06-06T12:00:00Z' },
  { id: 2, name: 'Device 2', lat: 48.8566, lon: 2.3522, lastActive: '2024-06-06T12:00:00Z' },
  // Add more devices
];

const LocatorMap = () => {
  const { deviceId } = useParams();
  const selectedDevice = devices.find(device => device.id.toString() === deviceId);

  return (
    <MapContainer center={[selectedDevice ? selectedDevice.lat : 51.505, selectedDevice ? selectedDevice.lon : -0.09]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {devices.map(device => (
        <Marker key={device.id} position={[device.lat, device.lon]}>
          <Popup>
            {device.name} <br /> {device.lat}, {device.lon} <br /> Last Active: {device.lastActive} <br />
            <Link to={`/analytics?device=${device.id}`}>View Analytics</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LocatorMap;

