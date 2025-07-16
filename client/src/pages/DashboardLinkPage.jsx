// src/pages/DashboardLinkPage.jsx
import React from 'react';

const DashboardLinkPage = ({ navigateTo }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4 text-center bg-gray-50 rounded-lg shadow-lg m-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Access Your Project Dashboard</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Click the button below to proceed to the main dashboard where you can manage zones and view insights.
            </p>

            <button
                onClick={() => navigateTo('dashboard')}
                className="px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default DashboardLinkPage;
