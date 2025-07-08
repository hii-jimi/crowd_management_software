// client/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Error fetching data from backend.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Frontend</h1>
        <p>Message from Backend: {message}</p>
      </header>
    </div>
  );
}

export default App;
