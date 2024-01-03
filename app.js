const lookupTable = Object.freeze({
  1: "Rock",
  2: "Paper",
  3: "Scissor",
  rock: 1,
  paper: 2,
  scissor: 3,
});

const getNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getComputerChoice = () => lookupTable[getNumberInRange(1, 3)];

const lower = (a, b) => (a > b ? b : a);

const playRound = (playerSelection, computerSelection) => {
  const playerValue = lookupTable[playerSelection.toLowerCase()];
  const computerValue = lookupTable[computerSelection.toLowerCase()];
  const resultNumberValue = Math.abs(playerValue - computerValue);
  const lowerValue = lower(playerValue, computerValue);
  let result;

  if (
    (resultNumberValue === 1 && computerValue === lowerValue) ||
    (resultNumberValue === 2 && playerValue === lowerValue)
  ) {
    result = `You Win! ${lookupTable[playerValue]} beats ${lookupTable[computerValue]}`;
  } else if (resultNumberValue === 0) {
    result = "Tie";
  } else {
    result = `You Lose! ${lookupTable[computerValue]} beats ${lookupTable[playerValue]}`;
  }

  return result;
};

const validatePlayerSelection = (playerSelection) => {
  return lookupTable.hasOwnProperty(playerSelection.toLowerCase());
};

const getPlayerSelection = () => {
  let playerSelection = prompt("Add your choice: ");

  while (!validatePlayerSelection(playerSelection)) {
    console.log("Invalid Choice. Try Rock, Paper or Scissor");
    playerSelection = prompt("Add your choice: ");
  }

  return playerSelection;
};

const game = () => {
  let result;

  do {
    result = playRound(getPlayerSelection(), getComputerChoice());
  } while (result === "Tie");

  console.log(result);
};

for (let index = 0; index < 5; index++) {
  game();
}
