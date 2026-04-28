// ** MODAL FOR LANDING PAGE **
/*jshint esversion: 8 */ 
//Get Elements
const modal = document.getElementById("how-to-play-modal");
const btn = document.getElementById("how-to-play");
const closeSpan = document.getElementsByClassName("close-btn")[0];

//Open Modal on click
btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('no-scroll');
};

//Close Modal on X click
closeSpan.onclick = function() {
    modal.style.display = "none";
    document.body.classList.add('no-scroll');
};

//Close Modal on click outside of modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
