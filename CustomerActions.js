// src/components/CustomerActions.js
import React from 'react';
import Navbar from './Navbar';
import './ClientL.css';
import { useNavigate } from 'react-router-dom';

const CustomerActions = () => {
  const navigate = useNavigate();

  const handleClientLogin = () => {
    navigate('/ClientLogin');
  };

  const handleClientSignup = () => {
    navigate('/ClientSignup');
  };

  return (
    <div className="cusacc-container">
      <Navbar />
      <h2>Customer Actions</h2>    
      <div className="buttons-container">
        <button onClick={handleClientLogin}>Customer Login</button>
        <button onClick={handleClientSignup}>Customer Signup</button>
      </div>
    </div>
  );
};

export default CustomerActions;
