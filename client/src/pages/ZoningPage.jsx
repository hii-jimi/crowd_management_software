// src/pages/ZoningPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

// IMPORTANT: Replace 'YOUR_Maps_API_KEY' with your actual Google Maps API Key
// You can get one from Google Cloud Console: https://console.cloud.google.com/apis/credentials
const Maps_API_KEY = 'AIzaSyDyRkw5K8vDuZPv5QoEVjlA2RU6QHcE-8w'; // Ensure you've replaced this!

// --- Helper Components (Moved from DashboardPage.jsx to be self-contained in ZoningPage) ---

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

// Map Drawing Component
const MapDrawingComponent = ({ onSaveMapData, onCloseMap }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [drawingManager, setDrawingManager] = useState(null);
    const [drawnShapeData, setDrawnShapeData] = useState(null);
    const [infoMessage, setInfoMessage] = useState("Draw a polygon or rectangle on the map.");

    useEffect(() => {
        // Load Google Maps API script
        if (!window.google || !window.google.maps || !window.google.maps.drawing) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${Maps_API_KEY}&libraries=drawing&callback=initZoningMap`;
            script.async = true;
            script.defer = true;
            window.initZoningMap = () => { // Unique callback name
                initializeMap();
            };
            document.head.appendChild(script);
        } else {
            // If already loaded, just initialize
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
            if (window.initZoningMap) {
                delete window.initZoningMap;
            }
        };
    }, []);

    const initializeMap = () => {
        if (mapRef.current && (!map || !drawingManager)) { // Only initialize if map or drawingManager is not set
            const googleMap = new window.google.maps.Map(mapRef.current, {
                center: { lat: 22.5726, lng: 88.3639 }, // Centered around Kolkata, India
                zoom: 16, // Zoom in more for room-sized areas
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
                    fillColor: '#81C784', // Light green
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    strokeColor: '#388E3C', // Green
                    clickable: true,
                    editable: true,
                    zIndex: 1,
                },
                rectangleOptions: {
                    fillColor: '#81C784',
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    strokeColor: '#388E3C',
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
            <h3 className="map-drawing-container h3">Draw Area on Map (Room Size)</h3>
            <p className="map-drawing-container p">{infoMessage}</p>
            <div ref={mapRef} className="map-container"></div>
            <div className="map-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button onClick={handleSaveMapArea} className="add-zone-button">
                    Save Map Area
                </button>
                <button onClick={onCloseMap} className="add-zone-button" style={{ backgroundColor: '#ef4444' }}> {/* Red color for close */}
                    Close Map
                </button>
            </div>
            {drawnShapeData && (
                <div className="drawn-shape-info" style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#e6ffe6', borderRadius: '0.5rem', border: '1px solid #a3e6a3' }}>
                    <h4>Current Drawn Shape Details:</h4>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontSize: '0.8rem', maxHeight: '100px', overflowY: 'auto' }}>
                        {JSON.stringify(drawnShapeData.coordinates, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};


// --- Main Zoning Page Component ---
const ZoningPage = () => {
    // State for top-level zones
    const [zones, setZones] = useState([]);
    const [newZoneName, setNewZoneName] = useState('');
    const [newZoneDescription, setNewZoneDescription] = useState('');
    const [editZoneId, setEditZoneId] = useState(null);
    const [editZoneName, setEditZoneName] = useState('');
    const [editZoneDescription, setEditZoneDescription] = useState('');

    // State for sub-areas within a selected zone
    const [selectedZoneForSubAreas, setSelectedZoneForSubAreas] = useState(null); // The zone ID whose sub-areas are being managed
    const [newSubAreaName, setNewSubAreaName] = useState('');
    const [newSubAreaDescription, setNewSubAreaDescription] = useState('');
    const [subAreaMapData, setSubAreaMapData] = useState(null); // Map data for the sub-area being added
    const [showSubAreaMapDrawing, setShowSubAreaMapDrawing] = useState(false); // Controls visibility of map for sub-area

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const [confirmAction, setConfirmAction] = useState(null);

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

    // --- Top-Level Zone Management ---
    const addZone = () => {
        if (!newZoneName.trim()) {
            showModalMessage("Zone name cannot be empty.", 'error');
            return;
        }

        const newZone = {
            id: uuidv4(), // Unique ID for the zone
            name: newZoneName,
            description: newZoneDescription,
            createdAt: new Date().toISOString(),
            deleted: false,
            subAreas: [] // Initialize with empty array for sub-areas
        };

        setZones(prevZones => [...prevZones, newZone]);
        setNewZoneName('');
        setNewZoneDescription('');
        showModalMessage("Zone added successfully!", 'info');
    };

    const startEditZone = (zone) => {
        setEditZoneId(zone.id);
        setEditZoneName(zone.name);
        setEditZoneDescription(zone.description);
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
        setEditZoneDescription('');
        showModalMessage("Zone updated successfully!", 'info');
    };

    const deleteZone = (id) => {
        showModalMessage("Are you sure you want to delete this zone? (This will mark it as deleted, not permanently remove)", 'confirm', () => {
            setZones(prevZones => prevZones.map(zone =>
                zone.id === id
                    ? { ...zone, deleted: true, deletedAt: new Date().toISOString() }
                    : zone
            ));
            // If the deleted zone's sub-areas were open, close them
            if (selectedZoneForSubAreas === id) {
                setSelectedZoneForSubAreas(null);
            }
            showModalMessage("Zone marked as deleted successfully!", 'info');
        });
    };

    // --- Sub-Area Management ---
    const handleAddSubAreaMapData = (data) => {
        setSubAreaMapData(data); // Store the drawn map data for the sub-area
        showModalMessage("Map area captured for sub-area! You can now add the sub-area.", 'info');
        setShowSubAreaMapDrawing(false); // Close map drawing interface
    };

    const addSubArea = (zoneId) => {
        if (!newSubAreaName.trim()) {
            showModalMessage("Sub-Area name cannot be empty.", 'error');
            return;
        }
        if (!subAreaMapData) {
            showModalMessage("Please draw a map area for the sub-area before adding.", 'error');
            return;
        }

        const newSubArea = {
            id: uuidv4(), // Unique ID for the sub-area
            name: newSubAreaName,
            description: newSubAreaDescription,
            mapData: subAreaMapData, // Map data is required for sub-areas
            createdAt: new Date().toISOString(),
            deleted: false
        };

        setZones(prevZones => prevZones.map(zone =>
            zone.id === zoneId
                ? { ...zone, subAreas: [...zone.subAreas, newSubArea] }
                : zone
        ));

        setNewSubAreaName('');
        setNewSubAreaDescription('');
        setSubAreaMapData(null); // Clear map data after adding sub-area
        showModalMessage("Sub-Area added successfully!", 'info');
    };

    const startEditSubArea = (zoneId, subArea) => {
        setZones(prevZones => prevZones.map(zone =>
            zone.id === zoneId
                ? {
                    ...zone,
                    subAreas: zone.subAreas.map(sa =>
                        sa.id === subArea.id ? { ...sa, isEditing: true, editName: sa.name, editDescription: sa.description } : sa
                    )
                }
                : zone
        ));
    };

    const updateSubArea = (zoneId, subAreaId) => {
        setZones(prevZones => prevZones.map(zone =>
            zone.id === zoneId
                ? {
                    ...zone,
                    subAreas: zone.subAreas.map(sa =>
                        sa.id === subAreaId
                            ? { ...sa, name: sa.editName, description: sa.editDescription, isEditing: false, updatedAt: new Date().toISOString() }
                            : sa
                    )
                }
                : zone
        ));
        showModalMessage("Sub-Area updated successfully!", 'info');
    };

    const cancelEditSubArea = (zoneId, subAreaId) => {
        setZones(prevZones => prevZones.map(zone =>
            zone.id === zoneId
                ? {
                    ...zone,
                    subAreas: zone.subAreas.map(sa =>
                        sa.id === subAreaId ? { ...sa, isEditing: false } : sa
                    )
                }
                : zone
        ));
    };

    const deleteSubArea = (zoneId, subAreaId) => {
        showModalMessage("Are you sure you want to delete this sub-area? (This will mark it as deleted, not permanently remove)", 'confirm', () => {
            setZones(prevZones => prevZones.map(zone =>
                zone.id === zoneId
                    ? {
                        ...zone,
                        subAreas: zone.subAreas.map(sa =>
                            sa.id === subAreaId ? { ...sa, deleted: true, deletedAt: new Date().toISOString() } : sa
                        )
                    }
                    : zone
            ));
            showModalMessage("Sub-Area marked as deleted successfully!", 'info');
        });
    };

    return (
        <div className="zoning-section">
            <h2 className="zoning-section h2">Zone Management</h2>
            <p className="zoning-section p">
                Define and manage top-level geographical zones, and then subdivide them into smaller, room-sized areas with specific map boundaries.
            </p>

            {/* Add New Top-Level Zone Form */}
            <div className="add-zone-form-container">
                <h3>Add New Zone</h3>
                <div className="zone-input-grid">
                    <input
                        type="text"
                        placeholder="Zone Name (e.g., Main Hall, East Wing)"
                        value={newZoneName}
                        onChange={(e) => setNewZoneName(e.target.value)}
                    />
                    <textarea
                        placeholder="Zone Description (optional)"
                        value={newZoneDescription}
                        onChange={(e) => setNewZoneDescription(e.target.value)}
                        rows="2"
                    ></textarea>
                </div>
                <button
                    onClick={addZone}
                    className="add-zone-button"
                >
                    Add Zone
                </button>
            </div>

            {/* Existing Zones List */}
            <div className="existing-zones-container" style={{ marginTop: '2rem' }}>
                <h3>Existing Zones</h3>
                {zones.filter(zone => !zone.deleted).length === 0 ? (
                    <p className="zoning-section p">No zones defined yet. Add a new zone above!</p>
                ) : (
                    <ul className="zone-list">
                        {zones.filter(zone => !zone.deleted).map((zone) => (
                            <li key={zone.id} className="zone-item" style={{ flexDirection: 'column', alignItems: 'flex-start', paddingBottom: selectedZoneForSubAreas === zone.id ? '1.5rem' : '1rem' }}>
                                {/* Top-level Zone Display/Edit */}
                                {editZoneId === zone.id ? (
                                    <div className="edit-zone-form" style={{ width: '100%', marginBottom: '1rem' }}>
                                        <input
                                            type="text"
                                            value={editZoneName}
                                            onChange={(e) => setEditZoneName(e.target.value)}
                                            style={{ marginBottom: '0.5rem' }}
                                        />
                                        <textarea
                                            value={editZoneDescription}
                                            onChange={(e) => setEditZoneDescription(e.target.value)}
                                            rows="2"
                                            style={{ marginBottom: '0.5rem' }}
                                        ></textarea>
                                        <div className="edit-zone-form-buttons">
                                            <button onClick={() => updateZone(zone.id)} className="save-button">Save</button>
                                            <button onClick={() => setEditZoneId(null)} className="cancel-button">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <div className="zone-item-content">
                                            <h4>{zone.name} (ID: {zone.id.substring(0, 8)})</h4>
                                            {zone.description && <p>{zone.description}</p>}
                                            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                                                Sub-Areas: {zone.subAreas.filter(sa => !sa.deleted).length}
                                            </p>
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
                                            <button
                                                onClick={() => setSelectedZoneForSubAreas(selectedZoneForSubAreas === zone.id ? null : zone.id)}
                                                className="add-zone-button"
                                                style={{
                                                    backgroundColor: selectedZoneForSubAreas === zone.id ? '#6c757d' : '#007bff', // Different color when open
                                                    marginLeft: '0.5rem',
                                                    padding: '0.5rem 1rem',
                                                    fontSize: '0.875rem',
                                                    boxShadow: 'none' // Override dashboard-button styles
                                                }}
                                            >
                                                {selectedZoneForSubAreas === zone.id ? 'Close Sub-Areas' : 'Manage Sub-Areas'}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Sub-Area Management Section (Conditionally rendered) */}
                                {selectedZoneForSubAreas === zone.id && (
                                    <div style={{ width: '100%', borderTop: '1px solid #e5e7eb', marginTop: '1rem', paddingTop: '1rem' }}>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#374151' }}>Sub-Areas for {zone.name}</h4>

                                        {/* Add New Sub-Area Form */}
                                        <div className="add-zone-form-container" style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#eff6ff' }}>
                                            <h5 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1f2937' }}>Add New Sub-Area</h5>
                                            <input
                                                type="text"
                                                placeholder="Sub-Area Name (e.g., Room 101, Lobby Entrance)"
                                                value={newSubAreaName}
                                                onChange={(e) => setNewSubAreaName(e.target.value)}
                                                style={{ width: '100%', marginBottom: '0.75rem', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                                            />
                                            <textarea
                                                placeholder="Sub-Area Description (optional)"
                                                value={newSubAreaDescription}
                                                onChange={(e) => setNewSubAreaDescription(e.target.value)}
                                                rows="2"
                                                style={{ width: '100%', marginBottom: '0.75rem', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', resize: 'vertical' }}
                                            ></textarea>
                                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                                <button
                                                    onClick={() => addSubArea(zone.id)}
                                                    className="add-zone-button"
                                                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                                                >
                                                    Add Sub-Area
                                                </button>
                                                <button
                                                    onClick={() => setShowSubAreaMapDrawing(true)}
                                                    className="add-zone-button"
                                                    style={{ backgroundColor: subAreaMapData ? '#28a745' : '#4CAF50', padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                                                >
                                                    {subAreaMapData ? 'Map Added (Click to Redraw)' : 'Add Map to Sub-Area'}
                                                </button>
                                            </div>
                                            {subAreaMapData && (
                                                <div className="drawn-shape-info" style={{ marginTop: '0.5rem', padding: '0.6rem', backgroundColor: '#e6ffe6', borderRadius: '0.5rem', border: '1px solid #a3e6a3' }}>
                                                    <p style={{ fontSize: '0.75rem', color: '#555' }}>
                                                        Map Data Captured: {subAreaMapData.type} ({subAreaMapData.coordinates.length} points)
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Map Drawing Interface for Sub-Areas */}
                                        {showSubAreaMapDrawing && (
                                            <MapDrawingComponent
                                                onSaveMapData={handleAddSubAreaMapData}
                                                onCloseMap={() => setShowSubAreaMapDrawing(false)}
                                            />
                                        )}

                                        {/* List of Existing Sub-Areas */}
                                        {zone.subAreas.filter(sa => !sa.deleted).length === 0 ? (
                                            <p style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>No sub-areas defined for this zone yet.</p>
                                        ) : (
                                            <ul className="zone-list" style={{ marginTop: '1rem', gap: '0.75rem' }}>
                                                {zone.subAreas.filter(sa => !sa.deleted).map(subArea => (
                                                    <li key={subArea.id} className="zone-item" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '0.75rem' }}>
                                                        {subArea.isEditing ? (
                                                            <div className="edit-zone-form" style={{ width: '100%', marginBottom: '0.5rem' }}>
                                                                <input
                                                                    type="text"
                                                                    value={subArea.editName}
                                                                    onChange={(e) => setZones(prev => prev.map(z => z.id === zone.id ? { ...z, subAreas: z.subAreas.map(sa_ => sa_.id === subArea.id ? { ...sa_, editName: e.target.value } : sa_) } : z))}
                                                                    style={{ marginBottom: '0.5rem' }}
                                                                />
                                                                <textarea
                                                                    value={subArea.editDescription}
                                                                    onChange={(e) => setZones(prev => prev.map(z => z.id === zone.id ? { ...z, subAreas: z.subAreas.map(sa_ => sa_.id === subArea.id ? { ...sa_, editDescription: e.target.value } : sa_) } : z))}
                                                                    rows="1"
                                                                    style={{ marginBottom: '0.5rem' }}
                                                                ></textarea>
                                                                <div className="edit-zone-form-buttons">
                                                                    <button onClick={() => updateSubArea(zone.id, subArea.id)} className="save-button" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Save</button>
                                                                    <button onClick={() => cancelEditSubArea(zone.id, subArea.id)} className="cancel-button" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Cancel</button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                                                <div className="zone-item-content">
                                                                    <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827' }}>
                                                                        {subArea.name} (ID: {subArea.id.substring(0, 8)})
                                                                    </h5>
                                                                    {subArea.description && <p style={{ fontSize: '0.8rem', color: '#4b5563', marginTop: '0.25rem' }}>{subArea.description}</p>}
                                                                    {subArea.mapData && (
                                                                        <p style={{ fontSize: '0.7rem', color: '#666', marginTop: '0.25rem' }}>
                                                                            Map: {subArea.mapData.type} ({subArea.mapData.coordinates.length} points)
                                                                        </p>
                                                                    )}
                                                                </div>
                                                                <div className="zone-actions">
                                                                    <button
                                                                        onClick={() => startEditSubArea(zone.id, subArea)}
                                                                        className="zone-action-button edit"
                                                                        title="Edit Sub-Area"
                                                                        style={{ width: '2rem', height: '2rem', minWidth: 'unset', minHeight: 'unset', padding: '0.3rem' }}
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="zone-action-button svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        onClick={() => deleteSubArea(zone.id, subArea.id)}
                                                                        className="zone-action-button delete"
                                                                        title="Delete Sub-Area"
                                                                        style={{ width: '2rem', height: '2rem', minWidth: 'unset', minHeight: 'unset', padding: '0.3rem' }}
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="zone-action-button svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
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

export default ZoningPage;
