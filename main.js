
document.addEventListener("DOMContentLoaded", function(){
  let select = document.querySelector(".select")
  select.addEventListener("click", function() {
    let size = getSize()
    createBoard(size)
  })
})

function createBoard (size)  {
  let container = document.querySelector(".container");
  container.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
  container.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
  let numDiv = size * size;

  for (let i = 0; i < numDiv ; i++){
    let div = document.createElement("div");
    container.appendChild(div);

    div.addEventListener("mouseover", ()=> {
      div.style.backgroundColor = "black"
    })
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
  }
  return input

}