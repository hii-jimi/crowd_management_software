// src/components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="feature-card">
      <div className="icon-circle">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <button
        onClick={onClick}
        className="card-btn"
      >
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  );
};

export default FeatureCard;
