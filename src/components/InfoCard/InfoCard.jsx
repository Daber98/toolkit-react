// src/components/InfoCard/InfoCard.jsx
import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, content }) => (
  <div className="info-card">
    <h2 className="info-card-title">{title}</h2>
    <p className="info-card-content">{content}</p>
  </div>
);

export default InfoCard;
