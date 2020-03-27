export default function changeCss(){
  const allLine = document.querySelectorAll('.line');
  allLine.forEach((line, index) => {
    line.style.transitionDuration = '1s';
    if((index >= 0 && index <= 2) || index === 6 || index === 7){
      line.style.height = '2px';
    }else{
      line.style.width = '2px';
    }
  });
}