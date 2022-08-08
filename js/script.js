let gridBlockCount = 13;

let gridWidth = document.getElementById("grid").clientWidth;



const dataGrid = document.getElementsByTagName("data-row");
const grid = document.getElementById("grid");

function drawGrid(range) {
  grid.textContent = '';
  
  for (let i=0;i<range*12;i++) {
    document.getElementById("grid").appendChild(document.createElement("data-row"));
  }

  for (let grid of dataGrid) {
    for(let i=0;i<range*12;i++) {
      grid.appendChild(document.createElement("data-cell"));
    }  
  }
  colorGrid();
}

let isMouseDown = false;
let isEraserActive = false;
let isPenActive = true;
colorGrid();
drawGrid(1);

function colorGrid() {
  const elements = document.querySelectorAll("data-cell");
  elements.forEach(element => {
    element.addEventListener('mouseenter', (e)=> {
      if(isMouseDown){
        const node = e.target;
        
        if(isEraserActive){
          node.style.backgroundColor = "black";
        } else if(isPenActive) {
          node.style.backgroundColor = "red";
        }
     }
    });
  });
}

document.body.onmousedown = () => {isMouseDown = true; console.log(isMouseDown);}
document.body.onmouseup = ()=> {isMouseDown = false; console.log(isMouseDown);}


const clearButt = document.getElementById("clearButt");
clearButt.addEventListener("click", clearGrid);
const eraseButt = document.getElementById("eraseButt");
eraseButt.addEventListener("click", eraserGrid);
const colorButt = document.getElementById("colorButt");
colorButt.addEventListener("click", penGrid);
const rangeButt = document.getElementById("rangeButt");
rangeButt.addEventListener("change", updateGridSize);

function updateGridSize(e) {
  drawGrid(rangeButt.value);
}

function clearGrid(e) {
  const elements = document.querySelectorAll("data-cell");
  elements.forEach(element => {
    element.style.backgroundColor = "black";
  });
}

function eraserGrid(e) {
  setActiveButton(e);
  isEraserActive = true;
  isPenActive = false;
  console.log("isEraseActive = " +isEraserActive);
}

function penGrid(e) {
  setActiveButton(e);
  isPenActive = true;
  isEraserActive = false;
  console.log("isPenActive = " + isPenActive);
}

function setActiveButton(e) {
  const butt = document.querySelectorAll("button");
  butt.forEach(element => {
    element.classList.remove("activeButt");
  });
  e.target.classList.add("activeButt");
}


/*
const div = document.createElement("div"); div.setAttribute("id", idGoesHere); yourGrid.appendChild(div);
*/
