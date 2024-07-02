import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Here you would typically handle the logout process
    // For example, clearing local storage, cookies, or calling a logout API
    console.log('Logging out...');

    // Simulate a logout process
    const logoutTimer = setTimeout(() => {
      // Redirect to home page after logout
      navigate('/');
    }, 2000);

    return () => clearTimeout(logoutTimer);
  }, [navigate]);

  return (
    <div className="logout">
      <h1>Logging Out</h1>
      <p>Please wait while we log you out...</p>
      <div className="logout-spinner"></div>
    </div>
  );
};

export default Logout;