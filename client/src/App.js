// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact'; // Correctly import Contact from pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardLayout from './pages/DashboardPage'; // Corrected import: aliasing default export to DashboardLayout
import ZoningPage from './pages/ZoningPage'; // Import the new ZoningPage
import './index.css'; // Import global styles

// --- Main App Component ---
function App() {
    // State to manage the visibility of the mobile navigation menu
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation(); // Hook to get current location

    // Determine if the current route is a dashboard or zoning route
    const isDashboardRoute = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/zoning');

    // Effect to handle scroll-based animations and progress bar for the entire app
    useEffect(() => {
        // Create and append the progress bar element
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '0%';
        progressBar.style.height = '5px';
        progressBar.style.backgroundColor = '#FF9898'; // Using a color from the original design
        progressBar.style.zIndex = '9999';
        progressBar.style.transition = 'width 0.25s ease-out';
        document.body.appendChild(progressBar);

        // Function to update the scroll progress bar
        const updateProgressBar = () => {
            const scrollTop = window.scrollY;
            // Calculate document height considering potential scrollable content
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = `${scrollPercent}%`;
        };

        // Add scroll event listener for the progress bar
        window.addEventListener('scroll', updateProgressBar);
        // Initial update in case the page is already scrolled on load
        updateProgressBar();

        // Clean up the event listener and remove the progress bar when the component unmounts
        return () => {
            window.removeEventListener('scroll', updateProgressBar);
            if (document.body.contains(progressBar)) {
                document.body.removeChild(progressBar);
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div className="app-container">
            {/* Conditionally render Navbar based on route */}
            {!isDashboardRoute && <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={
                        <section className="intro">
                            <h1>Welcome to Jana Suraksha</h1>
                            <p>Your ultimate solution for advanced crowd management and safety monitoring.</p>
                            <Link to="/dashboard" className="cta-button">
                                Go to Dashboard
                                <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <div className="features-grid">
                                <div className="feature-card animate-fade-in-up">
                                    <div className="icon-circle">📊</div>
                                    <h3>Real-time Analytics</h3>
                                    <p>Monitor crowd density and movement with live data.</p>
                                </div>
                                <div className="feature-card animate-fade-in-up delay-200">
                                    <div className="icon-circle">🚨</div>
                                    <h3>Instant Alerts</h3>
                                    <p>Receive immediate notifications for critical situations.</p>
                                </div>
                                <div className="feature-card animate-fade-in-up delay-400">
                                    <div className="icon-circle">🗺️</div>
                                    <h3>Interactive Zoning</h3>
                                    <p>Define and manage specific zones for detailed monitoring.</p>
                                </div>
                            </div>
                        </section>
                    } />
                    {/* Dashboard and Zoning routes */}
                    <Route path="/dashboard/*" element={<DashboardLayout />} />
                    <Route path="/zoning" element={<ZoningPage />} />

                    {/* Other main application routes */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/how-we-work" element={<HowWeWork />} />
                    <Route path="/contact" element={<Contact />} /> {/* Correctly renders the Contact page */}
                </Routes>
            </main>
            {/* Conditionally render Footer based on route */}
            {!isDashboardRoute && <Footer />}
        </div>
    );
}

// Wrap App with Router
function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
