let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

let computerChoice = ["ROCK", "PAPER", "SCISSORS"];

computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];

playerSelection = prompt("Rock, Paper, Scissors?");

playerSelection = playerSelection.toUpperCase();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) 
        return "It's a tie!";
    else if (playerSelection=="ROCK" && computerSelection=="SCISSORS"){
        playerScore++;
        return "You win! Rock beats Scissors."
    }
    else if (playerSelection=="ROCK" && computerSelection=="PAPER") {
        computerScore++; 
        return "You lose. Paper beats Rock.";
    }
    else if (playerSelection=="PAPER" && computerSelection=="SCISSORS") {
        computerScore++;
        return "You lose. Scissors beat Paper.";
    }
    else if (playerSelection=="PAPER" && computerSelection=="ROCK") {
        playerScore++;
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection=="SCISSOR" && computerSelection=="ROCK") {
        computerScore++;
        return "You lose. Rock beats Scissors.";
    }
    else if (playerSelection=="SCISSORS" && computerSelection=="PAPER") {
        playerScore++;
        return "You Win! Scissors beat Paper.";
    }
    else
        return "Invalid user input."
}

