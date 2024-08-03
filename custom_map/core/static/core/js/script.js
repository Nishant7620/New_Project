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
// const locations = [
//     { coords: [290, 186], popupText: "Location 1: <a href='page1.html' target='_blank'>click here</a>" },
//     { coords: [500, 600], popupText: "Location 2: Description" },
//     { coords: [800, 400], popupText: "Location 3: Description" }
// ];

const locations = [
    { coords: [290, 186], id:1 },
    { coords: [500, 600], id:2},
    { coords: [800, 400], id:3 }
];

locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);
    // marker.bindPopup(location.popupText);
    marker.on('click',function(){
        fetch(`/details/${location.id}/`)
        .then(response => response.json())
        .then (data =>{
            document.getElementById('details').innerHTML=`
             <h2>${data.name1}</h2>
                        <p>Name 2: ${data.name2}</p>
                        <p>Price: ${data.price}</p>
                        <p>Satta Bara No: ${data.satta_bara_no}</p>
                    `;
        });
    });
});



// Add the image overlay

const image = L.imageOverlay( "{% static 'core/images/map.svg' %}", bounds).addTo(map);



// Fit the map to the image bounds
map.fitBounds(bounds);
