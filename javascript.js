// create an array to store the options for getComputerChoice to pick from

let computerOptions = ["rock", "paper", "scissors"];

// create a variable to store my getComputer choice in

let computerChoice = 'rock';

// create a function called getComputerChoice to randomly return Rock, Paper, Sciccors

function getComputerChoice() {
  computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerChoice;
}

// print the result in the console.log for testing **Comment out when not using**

// console.log(getComputerChoice());

// Above is for testing