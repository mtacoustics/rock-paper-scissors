// create an array to store the options for getComputerChoice to pick from

let computerOptions = ["rock", "paper", "scissors"];

// create a variable called playerChoice to store the players and prompt them for their selection

let playerChoice = 'place holder';

// create a variable to store my getComputer choice in

let computerChoice = 'place holder';

// create a function called getComputerChoice to randomly return Rock, Paper, Sciccors

function getComputerChoice() {
  let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerChoice;
}

// create a function to play a 'round' of rock, paper, scissors

function playRound(playerChoice, computerChoice) {
  playerChoice = prompt("Please pick: rock, paper, or scissors");
  return playerChoice.toLowerCase()
} if (playerChoice === "rock" || computerChoice === "rock") {
    console.log("You both chose rock! it's a tie!")
}

console.log(playRound())