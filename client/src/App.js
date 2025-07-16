// src/App.js
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // Your existing Navbar (not modified)
import Footer from './components/Footer'; // Your existing Footer
import DashboardPage from './pages/DashboardPage'; // Import the DashboardPage
import './index.css'; // Import global styles including custom CSS


// --- Main App Component ---
function App() {
    // State to manage the current page, defaulting to 'home'
    const [currentPage, setCurrentPage] = useState('home');
    // State to manage the visibility of the mobile navigation menu
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to handle navigation to different pages (landing or dashboard)
    const navigateTo = (page) => {
        setCurrentPage(page);
        setIsNavOpen(false); // Close mobile nav on page change
    };

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

    // Render the appropriate content based on currentPage state
    const renderContent = () => {
        if (currentPage === 'dashboard') {
            // If on the dashboard page, render the DashboardPage component
            return <DashboardPage />;
        } else {
            // Otherwise, render the landing page structure
            return (
                <>
                    {/* Navbar component, passing navigation function and mobile menu state */}
                    {/* The Navbar component itself is not modified, it only receives props */}
                    <Navbar navigateTo={navigateTo} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

                    {/* Main content area where pages will be rendered */}
                    <main className="main-content">
                        {(() => {
                            switch (currentPage) {
                                case 'home':
                                    return <Home navigateTo={navigateTo} />; // Ensure navigateTo is passed to Home
                                case 'about':
                                    return <About />;
                                case 'how-we-work':
                                    return <HowWeWork navigateTo={navigateTo} />; // Pass navigateTo if HowWeWork uses it
                                case 'contact':
                                    return <Contact />;
                                default:
                                    return <Home navigateTo={navigateTo}/>; // Fallback to Home page
                            }
                        })()}
                    </main>

                    {/* Footer component */}
                    <Footer />
                </>
            );
        }
    };

    return (
        <div className="app-container"> {/* Custom class for overall app container */}
            {renderContent()}
        </div>
    );
}

export default App;
