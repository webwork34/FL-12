import objVar from './variables';
import checkWin from './checkWin';
import activePlayer from './activePlayer';

export default function addStepToClick(){
  objVar.step++;
  if(objVar.step <= 9 && !objVar.finished){
    if (this.textContent === '' && objVar.step % 2 == 1){
      this.textContent = 'X';
      this.style.cursor = 'not-allowed';
      objVar.playerOneFirstStep = !objVar.playerOneFirstStep;
      activePlayer();
    }else if(this.textContent == 'X'){
      objVar.step--;
    }else if(this.textContent == 'O'){
      objVar.step--;
    }else {
      this.textContent = 'O';
      this.style.cursor = 'not-allowed';
      objVar.playerOneFirstStep = !objVar.playerOneFirstStep;;
      activePlayer();
    }
  }
  
  if(objVar.step >= 5){
    checkWin('X');
    checkWin('O');
  }

  if(objVar.step === 9 && objVar.drawnGame){
    const playerOne = document.querySelector('.player1'),
          playerTwo = document.querySelector('.player2'),
          drawn = document.querySelector('.drawn'),
          scoreOne = document.querySelector('.score1'),
          scoreTwo = document.querySelector('.score2');

    drawn.style.display = 'block';
    objVar.scoreOne++;
    objVar.scoreTwo++;

    scoreOne.textContent = objVar.scoreOne;
    scoreTwo.textContent = objVar.scoreTwo;
    playerOne.style.textDecoration = 'none';
    playerTwo.style.textDecoration = 'none';
    
  }
}