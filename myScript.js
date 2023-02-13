const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerSelection() {
  let userSelection;
  input = false;
  while (input === false) {
    userSelection = prompt("What's your Choice ? ( Rock, Paper or Scissors)");
    userSelection = userSelection.toLowerCase();
    if (choices.includes(userSelection)) {
      input = true;
    }
  }
  return userSelection;
}

function playRound() {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerSelection();
  console.log(playerSelection);

  if (playerSelection === computerSelection) {
    return 0;
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return true;
    } else {
      return false;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return false;
    } else {
      return true;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return true;
    } else {
      return false;
    }
  }
}

function game() {
  userScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    result = playRound();
    if (result === true) {
      userScore++;
      console.log("You Won");
    } else if (result === false) {
      computerScore++;
      console.log("You Lost this round");
    } else {
      console.log("Draw");
    }
  }
  if (userScore == computerScore) {
    console.log(
      `Draw !  Both you and computer won ${userScore} out of 5 rounds`
    );
  } else if (userScore > computerScore) {
    console.log(`You Won ! Score: ${userScore} out of 5 rounds`);
  } else {
    console.log(`You Lost ! Score: ${userScore} out of 5 rounds`);
  }
}
