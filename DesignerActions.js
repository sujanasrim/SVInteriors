// src/components/DesignerActions.js
import React from 'react';
import './ClientL.css';
import { useNavigate } from 'react-router-dom';

const DesignerActions = () => {
  const navigate = useNavigate();

  const handleDesignerLogin = () => {
    navigate('/DesignerLogin');
  };

  const handleDesignerSignup = () => {
    navigate('/DesignerSignup');
  };

  return (
    <div className="container">
      <h2>Designer Actions</h2>
      <div className="buttons-container">
        <button onClick={handleDesignerLogin}>Designer Login</button>
        <button onClick={handleDesignerSignup}>Designer Signup</button>
      </div>
    </div>
  );
};

export default DesignerActions;
