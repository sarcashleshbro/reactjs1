import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Locator.css';

const devices = [
  { id: 1, name: 'Device 1', lat: 37.7749, lon: -122.4194 },
  { id: 2, name: 'Device 2', lat: 34.0522, lon: -118.2437 },
  // Add more devices here
];

const Locator = () => {
  const { id } = useParams();
  const device = devices.find(dev => dev.id === parseInt(id));

  return (
    <div className="locator">
      <h1>Locator Page</h1>
      {device && (
        <MapContainer center={[device.lat, device.lon]} zoom={13} className="leaflet-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[device.lat, device.lon]}>
            <Popup>
              {device.name} <br /> Lat: {device.lat}, Lon: {device.lon}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Locator;



