console.log("Hello, World!")

let computer = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    switch(random){
        case 0:
            computer = "rock";
            break;
        case 1:
            computer = "paper";
            break;
        case 2:
            computer = "scissor";
            break;
        default:
            console.log("Error!")
            break;
    }
    return computer;
}

let human = 0;

function getHumanChoice(){
    let sign = window.prompt("Rock, Paper or Scissor? Write your awnser below!");
    return sign.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
    if(
        (human === "rock" && computer === "scissor") || 
        (human === "scissor" && computer === "paper") || 
        (human === "paper" && computer === "rock")
    )   {
        console.log(`You won! ${human} beats ${computer}.`);
        humanScore ++;
    } else if(human === computer){
        console.log("Draw!");
    } else {
        console.log(`You lost! ${computer} beats ${human}.`);
        computerScore ++;
    }
    return `Scores -> Human: ${humanScore}, Computer: ${computerScore}`;
}

let play = true;
let round = 0;

function playGame(){
    while(play) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        round ++;
        if(round === 5){
            play = false;
        }
    }
    console.log(`Final Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();