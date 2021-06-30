let mainMenu = document.getElementById("mainMenu");
let play = document.getElementById("play");
let rulesArea = document.getElementById("rules");

play.addEventListener("click", playGameBtn);

function playGameBtn() {
    menu.style.display = "none"
    document.getElementById("board").style.display = "grid";

}

rulesArea.addEventListener("click", rulesBtn);

function rulesBtn() {
    menu.style.display = "none"
    document.getElementById("howToPlay").style.display = "contents";
}

mainMenu.addEventListener("click", menuBtn);

function menuBtn() {
    document.getElementById("menu").style.display = "";
    document.getElementById("howToPlay").style.display = "none";
}

