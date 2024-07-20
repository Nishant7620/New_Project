// Initialize the map

const map = L.map('map', {
    crs: L.CRS.Simple, // Coordinate Reference System
    minZoom: -1,
    maxBounds: [[0, 0], [1000, 1000]], // Set the maximum bounds to match the image dimensions
    maxBoundsViscosity: 1.0 // Prevent panning outside the bounds
    
});

// Define the bounds for the image overlay
const bounds = [[0, 0], [1000, 1000]]; // Adjust based on your image's dimensions

// Add markers with popups
const locations = [
    { coords: [290, 186], popupText: "Location 1: <a href='page1.html' target='_blank'>click here</a>" },
    { coords: [500, 600], popupText: "Location 2: Description" },
    { coords: [800, 400], popupText: "Location 3: Description" }
];

locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(location.popupText);
});



// Add the image overlay

const image = L.imageOverlay( "{% static 'core/images/map.svg' %}", bounds).addTo(map);



// Fit the map to the image bounds
map.fitBounds(bounds);
