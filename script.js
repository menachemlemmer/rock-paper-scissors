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
  if (player == computer) {
    result = "Tie!";
  } else if (
    (player == "ROCK" && computer == "SCISSORS") ||
    (player == "SCISSORS" && computer == "PAPER") ||
    (player == "PAPER" && computer == "ROCK")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  return result;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const winnerText = document.querySelector('.winner');
let playerScoreText = document.querySelector('.playerScore');
let compScoreText = document.querySelector('.compScore');
let scoreBoardText = document.querySelector('.scoreboard');
let playerSelection;
let playerScore = 0;
let compScore = 0;
let result;


rock.addEventListener('click', () => {
  playerSelection = 'rock';
  result = playRound(playerSelection, getComputerChoice());
  calculateResult(result);
})
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  result = playRound(playerSelection, getComputerChoice());
  calculateResult(result);
})
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  result = playRound(playerSelection, getComputerChoice());
  calculateResult(result);
})


function calculateResult(string) {
  winnerText.textContent = "";
  if (string == "You win!") {
    playerScore += 1;
  }
  else if (string == "You lose!") {
    compScore += 1;
  }
  compScoreText.textContent = compScore;
  playerScoreText.textContent = playerScore;
  scoreBoardText.textContent = string;
  if ((compScore + playerScore) == 5) {
    if (compScore > playerScore) {
      winnerText.textContent = "Computer wins the game!";
    }
    else {
      winnerText.textContent = "You win the game!";
    }
    playerScore = 0;
    compScore = 0;
  }
}
