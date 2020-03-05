import myConst from './myConst';

 const checkWinner = () => {
  const winner = document.querySelector('.winner'),
        youWinnerImg = document.querySelector('.you-winner'),
        computerWinnerImg = document.querySelector('.computer-winner');

  if(myConst.youWin === 3){
    winner.classList.add('green');
    winner.textContent = 'You are WINNER!';
    youWinnerImg.style.display = 'block';
  }else if(myConst.computerWin === 3){
    winner.classList.add('red');
    winner.textContent = 'Computer is WINNER!';
    computerWinnerImg.style.display = 'block';
  }
};

export default checkWinner;