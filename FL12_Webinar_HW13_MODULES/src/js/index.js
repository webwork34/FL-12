import './../styles/style.scss';
import fieldBuilder from './modules/fieldBuilder';
import objVar from './modules/variables';
import whoIsFirst from './modules/whoIsFirst';
import startGame from './modules/startGame';
import changeCss from './modules/changeCss';
import addStepToClick from './modules/addStepToClick';
import clearField from './modules/clearField';

function makeStep(){
  const allCell = document.querySelectorAll('.cell');
  allCell.forEach(cell => {
    cell.addEventListener('click', addStepToClick);
  });
}

function newRound(){
  const newRoundBtn = document.getElementById('new');
  newRoundBtn.addEventListener('click', () => {
    objVar.playerOneFirstStep = true;
    whoIsFirst();
    clearField();
    setTimeout(changeCss, 100);
  });
}

function newGame(){
  const newGameBtn = document.getElementById('reset'),
        scoreOne = document.querySelector('.score1'),
        scoreTwo = document.querySelector('.score2');

  newGameBtn.addEventListener('click', () => {
    scoreOne.textContent = objVar.scoreOne = 0;
    scoreTwo.textContent = objVar.scoreTwo = 0;
    objVar.playerOneFirstStep = true;
    startGame();
    whoIsFirst();
    clearField();
    setTimeout(changeCss, 100);
  });
}

fieldBuilder();
whoIsFirst();
startGame();
makeStep();
newRound();
newGame();