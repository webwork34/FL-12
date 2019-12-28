function getMin(){
  let min = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if(arguments[i] < min){
      min = arguments[i];
    }
  }
  return min;
}

getMin();