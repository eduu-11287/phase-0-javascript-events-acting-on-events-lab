// Your code here
// Assuming there's a 'dodger' element in the HTML with the 'dodger' id
// and a 'game' element with the 'game' id

// Get the dodger and the game field elements
const dodger = document.getElementById('dodger');
const game = document.getElementById('game');

// Define the width of the game area and the dodger
const gameWidth = game.offsetWidth;
const dodgerWidth = dodger.offsetWidth; // Dodger width is 40px by default

// Function to move the dodger to the left
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace('px', ''), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`; // Move the dodger left by 1px
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace('px', ''), 10);
  // Prevent moving off the right side
  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 1}px`; // Move the dodger right by 1px
  }
}

// Event listener for keydown event
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight(); // Call moveDodgerRight on ArrowRight key press
  }
});
