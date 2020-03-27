import objVar from './variables';

export default function startGame(){
  const playerOne = document.querySelector('.player1'),
        playerTwo = document.querySelector('.player2');
  
  objVar.playerOneName = prompt('Enter name of first player', 'Player one');
  objVar.playerTwoName = prompt('Enter name of second player', 'Player two');
  playerOne.textContent = objVar.playerOneName;
  playerTwo.textContent = objVar.playerTwoName;
}