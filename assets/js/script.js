// selecting all 9 cell elements
let cellElements = document.querySelectorAll('[data-cell]');
// Once clicking on a cell it becomes true and can no longer be clicked
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
});

/* 
This function will handle all click events
*/
function handleClick(event) {
    console.log('clicked')
};



