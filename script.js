let boxes = document.querySelectorAll(".box");
let heading = document.querySelector(".heading");
let resetBtn = document.querySelector(".reset-btn");
let scoreBoard = document.querySelector(".score-Board");
let gameBoard = document.querySelector(".game-board");
let winMsg = document.querySelector(".container h1");
let newGameBtn = document.querySelector(".new-game");

let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const startGame = () => {
  boxes.forEach((box) => {
    box.addEventListener("click", handleClickes);
  });
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
  boxes.forEach((box) => {
    if (box.innerHTML === "") {
      boxfilled++;
    }
  });
  return boxfilled === 0 && !checkWin();
};

const handleClickes = (e) => {
  if (e.target.innerHTML === "") {
    e.target.innerHTML = turn;
    if (checkWin()) {
      winMsg.innerHTML = `Player ${turn} Won`;
      scoreBoard.style.opacity = 1;
      scoreBoard.style.pointerEvents = "auto";
      gameBoard.classList.add("pointer-event");
      disabled();
    } else if (checkTie()) {
      winMsg.innerHTML = "DRAW";
      disabled();
      scoreBoard.style.opacity = 1;
      scoreBoard.style.pointerEvents = "auto";
      gameBoard.classList.add("pointer-event");
    } else {
      turn = changeTurn();
    }
  }
};

const disabled = () => {
  boxes.forEach((box) => {
    box.removeEventListener("click", handleClickes);
  });
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
};

resetBtn.addEventListener("click", resetGame);

const newGame = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    scoreBoard.style.opacity = 0;
    gameBoard.classList.remove("pointer-event");
    scoreBoard.style.pointerEvents = "none";
  });
  startGame();
};

newGameBtn.addEventListener("click", newGame);

startGame();
