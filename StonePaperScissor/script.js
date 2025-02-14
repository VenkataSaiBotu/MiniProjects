let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const reset = document.querySelector("button");

reset.addEventListener("click",()=>{
    msg.innerHTML = "Play your move";
    userScorePara.innerText = "0";
    compScorePara.innerHTML = "0";
    userScore = 0; compScore = 0;
})

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const i = Math.floor(Math.random()*3);
    return options[i];
}

const drawGame = ()=>
{
    console.log("Game was draw");
    msg.innerHTML = "Game was Draw.Play Again!!!";

}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("you win");
        msg.innerHTML = `You Win! your ${userChoice} beats ${compChoice}`;
    }
    else
    {
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("lost");
        msg.innerHTML = `Lost!!!!! ${compChoice} beats your ${compChoice}`;
    }
        
}

const playGame  =(userChoice) =>
{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else 
    {
        let userWin=true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true ;
        }
        else if( userChoice === "paper")
        {
            userWin = compChoice ==="scissors" ? false : true;
        }
        else 
        {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice,i) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } )
})