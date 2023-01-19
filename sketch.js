let gridSize = 16;
let gridContainer = document.querySelector('#sketchContainer');

function generateGrid() {
  for (let numRows = 0; numRows < gridSize; numRows++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let numCols = 0; numCols < gridSize; numCols++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
  attachDivListeners();
}

function resetGrid() {
  gridSize = parseInt(window.prompt('What size grid would you like?'));
  if (Number.isInteger(gridSize)) {
    while (gridContainer.firstChild)
      gridContainer.removeChild(gridContainer.firstChild);
    generateGrid(gridSize);
  }
}

let resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', (e) => {
  resetGrid();
});

function attachDivListeners() {
  let cells = document.querySelectorAll('.cell').forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      let rgb = getRandomRGB();
      item.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    });
  });
}

function getRandomRGB() {
  rgb = [0, 0, 0];
  rgb.forEach(function (color, index) {
    rgb[index] = Math.floor(Math.random() * 255);
  });
  return rgb;
}

generateGrid((gridSize = 16));
