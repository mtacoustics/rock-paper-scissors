// create an array to store the options for getComputerChoice to pick from

let computerOptions = ["rock", "paper", "scissors"];

// create a variable called playerChoice to store the players and prompt them for their selection

let playerChoice = "place holder";

// create a variable to store my getComputer choice in

let computerChoice = "place holder";

// create a vairable to hold win status

let winStatus = "you win!"

// create a function called getComputerChoice to randomly return Rock, Paper, Sciccors

function getComputerChoice() {
  computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerChoice;
}

// create a function to play a 'round' of rock, paper, scissors

function playRound(playerChoice, computerChoice) {
  playerChoice = prompt("Please pick: rock, paper, or scissors")
  playerChoice = playerChoice.toLowerCase();
  computerChoice = getComputerChoice()
  checkWinner();
  return playerChoice, console.log(`you chose ${playerChoice} and the computer chose ${computerChoice}, ${winStatus}!`);
} 

// create a function to check winner

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
      winStatus = "You win!"
  } else if (playerChoice === "rock" && computerChoice === "paper") {
      winStatus = "You lose!"
  } else {
      winStatus = "It's a tie!"
  }
  return winStatus
}

console.log(playRound())










