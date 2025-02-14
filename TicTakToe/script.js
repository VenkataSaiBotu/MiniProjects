let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const winPatterns = [
[0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

const resetGame = () =>{
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

boxes.forEach((box,i)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            turnO = false;
            box.innerHTML = "O";
        }
        else
        {
            turnO=true;
            box.innerHTML = "X";
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBtns = () =>
{
    for(box of boxes)
    {
        box.disabled = true ;
    }
}

const enableBtns = () =>
    {
        for(box of boxes)
        {
            box.disabled = false ;
            box.innerText = "";
        }
    }

let showWinner = (winner)=>{
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

let checkWinner = ()=>{
    for(pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") 
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                showWinner(pos1Val);
            }
        }   
    }
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);