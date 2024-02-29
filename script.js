let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "")
      if (pos1 === pos2 && pos2 === pos3) {
        return true;
      }
  }
  return false;
};

const checkTie = () => {
    let boxfilled = 0;
    boxes.forEach(box => {
        if(box.innerHTML === "");
        boxfilled++
    })
    return boxfilled === 0 && !checkWin();
}

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.innerHTML === "") {
      box.innerHTML = turn;
      if (checkWin()) {
        console.log(`winner is ${turn}`);
      }
      else if(checkTie()) {
        console.log('draw guys');
      };
      turn = changeTurn();
      
    }
  });
});

// const resetGame = () => {
//     boxes.forEach((box) => {
//         box.addEventListener("click", function () {
//          box.innerHTML = "";
//         });
//       });
// }

// resetBtn.addEventListener('click', resetGame);
