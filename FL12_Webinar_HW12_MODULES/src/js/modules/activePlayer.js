import objVar from './variables';

export default function activePlayer(){
  const playerOne = document.querySelector('.player1'),
        playerTwo = document.querySelector('.player2');

  playerOne.style.textDecoration = objVar.playerOneFirstStep ? 'underline' : 'none';
  playerTwo.style.textDecoration = objVar.playerOneFirstStep ? 'none' : 'underline';
}