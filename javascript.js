// create an array to store the options for getComputerChoice to pick from

let computerOptions = [ "fire", "water", "grass"];

// create a variable called playerChoice to store the players and prompt them for their selection

let playerChoice = "place holder";
let playerChoicePic = document.querySelector("#player-choice-img")



// create a variable to store my getComputer choice in

let computerChoice = "place holder";

// create a vairable to hold win status

let winStatus = "win"

//create a variable to keep scores

let computerScore = 0
let playerScore = 0

// create a function called getComputerChoice to randomly return fire, water, Sciccors

function getComputerChoice() {
  computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerChoice;
}

// create a function to get playerchoice

function getPlayerChoice() {
  playerChoice = prompt("Please pick: fire, water, or grass")
  playerChoice = playerChoice.toLowerCase();
  return playerChoice
}

function generatePlayerPic() {
  if (playerChoice === 'fire') {
    playerChoicePic = document.querySelector("#player-choice-img").innerHTML = '<img src="/images/fire-type.png"/>';
  } if (playerChoice === 'water') {
    playerChoicePic = document.querySelector("#player-choice-img").innerHTML = '<img src="/images/water-type.png"/>';
  } if (playerChoice === "grass") {
     playerChoicePic = document.querySelector("#player-choice-img").innerHTML = '<img src="/images/grass-type.png"/>';
  }
  return playerChoicePic;

  }


// create a function to play a 'round' of fire, water, grass

function playRound(playerChoice, computerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice();
  generatePlayerPic();
  checkWinner();
  return console.log(`you chose ${playerChoice} and the computer chose ${computerChoice}, ${winStatus}! The score is ${playerScore} to ${computerScore}!`);
} 

// create a function to check winner

function checkWinner() {
  if (playerChoice ===  "fire") {
    if (computerChoice ===  "fire") {
      winStatus = "it's a tie!"
    } else if (computerChoice === "grass") {
      winStatus = "you win!"
      playerScore = ++playerScore
    } else {
      winStatus = " you lose!"
      computerScore = ++computerScore
    }
  } else if (playerChoice === "water") {
    if (computerChoice === "water") {
      winStatus = "it's a tie!";
    } else if (computerChoice ===  "fire") {
      winStatus = "you win!";
      playerScore = ++playerScore
    } else {
      winStatus = "you lose!";
      computerScore = ++computerScore;
    }
  } else if (playerChoice === "grass") {
    if (computerChoice === "grass") {
      winStatus = "it's a tie!";
    } else if (computerChoice === "water") {
      winStatus = "you win!";
      playerScore = ++playerScore
    } else {
      winStatus = "you lose!";
      computerScore = ++computerScore
    }
  }
}
// create a for loop to make the game play for 5 rounds

function startGame() {
  for (let i = 0; i < 5; i++)
  playRound();
}

// DOM manipulation

function windowOnClick(event) {
  if (event.target === body) {
    startGame();
  }
}
