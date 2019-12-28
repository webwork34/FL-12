function addOne(x) {
  return x + 1;
}

function pipe(){
  let res = arguments[0];
  for (let i = 0; i < arguments.length - 1; i++) {
    res = addOne(res);
  }
  return res;
}

pipe();