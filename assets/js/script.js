// creating variables
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
let circleTurn;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
    circleTurn = false;
    // Once clicking on a cell it becomes true and can no longer be clicked
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener("click", handleClick)
    cell.addEventListener('click', handleClick, {once: true});
});
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');

}

/* 
This function will handle all click events
*/
function handleClick(event) {
    const cell = event.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        switchTurns();
        setBoardHoverClass();
    }
}

function aiTurn() {
    let available = []
    for (let X_CLASS = 0; X_CLASS < 3; X_CLASS++) {
        for (let CIRCLE_CLASS = 0; CIRCLE_CLASS < 3; CIRCLE_CLASS++) {
            if (board[X_CLASS][CIRCLE_CLASS] == "") {
                available.push({X_CLASS, CIRCLE_CLASS});
            }
        }
    }
}

let move = random(available);
board[move.X_CLASS][move.CIRCLE_CLASS] = ai;
currentPlayer = X_CLASS;

/*
Show winning message when the game has ended
*/
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add("show");
}

/*
Check if the game has ended as a draw
*/
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    });
}

/*
depending on whos turn it is this will place an x or a circle
*/
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

/*
This will switch turns for each class x and circle
*/
function switchTurns() {
    circleTurn = !circleTurn;
}

/*
show a light x or cirlce when hovering over depending on 
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
check for a winning combination
*/
function checkWin(currentClass) {
   return WINNING_COMBINATIONS.some(combination => {
       return combination.every(index => {
           return cellElements[index].classList.contains(currentClass)
       });
   });
}