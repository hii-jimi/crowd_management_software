// src/components/WorkflowStep.jsx
import React from 'react';

const WorkflowStep = ({ stepNumber, title, description, isReversed = false, bgColorClass, delay }) => {
  return (
    <div
      className={`workflow-step ${isReversed ? 'reversed' : ''} ${bgColorClass}`}
      style={{ animationDelay: `${delay}s` }} // Apply animation delay dynamically
    >
      <div className="step-icon">
        {stepNumber}
      </div>
      <div className={`text-content ${isReversed ? 'text-right' : 'text-left'}`}>
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default WorkflowStep;
