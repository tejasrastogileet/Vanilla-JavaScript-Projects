function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  if (player === computer) return false;
  if (player === "Rock" && computer === "Scissors") return true;
  if (player === "Scissors" && computer === "Paper") return true;
  if (player === "Paper" && computer === "Rock") return true;
  return false;
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `You won! ${userOption} beats ${computerResult}`;
  } else if (hasPlayerWonTheRound(computerResult, userOption)) {
    computerScore++;
    return `You lost! ${computerResult} beats ${userOption}`;
  } else {
    return `It's a tie!`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg  ");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  const roundResults = getRoundResults(userOption);

  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = roundResults;

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "flex";
}
