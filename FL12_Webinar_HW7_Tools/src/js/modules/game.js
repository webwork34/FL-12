import paperClick from './paperClick';
import rockClick from './rockClick';
import scissorsClick from './scissorsClick';
import resetClick from './resetClick';

const game = () => {
  const rock = document.getElementById('rock'),
        paper = document.getElementById('paper'),
        scissors = document.getElementById('scissors'),
        reset = document.getElementById('reset');
        
  rock.addEventListener('click', rockClick);
  paper.addEventListener('click', paperClick);
  scissors.addEventListener('click', scissorsClick);
  reset.addEventListener('click', resetClick);
};

export default game;