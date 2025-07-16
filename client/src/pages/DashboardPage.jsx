// src/pages/DashboardPage.jsx
// This file consolidates all dashboard-related components into one page, using plain CSS classes.
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// --- Internal Dashboard Components ---

// Sidebar Component
const Sidebar = ({ onNavigateDashboardPage }) => {
    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    return (
        <aside className="dashboard-sidebar">
            {/* User Section */}
            <div className="sidebar-user-section">
                <div className="sidebar-user-icon-circle">
                    <UserIcon />
                </div>
                <span className="sidebar-user-name">John Doe</span>
            </div>

            {/* Navigation Sections */}
            <nav className="sidebar-nav">
                <Link to="/dashboard" className="sidebar-nav-item"> {/* Changed from <a> to <Link> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6-11v4a1 1 0 01-1 1H9a1 1 0 01-1-1v-4m-6 0h16a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1v-6a1 1 0 011-1z" />
                    </svg>
                    Dashboard
                </Link>
                <Link to="/zoning" className="sidebar-nav-item"> {/* Changed from <a> to <Link> and updated href */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Zoning Page
                </Link>
                {/* Other navigation items remain unchanged or remove if no longer needed */}
                <a href="#" onClick={() => alert('Section 3 clicked!')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 2v-6m2 10H7a2 0 01-2-2V5a2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 0 01-2 2z" />
                    </svg>
                    Section 3
                </a>
                <a href="#" onClick={() => alert('Section 4 clicked!')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Section 4
                </a>
                <a href="#" onClick={() => alert('Section 5 clicked!')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2m0-4h.01M12 15h.01" />
                    </svg>
                    Section 5
                </a>
                <a href="#" onClick={() => alert('Section 6 clicked!')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253" />
                    </svg>
                    Section 6
                </a>
            </nav>
        </aside>
    );
};

// Dashboard Home Page Component (remains the same)
const DashboardHomePage = () => {
    return (
        <div className="dashboard-content-area">
            <h2 className="dashboard-content-area h2">Dashboard Overview</h2>
            <div className="dashboard-card-grid">
                {/* Example Dashboard Cards */}
                <div className="dashboard-card" style={{ backgroundColor: '#3b82f6' }}> {/* bg-blue-500 */}
                    <h3>Total Alerts</h3>
                    <p>125</p>
                </div>
                <div className="dashboard-card" style={{ backgroundColor: '#22c55e' }}> {/* bg-green-500 */}
                    <h3>Active Zones</h3>
                    <p>15</p>
                </div>
                <div className="dashboard-card" style={{ backgroundColor: '#f59e0b' }}> {/* bg-yellow-500 */}
                    <h3>Users Online</h3>
                    <p>34</p>
                </div>
                <div className="dashboard-card" style={{ backgroundColor: '#8b5cf6' }}> {/* bg-purple-500 */}
                    <h3>Recent Incidents</h3>
                    <p>03</p>
                </div>
            </div>
            <div className="quick-insights">
                <h3>Quick Insights</h3>
                <p>
                    This section will display key performance indicators and summaries related to crowd management,
                    such as real-time crowd density, incident trends, and resource allocation status.
                </p>
            </div>
        </div>
    );
};

// Dashboard Layout Component
const DashboardLayout = () => {
    // Note: currentDashboardPage state is now less relevant as navigation is via routes
    // We keep it if there were other internal dashboard views not exposed as routes.
    const [currentDashboardPage, setCurrentDashboardPage] = useState('dashboard-home'); // Initial state, but actual page is driven by route

    // Render the appropriate dashboard content based on currentDashboardPage
    const renderDashboardContent = () => {
        // Since dashboard now hosts just dashboard home, we directly render it.
        // Other sections like 'zoning' are now separate routes.
        return <DashboardHomePage />;
    };

    return (
        <div className="dashboard-page-container">
            {/* Navbar for the Dashboard */}
            <nav className="dashboard-navbar">
                {/* Logo Placeholder */}
                <div className="dashboard-logo-group">
                    <div className="dashboard-logo-circle">
                        LS
                    </div>
                    <span className="dashboard-company-name-text">Logo Here</span>
                </div>

                {/* JANA SURAKSHA Text */}
                <div className="dashboard-title-text">
                    JANA SURAKSHA
                </div>
            </nav>

            {/* Main Content Area (Sidebar + Dashboard Content) */}
            <div className="dashboard-main-area">
                {/* Sidebar now uses <Link> to navigate */}
                <Sidebar />
                {renderDashboardContent()} {/* This will always render DashboardHomePage now */}
            </div>
        </div>
    );
};

// Export the DashboardLayout as the default export for DashboardPage.jsx
export default DashboardLayout;
