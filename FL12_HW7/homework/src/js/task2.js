let ask = confirm('Do you want to play a game?');
let number, pocket, nextGame, newGame;
let range = 9,
    attempts = 3,
    prizeTotal = 0,
    possiblePrize = 100,
    intermediatePrice = 100,
    stepPrize = 25,
    coefficient = 2;
    
const rangeDefault = 9,
      attemptsDefault = 3,
      zero = 0,
      possiblePrizeDefault = 100,
      intermediatePriceDefault = 100,
      stepPrizeDefault = 25,
      coefficientDefault = 2,
      rangeStep = 4,
      two = 2,
      minusOne = -1;

if(ask === false){
  alert('You did not become a billionaire, but can.');
}else{
  number = Math.floor(Math.random() * range);

  for (let i = 0; i < attemptsDefault; i++) {
    pocket = prompt(`      Choose a rout pocket number from 0 to ${range-1}
      Attempts left: ${attempts}
      Total prize: ${prizeTotal}$
      Possible prize on curent attempt: ${possiblePrize}$`,'');
    if(+pocket === number){
      prizeTotal += possiblePrize;
      nextGame = confirm(`Congratulation, you won! Your prize is: ${prizeTotal}$. Do you want to continue?`);
      if(nextGame === false){
        alert(`Thank you for your participation. Your prize is: ${prizeTotal}$`);
        break;
      }else{
        range += rangeStep;
        intermediatePrice *= coefficientDefault;
        possiblePrize = intermediatePrice;
        stepPrize *= coefficientDefault;
        attempts = attemptsDefault;
        coefficient = coefficientDefault;
        i = minusOne;
        number = Math.floor(Math.random() * range);
      }
    }else if(+pocket !== number || pocket === null){
      attempts--;
      possiblePrize -= coefficient * stepPrize;
      coefficient--;

      if(i === attemptsDefault - 1){
        newGame = confirm(`Congratulation, you won! Your prize is: ${prizeTotal}$. Do you want to continue?`);
        if(newGame === false){
          alert(`Thank you for your participation. Your prize is: ${prizeTotal}$`);
          break;
        }else{
          range = rangeDefault;
          attempts = attemptsDefault;
          prizeTotal = zero;
          possiblePrize = possiblePrizeDefault;
          intermediatePrice = intermediatePriceDefault;
          stepPrize = stepPrizeDefault;
          coefficient = coefficientDefault;
          i = minusOne;
          number = Math.floor(Math.random() * range);
        }
      }
    }
  }
}