import objVar from './variables';
import activePlayer from './activePlayer';

export default function whoIsFirst(){
  const markOne = document.querySelector('.mark1'),
        markTwo = document.querySelector('.mark2');

  objVar.first = Math.floor(Math.random() * 2) + 1;
  if(objVar.first === 1){
    markOne.textContent = 'X';
    markTwo.textContent = 'O';
    activePlayer();
  }else if(objVar.first === 2){
    objVar.playerOneFirstStep = false;
    markOne.textContent = '0';
    markTwo.textContent = 'X';
    activePlayer();
  }
}