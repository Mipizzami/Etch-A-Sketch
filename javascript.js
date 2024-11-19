let userInput;

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    userInput = prompt('Please enter size of the grid');
    console.log(userInput);
    createGrid(userInput);
})

function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    const gridSize = parseInt(size);
    if(gridSize <= 0 || isNaN(gridSize) || gridSize >= 100){
        alert('Please enter a valid positive number under 100');
        return;
    }

    const squareSize = 640 / gridSize;

    for(let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue';
        });

        container.appendChild(square);
    }
}
