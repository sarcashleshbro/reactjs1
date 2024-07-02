import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './Locator.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Locator = ({ devices }) => {
  const { id } = useParams();
  const device = devices && devices.find(dev => dev.id === parseInt(id));

  if (!device) {
    return (
      <div className="locator">
        <h1>Locator Page</h1>
        <p>Device not found</p>
      </div>
    );
  }

  return (
    <div className="locator">
      <h1>Locator Page</h1>
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
    </div>
  );
};

export default Locator;