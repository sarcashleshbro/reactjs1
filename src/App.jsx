import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const Locator = React.lazy(() => import('./pages/Locator'));
import DeviceDetail from './pages/DeviceDetails';

const devices = [
  { id: 1, name: 'Device 1', lat: 37.7749, lon: -122.4194 },
  { id: 2, name: 'Device 2', lat: 34.0522, lon: -118.2437 },
];

const getDeviceById = (id) => devices.find(device => device.id === parseInt(id));

const PageTransition = ({ children }) => (
  <div className="page-transition">
    {children}
  </div>
);

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '1em', backgroundColor: '#2a2a2a', color: '#00ff00' }}>
    © 2024 IoT Device Dashboard. All rights reserved.
  </footer>
);

const ErrorPage = () => (
  <div style={{ textAlign: 'center', padding: '2em' }}>
    <h1 style={{ color: '#00ff00' }}>404: Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      <PageTransition>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/locator/:id" element={<Locator devices={devices} />} />
            <Route path="/device/:id" element={<DeviceDetail getDeviceById={getDeviceById} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default App;
