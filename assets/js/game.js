
// THE GAME --- Chosing and displaying the location image

let allLocations = [];
let currentLocation = null;
let score = 0;
let round = 1;

//Fetch the data
async function loadGameData() {
    try {
        const response = await fetch('assets/js/locations.json');
        allLocations = await response.json();
        initMap(); //Loads the map
        startGame();
    } catch (error) {
        console.error("Time Vortex Error: Could not load locations", error);
    }  
}

//Start The Game
function startGame(){
    //pick a random location
    const randomIndex = Math.floor(Math.random() * allLocations.length);
    currentLocation = allLocations[randomIndex];
    updateDisplay();
}

//Update game.html
function updateDisplay(){
    const mysteryImg = document.getElementById('mystery-image');
    const roundTxt = document.getElementById('round-count');

    if (currentLocation) {
        mysteryImg.src = currentLocation.image;
        mysteryImg.alt = "Mystery Doctor Who Location";
        roundTxt.innerText = `${round} of 5`;
    }
}

//Run game on page load
window.onload = loadGameData;

// THE GAME - Loading the map
let map;
let userMarker = null;
let userGuessCoords = null;

function initMap(){
    //loads the map - scheduled to default to Bad Wolf Studios Cardiff
    map = L.map('game-map').setView([51.4730, -3.150],16);
    
    //Add the openstreetmap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //Listen for clicks on the map
    map.on('click', function(e){
        placeMarker(e.latlng);
    }); 
}
//Create a custom pin marker based on the TARDIS pin
var tardisIcon = L.icon ({
    iconUrl: '/assets/images/TARDISpin.svg',
    iconSize: [40,60],
    iconAnchor: [20,60],
    popupAnchor: [0, -60]
})

function placeMarker(location) {
    //Checks to see if a marker already exists - if not, it will create one
    if (userMarker) {
        userMarker.setLatLng(location);
    } else {
        userMarker = L.marker(location,  {icon: tardisIcon}).addTo(map);
    }
    userGuessCoords = location;
    //Log the latitude and longlitude to console to check it works correctly.
    console.log("Marker Placed at:", location.lat, location.lng);
}