let a = prompt('Введіть число А:', '');
let b = prompt('Введіть число B:', '');
let c = prompt('Введіть число C:', '');

const two = 2,
      four = 4;

if(isNaN(a) || isNaN(b) || isNaN(c) 
  || a === '' || b === '' || c === '' 
  || a === null || b === null || c === null
  || a === '0' ){
  console.log('Invalid input data');
}else{
  let d;
  a = +a;
  b = +b;
  c = +c;
  d = b*b - four*a*c;
  if(d < 0){
    console.log('no solution, d < 0');
  }else{
   let x1, x2;
   x1 = (-b + Math.sqrt(d)) / (two*a);
   x2 = (-b - Math.sqrt(d)) / (two*a);
   if(x1 === 0 && x2 === 0){
    console.log('x = 0');
   }else{
    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
   }
  }
}


