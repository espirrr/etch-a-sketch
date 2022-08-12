const gridContainer = document.querySelector('#gridContainer');
const typeGridDimensions = document.querySelector('#selectDimensions');
var chosenDimensions = 10;

typeGridDimensions.addEventListener('click', function() {

    chosenDimensions = prompt("Please choose a number under 100.");
    alert("Your grid will be" + " " + chosenDimensions + " " + "x" + " " + chosenDimensions);

});

console.log(gridDimensions);
var gridDimensions = chosenDimensions;
console.log(gridDimensions);

// Creates rows depending on the # of dimensions chosen.
for (i = 0; i < gridDimensions; i++) {
    
    gridContainer.innerHTML += '<div class="row"></div>'
    
}

const gridRows = document.querySelectorAll('.row');

// Creates columns in each row depending on the # of dimensions chosen.
for (i = 0; i < gridDimensions; i++) {
    
    for (j = 0; j < gridDimensions; j++) {

        gridRows[j].innerHTML += '<div class="column">  </div>';

    }
}

var gridSquares = document.querySelectorAll('.column');

// Creates an array from all of the squares with class .column
var gridArray = Array.from(gridSquares);


var isMouseDown = false;

// Each element in the array will have its own addEventListener by giving each index variable "uniqueSquare".
for (k = 0; k < gridArray.length; k++) {

    var uniqueSquare = gridArray[k];
    

    uniqueSquare.addEventListener('mouseenter', function(e) {

        e.target.style.background = 'black';
    
    });

}




