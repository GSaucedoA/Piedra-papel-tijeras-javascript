//Global Variables
let playerScore = 0;
let pcScore = 0;
let ties = 0;
const resultsDiv = document.querySelector("#results");
const playerHTMLScore = document.querySelector("#playerScore");
const pcHTMLScore = document.querySelector("#pcScore");
const tiesHTML = document.querySelector("#ties");
const pcSelection = document.querySelector(".options__pc-img");
const pcDefaultText = document.querySelector(".options__pc-default");
//End Global Variables

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const options = ["Rock", "Paper", "Scissors"];
  return options[randomNumber];
};

const playRound = (computerSelection, playerSelection) => {
  pcDefaultText.classList.add("none");
  pcSelection.src = `./img/${computerSelection}.png`;
  pcSelection.classList.remove("none");

  computerSelection = computerSelection.trim().toLowerCase();
  playerSelection = playerSelection.trim().toLowerCase();
  //draw = 0, player wins = 1, computer wins = 2
  let message = 2;
  if (playerSelection == computerSelection) {
    message = 0;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    message = 1;
  }

  return message;
};

function updateScore(result) {
  if (result === 0) {
    resultsDiv.textContent = "Round tied";
    tiesHTML.textContent = ++ties;
  } else if (result === 1) {
    resultsDiv.textContent = "You win this round!";
    playerHTMLScore.textContent = ++playerScore;
  } else {
    resultsDiv.textContent = "PC wins this round!";
    pcHTMLScore.textContent = ++pcScore;
  }
  resultsDiv.classList.remove("none");
  setTimeout(isGameFinished, 0);
}

function isGameFinished() {
  if (playerScore === 5) {
    alert("Congratulations, you win the game");
    resetGame();
  } else if (pcScore === 5) {
    alert("Bad luck!, PC wins the game");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  pcScore = 0;
  ties = 0;
  resultsDiv.textContent = "";
  playerHTMLScore.textContent = 0;
  pcHTMLScore.textContent = 0;
  tiesHTML.textContent = 0;
  pcDefaultText.classList.remove("none");
  pcSelection.classList.add("none");
  resultsDiv.classList.add("none");
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    updateScore(playRound(computerPlay(), this.textContent));
  });
});
