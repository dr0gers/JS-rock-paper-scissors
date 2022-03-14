let playerScore = 0;
let computerScore = 0;
let choice = ["ROCK", "PAPER", "SCISSORS"];
let playCount = 1;



document.getElementById('rock').onclick = function() {
    if (playerScore >= 5){
        document.getElementById('round').innerText = "The human mind triumps over machines once again.";
        return;
    } else if (computerScore >= 5){
        document.getElementById('result').innerText = "SkyNet take over imminent.";
        return;
    } else {
        document.getElementById('round').innerText = `Round ${playCount}`;
    };

    playerSelection = "ROCK";
    computerSelection = choice[Math.floor(Math.random() * choice.length)];

    playRound = (playerSelection, computerSelection) => {
        if (playerSelection === computerSelection) {
            document.getElementById('result').innerText = "It's a tie!";
        } else if (computerSelection=="SCISSORS"){
            playerScore++;
            document.getElementById('result').innerText = "You win! Rock beats Scissors.";
        } else if (computerSelection=="PAPER") {
            computerScore++; 
            document.getElementById('result').innerText = "You lose. Paper beats Rock.";
        } else {
            document.getElementById('result').innerText = "Invalid user input.";
        }
    };
    console.log(playRound(playerSelection, computerSelection));
    
    playCount++;

    document.getElementById('score').innerHTML = `Your Score: ${playerScore}. Compter Score: ${computerScore}.`;

};

document.getElementById('paper').onclick = function() {
    if (playerScore >= 5){
        document.getElementById('round').innerText = "The human mind triumps over machines once again.";
        return;
    } else if (computerScore >= 5){
        document.getElementById('result').innerText = "SkyNet take over imminent.";
        return;
    } else {
        document.getElementById('round').innerText = `Round ${playCount}`;
    };

    playerSelection = "PAPER";
    computerSelection = choice[Math.floor(Math.random() * choice.length)];

    playRound = (playerSelection, computerSelection) => {
        if (playerSelection === computerSelection) {
            document.getElementById('result').innerText = "It's a tie!";
        } else if (computerSelection=="SCISSORS"){
            computerScore++;
            document.getElementById('result').innerText = "You lose. Scissors beats Paper.";
        } else if (computerSelection=="ROCK") {
            playerScore++;
            document.getElementById('result').innerText = "You win! Paper beats Rock.";
        } else {
            document.getElementById('result').innerText = "Invalid user input.";
        }
    };
    console.log(playRound(playerSelection, computerSelection));

    playCount++;

    document.getElementById('score').innerHTML = `Your Score: ${playerScore}. Computer Score: ${computerScore}.`;
};

document.getElementById('scissors').onclick = function() {
    if (playerScore >= 5){
        document.getElementById('round').innerText = "The human mind triumps over machines once again.";
        return;
    } else if (computerScore >= 5){
        document.getElementById('result').innerText = "SkyNet take over imminent.";
        return;
    } else {
        document.getElementById('round').innerText = `Round ${playCount}`;
    };
    playerSelection = "SCISSORS";
    computerSelection = choice[Math.floor(Math.random() * choice.length)];

    playRound = (playerSelection, computerSelection) => {
        if (playerSelection === computerSelection) {
            document.getElementById('result').innerText = "It's a tie!";
        } else if (computerSelection=="PAPER") {
            playerScore++; 
            document.getElementById('result').innerText = "You win! Scissors beats Paper.";
        } else if (computerSelection=="ROCK") {
            computerScore++;
            document.getElementById('result').innerText = "You lose. Rock beats Scissors.";
        } else {
            document.getElementById('result').innerText = "Invalid user input.";
        }
    };
    console.log(playRound(playerSelection, computerSelection));

    playCount++;

    document.getElementById('score').innerHTML = `Your Score: ${playerScore}. Computer Score: ${computerScore}.`;
};

