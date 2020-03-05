import myConst from './myConst';

const resetClick = () => {
  const result = document.querySelector('.result'),
        winner = document.querySelector('.winner'),
        youWinnerImg = document.querySelector('.you-winner'),
        computerWinnerImg = document.querySelector('.computer-winner');

  myConst.youWin = 0;
  myConst.computerWin = 0; 
  result.textContent = 'Here will be result';
  result.classList.remove('red', 'green', 'black');
  winner.textContent = 'Here will be winner';
  winner.classList.remove('red', 'green', 'black');
  youWinnerImg.style.display = 'none';
  computerWinnerImg.style.display = 'none';
  
  console.log('youWin', myConst.youWin);
  console.log('computerWin', myConst.computerWin);
};

export default resetClick;