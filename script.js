const inital_board = ["", "", "", "", "", "", "", "", ""];
let board=[...inital_board]
let turn = "X";
let xSCOR=0;
let OSCOR=0;
const ElementBoard = document.getElementById("board");
const TurnEle = document.getElementById("turn");
const render = () => {
  ElementBoard.innerHTML = "";
  board.forEach((cell, index) => {
    ElementBoard.insertAdjacentHTML(
      "beforeend",
      `
         <button onclick="play(${index})" class="cell ${cell}">${cell}</button> `
    );
    // const but=document.createElement('button')
    //  but.addEventListener('click',play(index))
    //   but.innerHTML=cell
    // but.classList.add("cell");
    //  but.classList.add(`${cell}`)
    //  but.innerHTML=cell

    //  but.onclick('click',()=>play(index))

    // ElementBoard.appendChild(but)
    // but.onclick( play(index))
    TurnEle.innerHTML = `${turn} Turn`;
  });
};
render();
const play = (index) => {
  if (board[index] !== "") {
    //مشان امنع اني احط في اندكس اكثر من قيمه
    return;
  }
  board[index] = turn;
  turn = turn === "X" ? "O" : "X";
  render();
  const winner = calResult();
  if (winner) {
    renderWinner(winner);
  }
};
function renderWinner(winner) {
    
        if (winner==='X' ){
            xSCOR++;
            document.getElementById('xscope').innerText=`X: ${xSCOR}`

        }
        else if (winner==='O') 
        {
            OSCOR++;
            document.getElementById('oscope').innerText=`O: ${OSCOR}`
        }
        ElementBoard.insertAdjacentHTML(
          "beforeend",
          `<div class="result"><span>${winner ==='D'?'Draw:(': `the winner is ${winner}`}</span>
           <button onclick="playAgain()"> play Agin </button></div>
    `
        );
      
}
// function isboardfull() {}
function calResult() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //colums
    [0, 4, 8],
    [2, 4, 6], //diagnal
  ];
  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
//   if the board is full
  if (!board.includes('')) {
    return 'D'
  }
  return null;
}
function playAgain() {
  board=[...inital_board];
  turn='X';
  render()
}
