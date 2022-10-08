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

// create a function to get playerchoice

function getPlayerChoice() {
  playerChoice = prompt("Please pick: rock, paper, or scissors")
  playerChoice = playerChoice.toLowerCase();
  return playerChoice
}

// create a function to play a 'round' of rock, paper, scissors

function playRound(playerChoice, computerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice();
  checkWinner();
  return console.log(`you chose ${playerChoice} and the computer chose ${computerChoice}, ${winStatus}!`);
} 

// create a function to check winner

function checkWinner() {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      winStatus = "it's a tie!"
    } else if (computerChoice === "scissors") {
      winStatus = "you win!"
    } else {
      winStatus = "you lose"
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      winStatus = "it's a tie!";
    } else if (computerChoice === "rock") {
      winStatus = "you win!";
    } else {
      winStatus = "you lose";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "scissors") {
      winStatus = "it's a tie!";
    } else if (computerChoice === "paper") {
      winStatus = "you win!";
    } else {
      winStatus = "you lose";
    }
  }
}
// create a for loop to make the game play for 5 rounds

function startGame() {
  for (let i = 0; i < 5; i++)
  playRound();
}

console.log(startGame())










