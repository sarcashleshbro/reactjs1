import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './DeviceDetails.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

const DeviceDetail = ({ getDeviceById }) => {
  const { id } = useParams();
  const device = devices.find(dev => dev.id === parseInt(id));

  if (!device) {
    return <div className="error">Device not found</div>;
  }

  const createChartData = (label, data, color) => ({
    labels: Array.from({ length: 60 }, (_, i) => `Time ${i + 1}`),
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: color + '33',
        fill: true,
        tension: 0.4,
      }
    ]
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        }
      },
      tooltip: {
        enabled: true,
      }
    }
  };

  return (
    <div className="device-detail">
      <h1>{device.name}</h1>
      <div className="charts-grid">
        <div className="chart-container">
          <h2>Temperature</h2>
          <Line data={createChartData('Temperature', device.data.temperature, '#FF6384')} options={chartOptions} />
        </div>
        <div className="chart-container">
          <h2>Humidity</h2>
          <Line data={createChartData('Humidity', device.data.humidity, '#36A2EB')} options={chartOptions} />
        </div>
        <div className="chart-container">
          <h2>Pressure</h2>
          <Line data={createChartData('Pressure', device.data.pressure, '#FFCE56')} options={chartOptions} />
        </div>
        <div className="chart-container">
          <h2>Gas</h2>
          <Line data={createChartData('Gas', device.data.gas, '#4BC0C0')} options={chartOptions} />
        </div>
      </div>
      <Link to={`/locator/${device.id}`} className="locate-button">Locate Device</Link>
    </div>
  );
};

export default DeviceDetail;

