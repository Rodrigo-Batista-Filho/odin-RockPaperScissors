let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    switch(random){
        case 0:
            return "rock";
        case 1:
            return "paper"
        case 2:
            return "scissor";
        default:
            console.log("Error!")
    }
}

function playRound(human, computer) {
    let result = "";
    if(
        (human === "rock" && computer === "scissor") || 
        (human === "scissor" && computer === "paper") || 
        (human === "paper" && computer === "rock")
    )   {
        humanScore ++;
        result = `You won! ${human} beats ${computer}.`
    } else if(human === computer){
        result = "Draw!";
    } else {
        computerScore ++;
        result = `You lost! ${computer} beats ${human}.`;
    }



    document.getElementById("humanScore").textContent = `Human: ${humanScore}`;
    document.getElementById("computerScore").textContent = `Computer: ${computerScore}`;

    document.getElementById("result").textContent = result

    if(humanScore === 5){
        document.getElementById("result").textContent = "You won the game";
        disableButtons();
    } else if(computerScore === 5){
        document.getElementById("result").textContent = "You lost the game";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

document.getElementById("paper").addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

document.getElementById("scissor").addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
});