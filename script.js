const getComputerChoice = () => {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)]
};

const playRound = (playerSelection, computerSelection) => {
  if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
    return'You lose! Paper beats Rock';
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
    return'You win! Rock beats Scissors';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
    return 'You win! Paper beats Rock';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
    return 'You lose! Scissors beat Paper';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
    return 'You win! Scissors beat Paper';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return 'Draw! You both choose the same answer';
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let askUser = prompt('Choose between Rock, Paper and Scissors!');
    let result = playRound(askUser, getComputerChoice());
    console.log(result);
  }
};

