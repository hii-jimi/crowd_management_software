// src/components/MessageDisplay.jsx
import React from 'react';

const MessageDisplay = ({ message, type, isVisible }) => {
  if (!isVisible) {
    return null; // Don't render if not visible
  }

  // Determine the CSS class based on the message type
  const typeClass = type === 'success' ? 'success' : 'error';

  return (
    <div className={`message-display ${typeClass}`}>
      {message}
    </div>
  );
};

export default MessageDisplay;
