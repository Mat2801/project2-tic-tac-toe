function playGameBtn() {
    document.getElementById("ai-board").style.display = "";
    document.getElementById("play").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("multiplayer").style.display = "none";
}

function howToPlayBtn() {
    document.getElementById("how-to-play").style.display = "block";
    document.getElementById("play").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("multiplayer").style.display = "none";
}

function multiplayerBtn() {
    document.getElementById("board").style.display = "";
    document.getElementById("play").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("multiplayer").style.display = "none";
}