let a = prompt('Введіть число А:', '');
let b = prompt('Введіть число B:', '');
let c = prompt('Введіть число C:', '');

const two = 2,
      four = 4;

if(isNaN(a) || isNaN(b) || isNaN(c) || 
  a === null || b === null || c === null || 
  a.trim().length === 0 || b.trim().length === 0 || c.trim().length === 0 ||
  a === '0' && b === '0' ){
  console.log('Invalid input data');
}else{
  let x1, x2;
  let d;
  a = +a;
  b = +b;
  c = +c;
  if(a === 0){
    x1 = -c / b;
    console.log('x = ' + x1);
  }else{
    d = b*b - four*a*c;
    if(d < 0){
      console.log('no solution, d < 0');
    }else{
      x1 = (-b + Math.sqrt(d)) / (two*a);
      x2 = (-b - Math.sqrt(d)) / (two*a);
      if(x1 === x2 ){
        console.log('x = ' + x1);
      }else{
        console.log('x1 = ' + x1);
        console.log('x2 = ' + x2);
      }
    }
  }
}


