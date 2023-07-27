
document.addEventListener("DOMContentLoaded", createBoard(16))

function createBoard (size)  {
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat (${size}, 1fr)`;
  let numDiv = size * size;

  for (let i = 0; i < numDiv ; i++){
    let div = document.createElement("div");
    container.appendChild(div);

    div.addEventListener("mouseover", ()=> {
      div.style.backgroundColor = "black"
    })
  }
}


