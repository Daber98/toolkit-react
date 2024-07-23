// src/components/Button/Button.js
import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
