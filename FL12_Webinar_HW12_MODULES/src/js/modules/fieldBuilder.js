export default function fieldBuilder(){
  const field = document.querySelector('.field');

  for (let i = 0; i < 9; i++) {
    const newCell = document.createElement('div');
    field.appendChild(newCell).classList.add('cell');
  }

  const allCell = document.querySelectorAll('.cell');
  allCell.forEach(cell => cell.textContent = '');

  for (let i = 0; i < 8; i++) {
    const line = document.createElement('div');
    field.appendChild(line).classList.add('line');
  }

  const allLines = document.querySelectorAll('.line');
  allLines.forEach((line, index) => {
    line.classList.add(`line${index + 1}`);
    line.style.transitionDuration = '1s';
  });
}