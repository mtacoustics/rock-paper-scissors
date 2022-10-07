// create an array to store the options for getComputerChoice to pick from

let computerOptions = ["rock", "paper", "scissors"];

// create a variable called playerChoice to store the players and prompt them for their selection

let playerChoice = 'place holder';

// create a variable to store my getComputer choice in

let computerChoice = 'place holder';

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
  return console.log(`you chose ${playerChoice} and the computer chose ${computerChoice}!`), checkWinner();
} 

// create a function to check winner

function checkWinner() {
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
      console.log('You win! Congratulations!')
  } 
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
      console.log('That means you lose!')
  } 
  else {
      console.log("It's a tie!")
  }
}

console.log(playRound())