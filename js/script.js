let gridBlockCount = 13;

let gridWidth = document.getElementById("grid").clientWidth;

for (let i=0;i<13;i++) {
  document.getElementById("grid").appendChild(document.createElement("data-row"));
}

const dataGrid = document.getElementsByTagName("data-row");
for (let grid of dataGrid) {
  for(let i=0;i<13;i++) {
    grid.appendChild(document.createElement("data-cell"));
  }  
}

let isMouseDown = false;
colorGrid();

function colorGrid() {
  const elements = document.querySelectorAll("data-cell");
  elements.forEach(element => {
    element.addEventListener('mouseenter', (e)=> {
      if(isMouseDown){
        const node = e.target;
        node.style.backgroundColor = "red";
      }
    });
  });
}

document.body.onmousedown = () => {isMouseDown = true; console.log(isMouseDown);}
document.body.onmouseup = ()=> {isMouseDown = false; console.log(isMouseDown);}


const clearButt = document.getElementById("clearButt");
clearButt.addEventListener("click", clearGrid);
const eraseButt = document.getElementById("eraseButt");
eraseButt.addEventListener("click", clearGrid);

function clearGrid(e) {
  setActiveButton(e);
  const elements = document.querySelectorAll("data-cell");
  elements.forEach(element => {
    element.style.backgroundColor = "black";
  });
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
