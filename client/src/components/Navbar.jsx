// src/components/Navbar.jsx
import React from 'react';
// Font Awesome is loaded globally via index.html, so we can use its classes directly

const Navbar = ({ navigateTo, isNavOpen, setIsNavOpen }) => {
  return (
    <nav>
      {/* Logo and Company Name */}
      <div className="logo-container">
        <div className="logo-circle">
          <img src="https://placehold.co/30x30/FFFFFF/000000?text=Logo" alt="Safe Crowd Logo" className="logo" />
        </div>
        <h1 className="company-name">
          SAFE CROWD
          {/* Pseudo-element handled by custom CSS in index.css */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
        </h1>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className={`hamburger ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation links - Changed <a> to <button> for internal navigation */}
      <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <button onClick={() => navigateTo('home')} className="nav-button group">
          <i className="fas fa-home nav-icon"></i> HOME
          {/* Pseudo-element handled by custom CSS in index.css */}
          <span></span>
        </button>
        <button onClick={() => navigateTo('about')} className="nav-button group">
          <i className="fas fa-users nav-icon"></i> ABOUT US
          {/* Pseudo-element handled by custom CSS in index.css */}
          <span></span>
        </button>
        <button onClick={() => navigateTo('how-we-work')} className="nav-button group">
          <i className="fas fa-cogs nav-icon"></i> HOW WE WORK
          {/* Pseudo-element handled by custom CSS in index.css */}
          <span></span>
        </button>
        <button onClick={() => navigateTo('contact')} className="nav-button group">
          <i className="fas fa-envelope nav-icon"></i> CONTACT US
          {/* Pseudo-element handled by custom CSS in index.css */}
          <span></span>
        </button>
      </div>

      {/* Get In Touch Button */}
      <button onClick={() => navigateTo('contact')} className="contact-btn group">
        <span className="btn-text">Get In Touch</span>
        <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>
        {/* Pseudo-element handled by custom CSS in index.css */}
        <span className="absolute-inset-0-opacity-0-group-hover-opacity-20"></span>
      </button>
    </nav>
  );
};

export default Navbar;
