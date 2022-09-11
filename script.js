const getComputerChoice = () => {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)]
};
const body = document.querySelector('body');
const result = document.createElement('h2');
result.style.textAlign = 'center';
const score = document.createElement('p');
score.classList.add('score')
body.appendChild(score);
body.appendChild(result);
const reset = document.createElement('button');
reset.textContent = 'Play again';
reset.style.display = 'block';
reset.style.marginInline = 'auto';


const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener('click', playGame));

  function playGame(e) {
    e.target.classList.add('on');
    let playerSelection = e.target.id;
    const playRound = (playerSelection, computerSelection) => {
      if(playerSelection === 'rock' && computerSelection === 'Paper') {
        result.textContent = 'You lose! Paper beats Rock';
        computerScore += 1;
      } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        result.textContent = 'You win! Rock beats Scissors';
        playerScore += 1;
      } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        result.textContent = 'You win! Paper beats Rock';
        playerScore += 1;
      } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        result.textContent = 'You lose! Scissors beat Paper';
        computerScore += 1;
      } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        result.textContent = 'You win! Scissors beat Paper';
        playerScore += 1;
      } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        result.textContent = 'You lose! Rock beats Scissors';
        computerScore += 1;
      } else if (playerSelection === computerSelection.toLowerCase()) {
        result.textContent = 'Draw! You both chose the same answer';
      } 
      let currentScore = `${playerScore} : ${computerScore}`;
      if(playerScore === 5){
        result.textContent = `You won 5 to ${computerScore}!`;
        buttons.forEach(button => button.removeEventListener('click', playGame));
        body.appendChild(reset);
      } else if(computerScore === 5) {
        result.textContent = `The computer won 5 to ${playerScore}!`;
        buttons.forEach(button => button.removeEventListener('click', playGame));
        body.appendChild(reset);
      }
      score.textContent = currentScore;
    };
    playRound(playerSelection, getComputerChoice());
  };



  reset.addEventListener('click', e => {
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button => button.addEventListener('click', playGame));
    result.textContent = '';
    score.textContent = '';
    body.removeChild(reset);
    score.classList.remove('critical');
  });

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
function removeTransition(e) { 
  if (e.propertyName !== 'transform') return;
  this.classList.remove('on');
};
