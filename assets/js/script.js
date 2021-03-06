// Creating variables
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cellElements = document.querySelectorAll('[data-cell]');
let winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let board = document.getElementById('board');
let winningMessageElement = document.getElementById('winningMessage');
let restartButton = document.getElementById("restartButton");
let restart = document.getElementById("restart");
let circleTurn;


// Initiates the start game function
startGame();

// listen for the restart button to be clicked
restartButton.addEventListener("click", startGame);
restart.addEventListener("click", startGame);

/*
Once the play button is clicked the game will run starting with 
X turn first we will remove all items in the cells to start a 
fresh game and once full will display the winners message and a 
restart button
*/
function startGame() {
    circleTurn = false;
    // Once clicking on a cell it becomes true and can no longer be clicked
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click", handleClick);
    cell.addEventListener('click', handleClick, {once: true});
});
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');

}

/* 
This function will handle all click events for the game board
when it is X or circles turn it will also check for a winner or a draw
*/
function handleClick(event) {
    const cell = event.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    // This will check all winning arrays to see if anyone has won
    if (checkWin(currentClass)) {
        endGame(false);
        //This will check all arrays to see if a draw has happened 
    } else if (isDraw()) {
        endGame(true);
        //If non of the above has happened it will become the next players turn
    } else {
        switchTurns();
        setBoardHoverClass();
    }
}

/*
Show winning message when the game has ended
*/
function endGame(draw) {
    if (draw) {
        playAudioDraw();
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        playAudioWin();
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add("show");
}

/*
Check if the game has ended as a draw
*/
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    });
}

/*
Depending on whos turn it is this will place an x or a circle
*/
function placeMark(cell, currentClass) {
    cell.addEventListener("click", playAudioClick);
    cell.classList.add(currentClass);
}

/*
This will switch turns for each class x and circle
*/
function switchTurns() {
    circleTurn = !circleTurn;
}

/*
Show a light x or cirlce when hovering over depending on 
whos turn it is
*/
function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
}
}

/* 
Check for a winning combination
*/
function checkWin(currentClass) {
   return WINNING_COMBINATIONS.some(combination => {
       return combination.every(index => {
           return cellElements[index].classList.contains(currentClass);
       });
   });
}