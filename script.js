let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;
let playerSelection = "";
let counter = 0;

const button1 = document.createElement("button");
button1.textContent = "Rock";
document.body.appendChild(button1);

const button2 = document.createElement("button");
button2.textContent = "Paper";
document.body.appendChild(button2);

const button3 = document.createElement("button");
button3.textContent = "Scissors";
document.body.appendChild(button3);

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
    counter++;
    return `${counter}. Tie`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    counter++;
    return `${counter}. You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    computerScore++;
  counter++;
  return `${counter}. You Lose! ${computerSelection} beats ${playerSelection}`;
}

// add event listeners to the buttons

button1.addEventListener("click", function () {
  if (computerScore !== 5 && playerScore !== 5) {
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    playerSelection = "rock";

    const para = document.createElement("p");
    para.textContent = playRound(playerSelection, computerSelection);
    document.body.appendChild(para);
    const scorePara = document.createElement("p");
    scorePara.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
    document.body.appendChild(scorePara);
    endGame();
  }
});

button2.addEventListener("click", function () {
  if (computerScore !== 5 && playerScore !== 5) {
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    playerSelection = "paper";
    const para = document.createElement("p");
    para.textContent = playRound(playerSelection, computerSelection);
    document.body.appendChild(para);
    const scorePara = document.createElement("p");
    scorePara.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
    document.body.appendChild(scorePara);
    endGame();
  }
});

button3.addEventListener("click", function () {
  if (computerScore !== 5 && playerScore !== 5) {
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    playerSelection = "scissors";
    const para = document.createElement("p");
    para.textContent = playRound(playerSelection, computerSelection);
    document.body.appendChild(para);
    const scorePara = document.createElement("p");
    scorePara.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
    document.body.appendChild(scorePara);
    endGame();
  }
});

function endGame() {
  if (computerScore === 5 || playerScore === 5) {
    const endPara = document.createElement("p");
    if (computerScore === 5) {
      endPara.textContent = "Computer Won!!!";
      document.body.appendChild(endPara);
    } else {
      endPara.textContent = "You Won!!!";
      document.body.appendChild(endPara);
    }
  }
}
