function playGameBtn() {
    document.getElementById("board").style.display = "";
    document.getElementById("play").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("ai").style.display = "none";
}

function howToPlayBtn() {
    document.getElementById("how-to-play").style.display = "block";
    document.getElementById("play").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("ai").style.display = "none";
}

function aiBtn() {
    document.getElementById("ai-play").style.display = "";
    document.getElementById("play").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("ai").style.display = "none";
}