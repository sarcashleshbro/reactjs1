import React from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './DeviceDetail.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Example devices with 60 sets of values
const devices = [
  {
    id: 1,
    name: 'Device 1',
    lat: 37.7749,
    lon: -122.4194,
    data: {
      temperature: [30.87, 30.87, 32.08, 32.08, 33.05, 33.05, 33.6, 33.6, 33.98, 33.98, 34.24, 34.24, 34.24, 34.44, 34.44, 34.59, 34.59, 34.72, 34.72, 34.82, 34.82, 34.91, 34.91, 34.91, 34.99, 34.99, 35.06, 35.06, 35.12, 35.12, 35.19, 35.19, 35.23, 35.23, 35.23, 35.3, 35.3, 35.33, 35.33, 35.37, 35.37, 35.41, 35.41, 35.45, 35.45, 35.48, 35.48, 35.48, 35.51, 35.51, 35.53, 35.53, 35.56, 35.56, 35.6, 35.6, 35.63, 35.63],
      humidity: [54.141, 54.141, 54.493, 54.493, 54.708, 54.708, 54.882, 54.882, 54.897, 54.897, 54.824, 54.824, 54.676, 54.676, 54.676, 54.477, 54.477, 54.25, 54.25, 53.995, 53.995, 53.711, 53.711, 53.449, 53.449, 53.449, 53.137, 53.137, 52.837, 52.837, 52.578, 52.578, 52.295, 52.295, 51.976, 51.976, 51.976, 51.74, 51.74, 51.486, 51.486, 51.205, 51.205, 50.934, 50.934, 50.718, 50.718, 50.473, 50.473, 50.473, 50.239, 50.239, 50.002, 50.002, 49.805, 49.805, 49.597, 49.597, 49.382, 49.382],
      pressure: [95.021, 95.021, 95.019, 95.019, 95.005, 95.005, 95.011, 95.011, 95.017, 95.017, 95.017, 95.017, 95.015, 95.015, 95.015, 95.019, 95.019, 95.017, 95.017, 95.017, 95.017, 95.019, 95.019, 95.015, 95.015, 95.015, 95.021, 95.021, 95.021, 95.021, 95.017, 95.017, 95.023, 95.023, 95.019, 95.019, 95.019, 95.025, 95.025, 95.019, 95.019, 95.019, 95.019, 95.021, 95.021, 95.023, 95.023, 95.021, 95.021, 95.021, 95.025, 95.025, 95.021, 95.021, 95.019, 95.019, 95.025, 95.025, 95.023, 95.023],
      gas: [36094, 36094, 35162, 35162, 43626, 43626, 50009, 50009, 55248, 55248, 60345, 60345, 64894, 64894, 64894, 69035, 69035, 73039, 73039, 76760, 76760, 80342, 80342, 83855, 83855, 83855, 87508, 87508, 91196, 91196, 94464, 94464, 96154, 96154, 100506, 100506, 100506, 102896, 102896, 105469, 105469, 108451, 108451, 113331, 113331, 116059, 116059, 118338, 118338, 118338, 120278, 120278, 123717, 123717, 126499, 126499, 130814, 130814, 131425, 131425]
    }
  },
  {
    id: 2,
    name: 'Device 2',
    lat: 34.0522,
    lon: -118.2437,
    data: {
      temperature: Array.from({ length: 60 }, () => Math.floor(Math.random() * 30 + 10)),
      humidity: Array.from({ length: 60 }, () => Math.floor(Math.random() * 50 + 30)),
      pressure: Array.from({ length: 60 }, () => Math.floor(Math.random() * 20 + 1000)),
      gas: Array.from({ length: 60 }, () => Math.random() * 0.5 + 0.1)
    }
  }
];

const DeviceDetail = () => {
  const { id } = useParams();
  const device = devices.find(dev => dev.id === parseInt(id));

  if (!device) return <p>Device not found</p>;

  const createChartData = (label, data, color) => ({
    labels: Array.from({ length: 60 }, (_, i) => `Time ${i + 1}`),
    datasets: [
      {
        label: label,
        data: data,
        borderColor: color,
        fill: false,
      }
    ]
  });

  const temperatureData = createChartData('Temperature (°C)', device.data.temperature, 'rgba(75,192,192,1)');
  const humidityData = createChartData('Humidity (%)', device.data.humidity, 'rgba(153,102,255,1)');
  const pressureData = createChartData('Pressure (hPa)', device.data.pressure, 'rgba(255,159,64,1)');
  const gasData = createChartData('Gas (ppm)', device.data.gas, 'rgba(255,99,132,1)');

  return (
    <div className="device-detail">
      <h1>{device.name} Details</h1>
      <div className="charts-grid">
        <div className="chart-container"><Line data={temperatureData} /></div>
        <div className="chart-container"><Line data={humidityData} /></div>
        <div className="chart-container"><Line data={pressureData} /></div>
        <div className="chart-container"><Line data={gasData} /></div>
      </div>
    </div>
  );
};

export default DeviceDetail;







