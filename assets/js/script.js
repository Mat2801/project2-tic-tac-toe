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
]
let cellElements = document.querySelectorAll('[data-cell]');
let board = document.getElementById('board');
let circleTurn;

startGame();

function startGame() {
    circleTurn = false;
    // Once clicking on a cell it becomes true and can no longer be clicked
    cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
});
    setBoardHoverClass();

}

/* 
This function will handle all click events
*/
function handleClick(event) {
    const cell = event.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        console.log("winner")
    }
    //Check for win 
    //Check for draw
    switchTurns();
    setBoardHoverClass();
};

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