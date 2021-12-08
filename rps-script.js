let playerSelection;
let computerSelection;

let computerChoice = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

computerSelection = computerPlay().toUpperCase();

playerSelection = prompt("Rock, Paper, Scissors?");

playerSelection = playerSelection.toUpperCase();


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) 
        return "It's a tie!";
    else if (playerSelection=="ROCK" && computerSelection=="SCISSORS") 
        return "You win! Rock beats Scissors.";
    else if (playerSelection=="ROCK" && computerSelection=="PAPER") 
        return "You lose. Paper beats Rock.";
    else if (playerSelection=="PAPER" && computerSelection=="SCISSORS") 
        return "You lose. Scissors beat Paper.";
    else if (playerSelection=="PAPER" && computerSelection=="ROCK") 
        return "You win! Paper beats Rock.";
    else if (playerSelection=="SCISSOR" && computerSelection=="ROCK") 
        return "You lose. Rock beats Scissors.";
    else if (playerSelection=="SCISSORS" && computerSelection=="PAPER") 
        return "You Win! Scissors beat Paper.";
    else 
        return "Invalid user input."
}