import myConst from './myConst';
import computerStep from './computerStep';
import checkWinner from './checkWinner';

const scissorsClick = () => {
  const result = document.querySelector('.result');

  if(myConst.youWin !== 3 && myConst.computerWin !== 3){
    switch(computerStep()){
      case 3:
        result.classList.remove('red', 'green');
        result.classList.add('black');
        result.textContent = 'Scissors vs Scissors - Drawn';
        break;
      case 1:
        result.classList.remove('black', 'green');
        result.classList.add('red');
        result.textContent = 'Scissors vs Rock - You’ve Lost!';
        myConst.computerWin++;
        break;
      case 2:
        result.classList.remove('red', 'black');
        result.classList.add('green');
        result.textContent = 'Scissors vs Paper - You’ve Won!';
        myConst.youWin++;
        break;
    }
    console.log('youWin', myConst.youWin);
    console.log('computerWin', myConst.computerWin);
    checkWinner();
  }
};

export default scissorsClick;