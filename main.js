let color = "#000"
let container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", function(){
  createBoard(16)
  let select = document.querySelector(".select")
  select.addEventListener("click", function() {
    let size = getSize()
    createBoard(size)
  })
  let reset = document.querySelector(".reset")
  reset.addEventListener("click", function(){
    let child = container.lastElementChild;
    while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
    }
    createBoard(16)
  })
})


function createBoard (size)  {
  
  container.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
  container.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
  let numDiv = size * size;

  for (let i = 0; i < numDiv ; i++){
    let div = document.createElement("div");
    container.appendChild(div);

    div.addEventListener("mouseover", colorDiv)

  }
}


function getSize(){
  let input = prompt("Insert board size: ")
  let message = document.querySelector("#message")
  if (input == ""){
    message.textContent = "Please provide a number"
  }
  else if (input < 1 || input > 100){
    message.textContent = "Please provide a number between 10 and 100"
  }
  else{
    message.textContent = "Board created"
    return input
  }
}

function colorDiv(){
  if (color == "random"){
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  else{
    this.style.backgroundColor = "#000"
  }
}

function setColor(colorChoice){
  color = colorChoice
}