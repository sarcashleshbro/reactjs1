import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Locator from './pages/Locator';
import DeviceDetail from './pages/DeviceDetail';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locator/:id" element={<Locator />} />
          <Route path="/device/:id" element={<DeviceDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
