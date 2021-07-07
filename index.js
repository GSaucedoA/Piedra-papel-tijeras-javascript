//Regresa la alternativa de la pc
const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const options = ["Rock", "Paper", "Scissors"];
  return options[randomNumber];
};

const playRound = (computerSelection, playerSelection) => {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
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
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose from Rock, Scissors or Paper");
    const computerSelection = computerPlay();
    const result = playRound(computerSelection, playerSelection);
    //draw = 0, player wins = 1, computer wins = 2
    if (result == 1) {
      playerScore++;
    } else if (result == 2) {
      computerScore++;
    } else {
      ties++;
    }
  }
  let message = "Empate";
  if (playerScore > computerScore) {
    message = `Ha ganado el jugador Humano quedando ${playerScore} - ${computerScore}`;
  } else if (computerScore > playerScore) {
    message = `Ha ganado la computadora quedando ${computerScore} - ${playerScore}`;
  }
  message += `, y ha habido un total de ${ties} empates`;
  return message;
};
console.log(game());
