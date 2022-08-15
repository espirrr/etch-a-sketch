const gridContainer = document.querySelector('#gridContainer');
const typeGridDimensions = document.querySelector('#selectDimensions');
var gridDimensions = 10;

// Creates rows depending on the # of dimensions chosen.
for (i = 0; i < gridDimensions; i++) {
    
    gridContainer.innerHTML += '<div class="row"></div>'
    
}

var gridRows = document.querySelectorAll('.row');

// Creates columns in each row depending on the # of dimensions chosen.
for (i = 0; i < gridDimensions; i++) {
    
    for (j = 0; j < gridDimensions; j++) {

        gridRows[j].innerHTML += '<div class="column">  </div>';

    }
}

var gridSquares = document.querySelectorAll('.column');

var gridArray = Array.from(gridSquares);

// Each element in the array will have its own addEventListener by giving each index variable "uniqueSquare".
gridArray.forEach(function(squareElement){

    squareElement.addEventListener('mouseenter', function(e){ 

        e.target.style.background = 'black';

    })

});

function removeExisting () {
    var currentGrid = document.getElementsByClassName('row');

    while(currentGrid.length > 0){
        currentGrid[0].parentNode.removeChild(currentGrid[0]);
    }
}


function clickButton () {

    gridDimensions = prompt("Please choose a number under 100.");

    while (gridDimensions >= 100) {

        gridDimensions = prompt('You either submitted a number over 100 or non-number characters. Please try again!');
        
    }
        alert("Your grid will be" + " " + gridDimensions + " " + "x" + " " + gridDimensions + ".");

}

typeGridDimensions.addEventListener('click', function() {

    removeExisting();
    clickButton();
   
    for (i = 0; i < gridDimensions; i++) {
    
        gridContainer.innerHTML += '<div class="row"></div>'
    
    }

    const gridRows = document.querySelectorAll('.row');

    for (i = 0; i < gridDimensions; i++) {
    
        for (j = 0; j < gridDimensions; j++) {

            gridRows[j].innerHTML += '<div class="column">  </div>';

        }
    }

    gridSquares = document.querySelectorAll('.column');

    gridArray = Array.from(gridSquares);

    gridArray.forEach(square => {

        square.addEventListener('mouseenter', function(e){ 

            e.target.style.background = 'black';

        })

    });

});