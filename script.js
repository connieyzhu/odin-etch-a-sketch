const grid = document.getElementById('grid');
const text = document.getElementById('textBox');
const submit = document.getElementById('submitBtn');

submit.addEventListener('click', function(e){
    if(!isNaN(text.value) && (text.value <= 100 && text.value >= 1)){
        changeGridSize(text.value);
    }
    console.log(text.value);
})

function createGrid(num){
    for(r = 0; r < num; r++){
        let row = document.createElement('div');
        row.className = 'row';
        for(c = 0; c < num; c++){
            let square = document.createElement('div');
            square.className = 'square';
            square.style.width = squareSize(num);
            square.style.height = squareSize(num);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function removeGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
        console.log("removed");
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
    removeGrid();
    createGrid(size);
}

function colorGrid(){

}

defaultGrid();