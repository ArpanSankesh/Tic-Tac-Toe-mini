let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

// let turn = true;
let turn = "X";

const changeTurn = () =>{
    return turn === "X"?"O":"X";
}

const winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // if (turn){
    //     box.innerHTML = "X"
    //     turn = false;
    // }
    // else{
    //     box.innerHTML = "O"
    //     turn = true;
    // }
    // changeTurn()
    if (box.innerHTML === ""){
        box.innerHTML = turn;
        turn = changeTurn()
    }
  });
});

const resetGame = () => {
    boxes.innerHTML = "";
}

resetBtn.addEventListener('clicked', resetGame);


