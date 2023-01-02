let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;
let playerSelection = "";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    computerScore++;
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  // for (let i = 0; i < 5; i++) {

  const button1 = document.createElement("button");
  button1.textContent = "Rock";
  document.body.appendChild(button1);

  const button2 = document.createElement("button");
  button2.textContent = "Paper";
  document.body.appendChild(button2);

  const button3 = document.createElement("button");
  button3.textContent = "Scissors";
  document.body.appendChild(button3);

  // add event listeners to the buttons
  button1.addEventListener("click", function () {
    playerSelection = "rock";
  });

  button2.addEventListener("click", function () {
    playerSelection = "paper";
  });

  button3.addEventListener("click", function () {
    playerSelection = "scissors";
  });

  computerSelection = getComputerChoice();
  computerSelection = computerSelection.toLocaleLowerCase();
  console.log("Computer:", computerSelection);

  // playerSelection = prompt("Rock, Paper or Scissors?");
  // playerSelection = playerSelection.toLowerCase();
  console.log("You:", playerSelection);

  console.log(playRound(playerSelection, computerSelection));
  console.log("Computer Score:", computerScore);
  console.log("Player Score:", playerScore);
}
if (computerScore > playerScore) {
  console.log("Computer Won!!!");
} else if (playerScore > computerScore) {
  console.log("You Won!!!");
} else {
  console.log("The Game is a Tie!!!");
}
// }

game();
