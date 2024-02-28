let boxes = document.querySelectorAll(".box");
let resetBt = document.querySelectorAll(".reset-btn");

let turn = true;

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turn){
        box.innerHTML = "X"
        turn = false;
    }
    else{
        box.innerHTML = "O"
        turn = true;
    }
    box.disa
  });
});
