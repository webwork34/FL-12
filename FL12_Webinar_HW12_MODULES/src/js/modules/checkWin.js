import objVar from './variables';
import addStepToClick from './addStepToClick';

export default function checkWin(mark){
  const allCell = document.querySelectorAll('.cell');
        
  const finishedRound = () => {
    const playerOne = document.querySelector('.player1'),
          playerTwo = document.querySelector('.player2'),
          winnerName = document.querySelector('.winner-name'),
          winnerText = document.querySelector('.winner-text'),
          scoreOne = document.querySelector('.score1'),
          scoreTwo = document.querySelector('.score2');

    objVar.finished = true;
    objVar.drawnGame = false;
    winnerText.style.display = 'block';
    winnerName.textContent = objVar.playerOneFirstStep ? objVar.playerTwoName : objVar.playerOneName;
    playerOne.style.textDecoration = 'none';
    playerTwo.style.textDecoration = 'none';
    

    if(!objVar.playerOneFirstStep){
      objVar.scoreOne++;
    }else{
      objVar.scoreTwo++;
    }
    scoreOne.textContent = objVar.scoreOne;
    scoreTwo.textContent = objVar.scoreTwo;

    allCell.forEach(cell => {
      cell.style.cursor = 'not-allowed';
      cell.removeEventListener('click', addStepToClick);
    });
  };

  const hOne = document.querySelector('.line1'),
				hTwo = document.querySelector('.line2'),
				hThree = document.querySelector('.line3'),
				vOne = document.querySelector('.line4'),
				vTwo = document.querySelector('.line5'),
				vThree = document.querySelector('.line6'),
				dOne = document.querySelector('.line7'),
				dTwo = document.querySelector('.line8');

  if(allCell[0].textContent === mark && allCell[1].textContent === mark && allCell[2].textContent === mark){
    hOne.style.width = '450px';
    finishedRound();
  }else if(allCell[3].textContent === mark && allCell[4].textContent === mark && allCell[5].textContent === mark){
    hTwo.style.width = '450px';
    finishedRound();
  }else if(allCell[6].textContent === mark && allCell[7].textContent === mark && allCell[8].textContent === mark){
    hThree.style.width = '450px';
    finishedRound();
  }else if(allCell[0].textContent === mark && allCell[3].textContent === mark && allCell[6].textContent === mark){
    vOne.style.height = '450px';
    finishedRound();
  }else if(allCell[1].textContent === mark && allCell[4].textContent === mark && allCell[7].textContent === mark){
    vTwo.style.height = '450px';
    finishedRound();
  }else if(allCell[2].textContent === mark && allCell[5].textContent === mark && allCell[8].textContent === mark){
    vThree.style.height = '450px';
    finishedRound();
  }else if(allCell[0].textContent === mark && allCell[4].textContent === mark && allCell[8].textContent === mark){
    dOne.style.width = '633px';
    finishedRound();
  }else if(allCell[2].textContent === mark && allCell[4].textContent === mark && allCell[6].textContent === mark){
    dTwo.style.width = '632px';
    finishedRound();
  }
}