import objVar from './variables';
import addStepToClick from './addStepToClick';
import activePlayer from './activePlayer';

export default function clearField(){
  const drawn = document.querySelector('.drawn'),
        winnerText = document.querySelector('.winner-text');

  drawn.style.display = 'none';
  winnerText.style.display = 'none';

  activePlayer();
  const allCell = document.querySelectorAll('.cell');
  allCell.forEach(cell => {
    objVar.step = 0;
    objVar.finished = false;
    objVar.drawnGame = true;
    cell.textContent = '';
    cell.style.cursor = 'pointer';
    cell.addEventListener('click', addStepToClick);
  });

  const allLine = document.querySelectorAll('.line');
  allLine.forEach(line => {
    line.style.transitionDuration = '0s';
    line.style.width = 0;
    line.style.height = 0;
  });
}