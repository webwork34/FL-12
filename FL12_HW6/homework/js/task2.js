let a = prompt('Введіть сторону А:', '');
let b = prompt('Введіть сторону B:', '');
let c = prompt('Введіть сторону C:', '');

if(isNaN(a) || isNaN(b) || isNaN(c) 
  || a === '' || b === '' || c === '' 
  || a === null || b === null || c === null){
  alert('input values. should be ONLY numbers');
}else if(a <= 0 || b<= 0 || c <= 0){
  alert('A triangle must have 3 sides with a positive definite length');
}else{
  a = +a;
  b = +b;
  c = +c;
  if(a >= b + c || b >= a + c || c >= a + b){
    console.log('Triangle doesn’t exist');
  }else{
    if(a === b && b === c){
      console.log('Equilateral triangle');
    }else if(a === b || a === c || b === c){
      console.log('Isosceles triangle');
    }else{
      console.log('Scalene triangle');
    }
  }
}