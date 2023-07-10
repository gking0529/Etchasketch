//variables, called later in the code
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');
const blackButton = document.querySelector('#black-btn');
const rainbowButton = document.querySelector('#rainbow-btn');
const sizeSlider = document.querySelector('#size-slider');
const sizeDisplay = document.querySelector('#size-display');

let color = 'black'; // Default color

//creates a grid that changes its background color when you hover over it. 
function createGrid() {
  for (let i = 0; i < 64 * 64; i++) {  //starts aa for loop that will iterate 64x64 times to create the grid
    const cell = document.createElement('div');
    cell.classList.add('cell'); //used to apply CSS/Javascript styles for "cell"
    cell.addEventListener('mouseover', function() { //listens for moveover event
      if (color === 'black') {
        this.style.backgroundColor = 'black';
      } else if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  //randomizes background color when random is selected
      }
    });
    container.appendChild(cell); //adds cell element as the child of container. This line actually adds the cell element to the webpage.
  }
}

//function used to clear the grid
function clearGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white';
  });
}

//function used to resize grid
function resizeGrid(newSize) {
  container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
}



createGrid(); // Create a maximum-sized grid

clearButton.addEventListener('click', clearGrid);
blackButton.addEventListener('click', () => { color = 'black'; });
rainbowButton.addEventListener('click', () => { color = 'rainbow'; });
sizeSlider.addEventListener('input', () => {
  sizeDisplay.textContent = sizeSlider.value;
  resizeGrid(sizeSlider.value);
});

// Initialize display and grid size to match initial slider value
sizeDisplay.textContent = sizeSlider.value;
resizeGrid(sizeSlider.value);
