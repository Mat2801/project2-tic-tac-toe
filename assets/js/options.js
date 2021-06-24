// select elements
let options = document.querySelector(".options");
let gameOverElement = document.querySelector("winningMessage");

// select buttons
let computerBtn = options.querySelector(".computer");
let friendBtn = options.querySelector(".friend");
let xBtn = options.querySelector(".x-symbol");
let oBtn = options.querySelector(".circle-symbol");
let playBtn = options.querySelector(".play");

// some variables to store users options
const player = new Object;

let OPPONENT;

// add event listener for each button
computerBtn.addEventListener("click", function() {
    OPPONENT = "computer";
    switchActive(friendBtn, computerBtn);
})

friendBtn.addEventListener("click", function() {
    OPPONENT = "friend";
    switchActive(computerBtn, friendBtn);
})

oBtn.addEventListener("click", function() {
    player.person = "O";
    player.computer = "X";
    player.friend = "X";
    switchActive(xBtn, oBtn);
})

xBtn.addEventListener("click", function() {
    player.person = "X";
    player.computer = "O"
    player.friend = "O"
    switchActive(oBtn, xBtn);
})

playBtn.addEventListener("click", function() {
    if (!OPPONENT) {
        computerBtn.style.backgroundColor = "red";
        friendBtn.style.backgroundColor = "red";
        return;
    }

    if (!player.person) {
        xBtn.style.backgroundColor = "red";
        oBtn.style.backgroundColor = "red";
        return;
    }

    IntersectionObserver(player, OPPONENT);
    options.classList.add("hide");
});

function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
}
