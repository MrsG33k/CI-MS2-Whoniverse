// ** MODAL FOR LANDING PAGE **
//Get Elements
const modal = document.getElementById("how-to-play-modal");
const btn = document.getElementById("how-to-play");
const closeSpan = document.getElementsByClassName("close-btn")[0];

//Open Modal on click
btn.onclick = function() {
    modal.style.display = "block";
}

//Close Modal on X click
closeSpan.onclick = function() {
    modal.style.display = "none";
}

//Close Modal on click outside of modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// THE GAME

let allLocations = [];
let currentLocation = null;
let score = 0;
let round = 1;

//Fetch the data
async function loadGameData() {
    try {
        const response = await fetch('assets/js/locations.json');
        allLocations = await response.json();
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
        roundTxt.innerText = '${round} of 5';
    }
}

//Run game on page load
window.onload = loadGameData;