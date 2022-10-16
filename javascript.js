let computerOptions = [ "fire", "water", "grass"];

let playerChoice = "place holder";
let playerChoicePic = document.querySelector("#player-choice-img")
let computerChoice = "place holder";
let winStatus = "win"
let computerLives = 5
let playerLives = 5
let dialogbox = document.getElementById('startbtn');

//Computer functions

function getComputerChoice() {
  computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerChoice;
}

function generateComputerPic() {
  let computerPic = document.getElementById("cpu-choice-img")
  if (computerChoice === 'fire') {
    computerPic.src="fire-type.png"
  } if (computerChoice === 'water') {
    computerPic.src="water-type.png"
  } if (computerChoice === "grass") {
    computerPic.src="grass-type.png"
  }
  return computerPic;
}

// CPU lives managment
const cpuLife1 = document.getElementById('cpulife1')
const cpuLife2 = document.getElementById('cpulife2')
const cpuLife3 = document.getElementById('cpulife3')
const cpuLife4 = document.getElementById('cpulife4')
const cpuLife5 = document.getElementById('cpulife5')

function computerLivesMath() {
  if (computerLives === 4) {
    cpuLife5.style.visibility = 'hidden';
  } else if (computerLives === 3) {
    cpuLife5.style.visibility = 'hidden';
    cpuLife4.style.visibility = 'hidden';
  } else if (computerLives === 2) {
    cpuLife5.style.visibility = 'hidden';
    cpuLife4.style.visibility = 'hidden';
    cpuLife3.style.visibility = 'hidden';
  } else if (computerLives === 1) {
    cpuLife5.style.visibility = 'hidden';
    cpuLife4.style.visibility = 'hidden';
    cpuLife3.style.visibility = 'hidden';
    cpuLife2.style.visibility = 'hidden';
  } else if (computerLives === 0) {
    cpuLife5.style.visibility = 'hidden';
    cpuLife4.style.visibility = 'hidden';
    cpuLife3.style.visibility = 'hidden';
    cpuLife2.style.visibility = 'hidden';
    cpuLife1.style.visibility = 'hidden';
  }
}

// player lives managment

const userLife1 = document.getElementById('playerlife1')
const userLife2 = document.getElementById('playerlife2')
const userLife3 = document.getElementById('playerlife3')
const userLife4 = document.getElementById('playerlife4')
const userLife5 = document.getElementById('playerlife5')

function playerLivesMath() {
  if (playerLives === 4) {
    userLife1.style.visibility = 'hidden';
  } else if (playerLives === 3) {
    userLife1.style.visibility = 'hidden';
    userLife2.style.visibility = 'hidden';
  } else if (playerLives === 2) {
    userLife1.style.visibility = 'hidden';
    userLife2.style.visibility = 'hidden';
    userLife3.style.visibility = 'hidden';
  } else if (playerLives === 1) {
    userLife1.style.visibility = 'hidden';
    userLife2.style.visibility = 'hidden';
    userLife3.style.visibility = 'hidden';
    userLife4.style.visibility = 'hidden';
  } else if (playerLives === 0) {
    userLife1.style.visibility = 'hidden';
    userLife2.style.visibility = 'hidden';
    userLife3.style.visibility = 'hidden';
    userLife4.style.visibility = 'hidden';
    userLife5.style.visibility = 'hidden';
  }
}

//function to revive player and cpu lol

function revive() {
  userLife1.style.visibility = 'visible';
  userLife2.style.visibility = 'visible';
  userLife3.style.visibility = 'visible';
  userLife4.style.visibility = 'visible';
  userLife5.style.visibility = 'visible';
  cpuLife5.style.visibility = 'visible';
  cpuLife4.style.visibility = 'visible';
  cpuLife3.style.visibility = 'visible';
  cpuLife2.style.visibility = 'visible';
  cpuLife1.style.visibility = 'visible';
}

// player choice method

const fireBtn = document.querySelector("#firebtn")
fireBtn.addEventListener("click", playFire)

const waterBtn = document.querySelector("#waterbtn")
waterBtn.addEventListener("click", playWater)

const grassBtn = document.querySelector("#grassbtn")
grassBtn.addEventListener("click", playGrass)

let playerPic = document.getElementById("player-choice-img")

function playFire() {
  playRound('fire')
  playerPic.src="fire-type.png"
}

function playWater() {
  playRound('water')
  playerPic.src="water-type.png"
}

function playGrass() {
  playRound('grass')
  playerPic.src="grass-type.png"
}

// play round with built in win logic

function playRound(playerChoice) {
  getComputerChoice()
  generateComputerPic()
  if (playerChoice ===  "fire") {
    if (computerChoice ===  "fire") {
      winStatus = "That's not very effective.. It's a tie!"
      dialogbox.innerText = "That's not very effective.. It's a tie!"
    } else if (computerChoice === "grass") {
      winStatus = "you win!"
      dialogbox.innerText = "Its super effective!! You win!"
      computerLives = --computerLives
    } else {
      winStatus = " you lose!"
      dialogbox.innerText = "Thats not very effective.. You lose!"
      playerLives = --playerLives
    }
  } else if (playerChoice === "water") {
    if (computerChoice === "water") {
      dialogbox.innerText = "That's not very effective.. It's a tie!"
      winStatus = "it's a tie!";
    } else if (computerChoice ===  "fire") {
      winStatus = "you win!";
      dialogbox.innerText = "Its super effective!! You win!"
      computerLives = --computerLives
    } else {
      winStatus = "you lose!";
      dialogbox.innerText = "Thats not very effective.. You lose!"
      playerLives = --playerLives;
    }
  } else if (playerChoice === "grass") {
    if (computerChoice === "grass") {
      winStatus = "it's a tie!";
      dialogbox.innerText = "That's not very effective.. It's a tie!"
    } else if (computerChoice === "water") {
      winStatus = "you win!";
      dialogbox.innerText = "Its super effective!! You win!"
      computerLives = --computerLives
    } else {
      winStatus = "you lose!";
      dialogbox.innerText = "Thats not very effective.. You lose!"
      playerLives = --playerLives
    }
  }
  computerLivesMath()
  playerLivesMath()
  checkWinner()
  return console.log(winStatus, playerLives, computerLives)
  
}

function checkWinner() {
  if (playerLives === 0) {
    restartGame()
    dialogbox.innerText = "Game over! You have LOST the Poke-battle. Better luck next time! Pick again to start a new game."
  } else if (computerLives === 0) {
    restartGame()
    dialogbox.innerText = "Game over! You have WON the Poke-battle. Congratulations! Pick again to start a new game!"
  }
}

function restartGame() {
  playerLives = 5
  computerLives = 5
  revive()
}