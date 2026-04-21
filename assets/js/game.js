
// THE GAME --- Chosing and displaying the location image

let allLocations = [];
let currentLocation = null;
let score = 0;
let round = 1;
let map;
let userMarker = null;
let userGuessCoords = null;
let usedLocationIndexes = [];

//Fetch the data
async function loadGameData() {
    try {
        const response = await fetch('assets/js/locations.json');
        allLocations = await response.json();
        initMap(); //Loads the map
        startGame(); //Starts the game
        setupEventListeners(); //Event listeners for the gameplay
    } catch (error) {
        console.error("Time Vortex Error: Could not load locations", error);
    }  
}

//Start The Game
function startGame(){
    //prevent the user from seeing the same location more than once
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * allLocations.length);
    //Checks that the location pick hasn't already been used and that there are still new locations left.
    } while (usedLocationIndexes.includes(randomIndex) && usedLocationIndexes.length < allLocations.length);
    //adds the picked location to the array to prevent it being picked next time
    usedLocationIndexes.push(randomIndex);
    //pick a random location
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
//Function to detect and stop the game after 5 rounds
function nextRound(){
    //closes the modal
    document.getElementById('result-modal').style.display = 'none';

    if (round < 5) {
        round++;
        document.getElementById('round-count').innerText = `${round} of 5`;
        console.log(`I have started  round ${round}`);
        //resets the map / marker between rounds
        if(userMarker) {
            map.removeLayer(userMarker);
            userMarker = null;
            userGuessCoords = null;
        }
        //reset map
        map.setView([51.4730, -3.150],16);

        //update score
        document.getElementById('current-score').innerText = score;

        //Restart the game
        startGame();

    } else {
        //If we've reached 5 - it's game over
        showGameOver();
    }
}

function showGameOver() {
    const resultTitle = document.getElementById('modal-title');
    const resultText = document.getElementById('result-text');
    const nextBtn = document.getElementById('next-round-btn');
    const exitBtn = document.getElementById('exit-btn');

    resultTitle.innerText = "Timeline Stabilised!";
    resultText.innerHTML = `<h3>Final Score: ${score}</h3> You've successfully navigated the Whoniverse! FANTASTIC! </p>`;
    document.getElementById('stats-container').style.display = 'none';

    //show the return to home button
    if(exitBtn) exitBtn.style.display = "inline-block";

    //update the button to start a new game
    nextBtn.innerText = "Play Again?";
    nextBtn.onclick = () => {
        window.location.reload();

    };

    document.getElementById('result-modal').style.display = 'block';

}

//Run game on page load
window.onload = loadGameData;

// THE GAME - Loading the map


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
    iconUrl: './assets/images/TARDISpin.svg',
    iconSize: [40,60],
    iconAnchor: [20,60],
    popupAnchor: [0, -60]
})
//Place a marker at the user location on the map
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

//SetUp event Listeners
function setupEventListeners(){
    const submitBtn = document.getElementById('submit-guess');
    const hintBtn = document.getElementById('hint-btn');

    if (submitBtn) {
        submitBtn.onclick = () => {
            if(userGuessCoords) {
                //fetch the actual location co-ords from locations.json
                const actual = L.latLng(currentLocation.coords.lat, currentLocation.coords.lng);
                //calculate distance using the leaflet function
                const distanceInMeters = userGuessCoords.distanceTo(actual);
                const distanceInKm = (distanceInMeters / 1000).toFixed(2);

                //Calculate a score
                let points = Math.max(0,5000 - Math.floor(distanceInKm * 100));
                score += points;

                //Give the user feedback on their guess using the modal
                document.getElementById('dist-display').innerText = distanceInKm;
                document.getElementById('points-display').innerText = points;
                document.getElementById('result-text').innerText = `You were supposed to materialise near ${currentLocation.name}!`;

                document.getElementById('result-modal').style.display = 'block';
            } else {
                //Gives the user feedback if they submit before clicking on the map.
                document.getElementById('error-modal').style.display = 'block';

            }
        };
    }
    // If the user clicks the hint button - will load up the hint from the current location.
    if (hintBtn) {
        hintBtn.onclick = () => {
            document.getElementById('hint-text').innerText = currentLocation.hint;
            document.getElementById('hint-modal').style.display = 'block';
        }
    }
    //Waits for user to close the hint button
    const closeHintBtn = document.getElementById('close-hint-btn');
    if(closeHintBtn) {
        closeHintBtn.onclick = () => {
            document.getElementById('hint-modal').style.display = 'none';
        }
    }
    //waits for user to close the error button
    const closeErrorBtn = document.getElementById('close-error-btn');
    if(closeErrorBtn) {
        closeErrorBtn.onclick = () => {
            document.getElementById('error-modal').style.display = 'none';
        }
    }

    const nextRoundBtn = document.getElementById('next-round-btn');
    if(nextRoundBtn) {
        nextRoundBtn.onclick = () => {
            nextRound();
        }
    }
}