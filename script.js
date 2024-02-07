function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = choices[randomIndex];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();
    if  (player == computer) {
        result = "Tie!"
    }
    else if ((player == "ROCK" && computer == "SCISSORS") || (player == "SCISSORS" && computer == "PAPER") || (player == "PAPER" && computer == "ROCK")) {
        result = "You win!"
    }   
    else {
        result = "You lose!"
    }
    return (result);
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choice: ");  
        const computerSelection = getComputerChoice();
        const result = (playRound(playerSelection, computerSelection));
        if (result == "Tie!" || result == "You win!") {
            playerScore += 1;
        }
        if (result == "Tie!" || result == "You lose!") {
            computerScore += 1;
        }
        if (result == "Tie!") {
            console.log(playerSelection, "equals", computerSelection + ",", result)
        }
        else {
            console.log(playerSelection, "beats", computerSelection + ",", result)
        }    
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("Tie!");
    }
}
playGame()
