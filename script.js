const grid = document.getElementById('grid');

function createGrid(num){
    for(r = 0; r < num; r++){
        const row = document.createElement('div');
        row.className = 'row';
        for(c = 0; c < num; c++){
            const square = document.createElement('div');
            square.className = 'square';
            square.style.width = squareSize(num);
            square.style.height = squareSize(num);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function defaultGrid(){
    createGrid(16);
}

function squareSize(num){
    const size = 500 / num;
    return size;
}

function changeGridSize(size){
    createGrid(size);
}

function colorGrid(){

}

defaultGrid();

console.log(document.querySelectorAll('div'));