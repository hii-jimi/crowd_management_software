// src/pages/DashboardPage.jsx
// This file consolidates all dashboard-related components into one page, using plain CSS classes.
import React, { useState, useEffect, useRef } from 'react';

// IMPORTANT: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API Key
// You can get one from Google Cloud Console: https://console.cloud.google.com/apis/credentials
const GOOGLE_MAPS_API_KEY = '';

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
                <a href="#" onClick={() => onNavigateDashboardPage('dashboard-home')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6-11v4a1 1 0 01-1 1H9a1 1 0 01-1-1v-4m-6 0h16a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1v-6a1 1 0 011-1z" />
                    </svg>
                    Dashboard
                </a>
                <a href="#" onClick={() => onNavigateDashboardPage('zoning')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Zoning Page
                </a>
                <a href="#" onClick={() => onNavigateDashboardPage('section3')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 2v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Section 3
                </a>
                <a href="#" onClick={() => onNavigateDashboardPage('section4')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Section 4
                </a>
                <a href="#" onClick={() => onNavigateDashboardPage('section5')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2m0-4h.01M12 15h.01" />
                    </svg>
                    Section 5
                </a>
                <a href="#" onClick={() => onNavigateDashboardPage('section6')} className="sidebar-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253" />
                    </svg>
                    Section 6
                </a>
            </nav>
        </aside>
    );
};

// Dashboard Home Page Component
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

// Map Drawing Component
const MapDrawingComponent = ({ onSaveMapData, onCloseMap }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [drawingManager, setDrawingManager] = useState(null);
    const [drawnShapeData, setDrawnShapeData] = useState(null);
    const [infoMessage, setInfoMessage] = useState("Draw a polygon or rectangle on the map.");

    useEffect(() => {
        // Load Google Maps API script
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=drawing&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = () => {
                initializeMap();
            };
            document.head.appendChild(script);
        } else {
            initializeMap();
        }

        return () => {
            // Clean up map and drawing manager when component unmounts
            if (drawingManager) {
                drawingManager.setMap(null);
            }
            if (map) {
                // No direct map.destroy() method, but setting map to null helps GC
                setMap(null);
            }
            // Remove the global initMap callback if it was added
            if (window.initMap) {
                delete window.initMap;
            }
        };
    }, []);

    const initializeMap = () => {
        if (mapRef.current && !map) {
            const googleMap = new window.google.maps.Map(mapRef.current, {
                center: { lat: 22.5726, lng: 88.3639 }, // Centered around Kolkata, India
                zoom: 12,
                mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            });
            setMap(googleMap);

            const drawingManagerInstance = new window.google.maps.drawing.DrawingManager({
                drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
                drawingControl: true,
                drawingControlOptions: {
                    position: window.google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [
                        window.google.maps.drawing.OverlayType.POLYGON,
                        window.google.maps.drawing.OverlayType.RECTANGLE,
                    ],
                },
                polygonOptions: {
                    fillColor: '#FFCCBC', // Light red/pink
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    strokeColor: '#FF6F61', // Red
                    clickable: true,
                    editable: true,
                    zIndex: 1,
                },
                rectangleOptions: {
                    fillColor: '#FFCCBC',
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    strokeColor: '#FF6F61',
                    clickable: true,
                    editable: true,
                    zIndex: 1,
                },
            });
            drawingManagerInstance.setMap(googleMap);
            setDrawingManager(drawingManagerInstance);

            window.google.maps.event.addListener(drawingManagerInstance, 'overlaycomplete', (event) => {
                // Clear previous shapes if any
                if (drawnShapeData && drawnShapeData.overlay) {
                    drawnShapeData.overlay.setMap(null);
                }

                const newShape = event.overlay;
                let coordinates = [];

                if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {
                    coordinates = newShape.getPath().getArray().map(latLng => ({
                        lat: latLng.lat(),
                        lng: latLng.lng()
                    }));
                } else if (event.type === window.google.maps.drawing.OverlayType.RECTANGLE) {
                    const bounds = newShape.getBounds();
                    const ne = bounds.getNorthEast();
                    const sw = bounds.getSouthWest();
                    coordinates = [
                        { lat: ne.lat(), lng: sw.lng() }, // NW
                        { lat: ne.lat(), lng: ne.lng() }, // NE
                        { lat: sw.lat(), lng: ne.lng() }, // SE
                        { lat: sw.lat(), lng: sw.lng() }, // SW
                        { lat: ne.lat(), lng: sw.lng() }  // Close the polygon
                    ];
                }

                setDrawnShapeData({
                    type: event.type,
                    coordinates: coordinates,
                    overlay: newShape
                });
                setInfoMessage("Shape drawn! Click 'Save Map Area' or draw another.");

                // Make the drawing tool active again after a shape is drawn
                drawingManagerInstance.setDrawingMode(null); // Reset drawing mode
            });
        }
    };

    const handleSaveMapArea = () => {
        if (drawnShapeData) {
            onSaveMapData(drawnShapeData); // Pass the data up to ZoningPage
            setInfoMessage("Map area saved!");
            // Optionally clear the drawn shape after saving
            if (drawnShapeData.overlay) {
                drawnShapeData.overlay.setMap(null);
            }
            setDrawnShapeData(null);
        } else {
            setInfoMessage("Please draw an area on the map first.");
        }
    };

    return (
        <div className="map-drawing-container">
            <h3 className="map-drawing-container h3">Draw Zoning Area on Map</h3>
            <p className="map-drawing-container p">{infoMessage}</p>
            <div ref={mapRef} className="map-container"></div>
            <div className="map-actions">
                <button onClick={handleSaveMapArea} className="add-zone-button">
                    Save Map Area
                </button>
                <button onClick={onCloseMap} className="add-zone-button" style={{backgroundColor: '#ef4444'}}> {/* Red color for close */}
                    Close Map
                </button>
            </div>
            {drawnShapeData && (
                <div className="drawn-shape-info">
                    <h4>Drawn Shape Details:</h4>
                    <pre>{JSON.stringify(drawnShapeData.coordinates, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};


// Zoning Page Component (uses local state)
const ZoningPage = () => {
    const [zones, setZones] = useState([]);
    const [newZoneName, setNewZoneName] = useState('');
    const [newZoneDescription, setNewZoneDescription] = useState('');
    const [editZoneId, setEditZoneId] = useState(null);
    const [editZoneName, setEditZoneName] = useState('');
    const [editZoneDescription, setNewZoneDescriptionEdit] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const [confirmAction, setConfirmAction] = useState(null);
    const [showMapDrawing, setShowMapDrawing] = useState(false); // New state for map visibility
    const [mapZoneData, setMapZoneData] = useState(null); // To store map data temporarily

    const showModalMessage = (message, type, action = null) => {
        setModalMessage(message);
        setModalType(type);
        setConfirmAction(() => action);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
        setModalType('');
        setConfirmAction(null);
    };

    const handleConfirm = () => {
        if (confirmAction) {
            confirmAction();
        }
        closeModal();
    };

    const addZone = () => {
        if (!newZoneName.trim()) {
            showModalMessage("Zone name cannot be empty.", 'error');
            return;
        }

        const newZone = {
            id: crypto.randomUUID(),
            name: newZoneName,
            description: newZoneDescription,
            createdAt: new Date().toISOString(),
            deleted: false,
            mapData: mapZoneData // Include map data if available
        };

        setZones(prevZones => [...prevZones, newZone]);
        setNewZoneName('');
        setNewZoneDescription('');
        setMapZoneData(null); // Clear map data after adding zone
        showModalMessage("Zone added successfully!", 'info');
    };

    const startEditZone = (zone) => {
        setEditZoneId(zone.id);
        setEditZoneName(zone.name);
        setNewZoneDescriptionEdit(zone.description);
    };

    const updateZone = (id) => {
        if (!editZoneName.trim()) {
            showModalMessage("Zone name cannot be empty.", 'error');
            return;
        }

        setZones(prevZones => prevZones.map(zone =>
            zone.id === id
                ? { ...zone, name: editZoneName, description: editZoneDescription, updatedAt: new Date().toISOString() }
                : zone
        ));
        setEditZoneId(null);
        setEditZoneName('');
        setNewZoneDescriptionEdit('');
        showModalMessage("Zone updated successfully!", 'info');
    };

    const deleteZone = (id) => {
        showModalMessage("Are you sure you want to delete this zone? (This will mark it as deleted, not permanently remove)", 'confirm', () => {
            setZones(prevZones => prevZones.map(zone =>
                zone.id === id
                    ? { ...zone, deleted: true, deletedAt: new Date().toISOString() }
                    : zone
            ));
            showModalMessage("Zone marked as deleted successfully!", 'info');
        });
    };

    const handleSaveMapData = (data) => {
        setMapZoneData(data); // Store the drawn map data
        showModalMessage("Map area captured! You can now add the zone.", 'info');
        setShowMapDrawing(false); // Close map drawing interface
    };

    // Modal Component (using custom CSS classes)
    const Modal = ({ show, message, type, onClose, onConfirm }) => {
        if (!show) return null;

        let headerClass = 'custom-modal-header ';
        if (type === 'error') {
            headerClass += 'error';
        } else if (type === 'confirm') {
            headerClass += 'confirm';
        } else {
            headerClass += 'info';
        }

        return (
            <div className="custom-modal-overlay">
                <div className="custom-modal-content">
                    <div className={headerClass}>
                        {type === 'error' ? 'Error' : type === 'confirm' ? 'Confirm Action' : 'Info'}
                    </div>
                    <div className="custom-modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="custom-modal-footer">
                        {type === 'confirm' && (
                            <button
                                onClick={onConfirm}
                                className="custom-modal-button confirm"
                            >
                                Confirm
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="custom-modal-button close"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="zoning-section">
            <h2 className="zoning-section h2">Zoning Page</h2>
            <p className="zoning-section p">
                Define and manage the geographical zones for your crowd management project.
            </p>

            {/* Add New Zone Form */}
            <div className="add-zone-form-container">
                <h3>Add New Zone</h3>
                <div className="zone-input-grid">
                    <input
                        type="text"
                        placeholder="Zone Name"
                        value={newZoneName}
                        onChange={(e) => setNewZoneName(e.target.value)}
                    />
                    <textarea
                        placeholder="Zone Description (optional)"
                        value={newZoneDescription}
                        onChange={(e) => setNewZoneDescription(e.target.value)}
                        rows="3"
                    ></textarea>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <button
                        onClick={addZone}
                        className="add-zone-button"
                    >
                        Add Zone
                    </button>
                    <button
                        onClick={() => setShowMapDrawing(true)}
                        className="add-zone-button"
                        style={{ backgroundColor: '#4CAF50' }} // Green color for Add to Map
                    >
                        Add to Map
                    </button>
                </div>
                {mapZoneData && (
                    <div className="drawn-shape-info" style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#e6ffe6', borderRadius: '0.5rem', border: '1px solid #a3e6a3' }}>
                        <h4>Map Area Attached:</h4>
                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontSize: '0.8rem' }}>
                            {JSON.stringify(mapZoneData.coordinates.slice(0, 2), null, 2)}...
                        </pre>
                        <p style={{ fontSize: '0.8rem', color: '#555' }}>({mapZoneData.coordinates.length} coordinates)</p>
                    </div>
                )}
            </div>

            {/* Map Drawing Interface */}
            {showMapDrawing && (
                <MapDrawingComponent
                    onSaveMapData={handleSaveMapData}
                    onCloseMap={() => setShowMapDrawing(false)}
                />
            )}

            {/* Existing Zones List */}
            <div className="existing-zones-container">
                <h3>Existing Zones</h3>
                {zones.filter(zone => !zone.deleted).length === 0 ? (
                    <p className="zoning-section p">No zones defined yet. Add a new zone above!</p>
                ) : (
                    <ul className="zone-list">
                        {zones.filter(zone => !zone.deleted).map((zone) => (
                            <li key={zone.id} className="zone-item">
                                {editZoneId === zone.id ? (
                                    <div className="edit-zone-form">
                                        <input
                                            type="text"
                                            value={editZoneName}
                                            onChange={(e) => setEditZoneName(e.target.value)}
                                        />
                                        <textarea
                                            value={editZoneDescription}
                                            onChange={(e) => setNewZoneDescriptionEdit(e.target.value)}
                                            rows="2"
                                        ></textarea>
                                        <div className="edit-zone-form-buttons">
                                            <button
                                                onClick={() => updateZone(zone.id)}
                                                className="save-button"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditZoneId(null)}
                                                className="cancel-button"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="zone-item-content">
                                            <h4>{zone.name}</h4>
                                            {zone.description && <p>{zone.description}</p>}
                                            {zone.mapData && (
                                                <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
                                                    Map Data Attached: {zone.mapData.type} ({zone.mapData.coordinates.length} points)
                                                </p>
                                            )}
                                        </div>
                                        <div className="zone-actions">
                                            <button
                                                onClick={() => startEditZone(zone)}
                                                className="zone-action-button edit"
                                                title="Edit Zone"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="zone-action-button svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => deleteZone(zone.id)}
                                                className="zone-action-button delete"
                                                title="Delete Zone"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="zone-action-button svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Modal show={showModal} message={modalMessage} type={modalType} onClose={closeModal} onConfirm={handleConfirm} />
        </div>
    );
};

// Dashboard Layout Component
const DashboardLayout = () => {
    // Internal state to manage which dashboard page is currently active
    const [currentDashboardPage, setCurrentDashboardPage] = useState('dashboard-home');

    const navigateToDashboardPage = (page) => {
        setCurrentDashboardPage(page);
    };

    // Render the appropriate dashboard content based on currentDashboardPage
    const renderDashboardContent = () => {
        switch (currentDashboardPage) {
            case 'dashboard-home':
                return <DashboardHomePage />;
            case 'zoning':
                return <ZoningPage />;
            case 'section3':
                return <div className="dashboard-content-area"><h2 className="dashboard-content-area h2">Section 3 Content</h2><p>Content for Section 3 goes here.</p></div>;
            case 'section4':
                return <div className="dashboard-content-area"><h2 className="dashboard-content-area h2">Section 4 Content</h2><p>Content for Section 4 goes here.</p></div>;
            case 'section5':
                return <div className="dashboard-content-area"><h2 className="dashboard-content-area h2">Section 5 Content</h2><p>Content for Section 5 goes here.</p></div>;
            case 'section6':
                return <div className="dashboard-content-area"><h2 className="dashboard-content-area h2">Section 6 Content</h2><p>Content for Section 6 goes here.</p></div>;
            default:
                return <DashboardHomePage />;
        }
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
                <Sidebar onNavigateDashboardPage={navigateToDashboardPage} />
                {renderDashboardContent()}
            </div>
        </div>
    );
};

// Export the DashboardLayout as the default export for DashboardPage.jsx
export default DashboardLayout;
