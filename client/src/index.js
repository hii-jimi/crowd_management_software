// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App'; // <--- CHANGE THIS LINE: Import AppWrapper instead of App
import './index.css'; // Import global styles including Tailwind and custom CSS

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main AppWrapper component into the root
root.render(
  <React.StrictMode>
    <AppWrapper /> {/* <--- CHANGE THIS LINE: Render AppWrapper instead of App */}
  </React.StrictMode>
);
