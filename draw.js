const gridContainer = document.querySelector('#gridContainer');


var gridDimensions = 25;

// gridContainer.textContent = "gridContainer";

for (i = 0; i < gridDimensions; i++) {
    
    gridContainer.innerHTML += '<div class="row"></div>'
    
}

const gridRows = document.querySelectorAll('.row');


for (i = 0; i < gridDimensions; i++) {
    
    for (j = 0; j < gridDimensions; j++) {

        gridRows[j].innerHTML += '<div class="column">  </div>';

    }
    
}