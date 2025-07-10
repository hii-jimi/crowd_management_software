// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import global styles including Tailwind and custom CSS

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);