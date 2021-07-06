// create variables
let mainMenu = document.getElementById("mainMenu");
let play = document.getElementById("play");
let rulesArea = document.getElementById("rules");
let mainButton = document.getElementById("boardMainMenu");


//hide Main Menu button on main menu screen
mainButton.style.display = "none";

// Listen for the play button to be clicked.
play.addEventListener("click", playAudioBtn);
play.addEventListener("click", playGameBtn);

/*
Once the play button is clicked this function will be executed
this will run the tic tac toe game and hide all other things
other than the main menu button.
*/
function playGameBtn() {
    menu.style.display = "none"
    mainButton.style.display = ""
    document.getElementById("board").style.display = "grid";
    mainButton.addEventListener("click", playAudioBtn);
    mainButton.addEventListener("click", menuBtn)
}

// listen for the how to play button to be clicked
rulesArea.addEventListener("click", playAudioBtn);
rulesArea.addEventListener("click", rulesBtn);

/*
Once the how to play button is clicked this will load up the 
rules screen and hide all other elements except the main menu button
*/
function rulesBtn() {
    menu.style.display = "none"
    document.getElementById("howToPlay").style.display = "block";
}

// listen for the main menu button to be clicked
mainMenu.addEventListener("click", playAudioBtn);
mainMenu.addEventListener("click", menuBtn);

/*
when the main menu button is clicked this will take the user 
back to the main menu
*/
function menuBtn() {
    document.getElementById("menu").style.display = "";
    document.getElementById("howToPlay").style.display = "none";
    document.getElementById("board").style.display = "none";
    mainButton.style.display = "none"
}


//All audio functions for each button and click event 

function playAudioBtn() {
    new Audio("assets/audio/button.mp3").play();
  }

function playAudioWin() {
    new Audio("assets/audio/win.mp3").play();
}

function playAudioDraw() {
    new Audio("assets/audio/draw.mp3").play();
}
