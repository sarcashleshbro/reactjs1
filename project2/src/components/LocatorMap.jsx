// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import LocatorMap from './components/LocatorMap';  // Ensure correct path and file name
import Analytics from './components/Analytics';    // Ensure correct path and file name
import './styles/App.css';  // Ensure correct path to App.css

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locator/:deviceId" element={<LocatorMap />} />  {/* Ensure correct route path */}
        <Route path="/analytics/:deviceId" element={<Analytics />} />  {/* Ensure correct route path */}
      </Routes>
    </Router>
  );
};

export default App;




