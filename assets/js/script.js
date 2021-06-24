// creating variables
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let cellElements = document.querySelectorAll('[data-cell]');
let circleTurn;
// Once clicking on a cell it becomes true and can no longer be clicked
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
});

/* 
This function will handle all click events
*/
function handleClick(event) {
    const cell = event.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    //Check for win 
    //Check for draw
    switchTurns()
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



